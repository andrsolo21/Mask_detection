import cv2
import tkinter
import PIL.Image, PIL.ImageTk
from fastai.vision import *
from model import getPrediction

class App:
    def __init__(self, window, window_title, video_source=0):
        self.window = window
        self.window.title(window_title)
        self.video_source = video_source

        # open video source (by default this will try to open the computer  webcam)
        self.vid = MyVideoCapture(self.video_source)

        self.label = tkinter.Label(window, text="none", font="Arial 20", pady=2)
        self.label.pack()

        self.i1 = 0 # позиция ячейки для перезаписи вероятности
        self.i2 = 0 # счетчик для отрисовки вероятности
        self.i3 = 0 # счетчик для пропуска подсчета кадров

        self.movAvg = 5 # кол-во элементов для подсчета скользящего среднего для предсказания
        self.fpi = 3 # кол-во подсчетов вероятности между изменениями вероятности на экране
        self.cc = 2 # кол-во пропусков кадров (для этих кадров не считается вероятность)

        self.preds = np.zeros(self.movAvg)



        # Create a canvas that can fit the above video source size
        self.canvas = tkinter.Canvas(window, width=self.vid.width, height=self.vid.height)
        self.canvas.pack()

        # After it is called once, the update method will be automatically called every delay milliseconds

        path = './model'
        self.learner = load_learner(path)

        self.delay = 15
        self.update()

        self.window.mainloop()

    def update(self):

        ret, frame = self.vid.get_frame()

        if ret:
            self.photo = PIL.ImageTk.PhotoImage(image=PIL.Image.fromarray(frame))
            self.canvas.create_image(0, 0, image=self.photo, anchor=tkinter.NW)

            if self.i3 % self.cc == 0:
                self.setText(frame)
            self.i3 += 1
            self.i3 = self.i3 % self.cc

        self.window.after(self.delay, self.update)


    def setText(self, frame):
        self.pred = float(getPrediction(frame, self.learner))

        self.preds[self.i1] = self.pred
        self.i1 += 1
        self.i1 = self.i1 % self.movAvg

        if self.i2 % self.fpi == 0:
            self.label.config(text="Вероятность человека в маске " + "%.1f" % (self.preds.mean() * 100) + "%")
        self.i2 += 1
        self.i2 = self.i2 % self.fpi

        print(self.pred)


class MyVideoCapture:
    def __init__(self, video_source=0):
        # Open the video source
        self.vid = cv2.VideoCapture(video_source)
        if not self.vid.isOpened():
            raise ValueError("Unable to open video source", video_source)

        # Get video source width and height
        self.width = self.vid.get(cv2.CAP_PROP_FRAME_WIDTH)
        self.height = self.vid.get(cv2.CAP_PROP_FRAME_HEIGHT)

    def get_frame(self):
        if self.vid.isOpened():
            ret, frame = self.vid.read()
            if ret:
                # Return a boolean success flag and the current frame converted to BGR
                return ret, cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        return False, None

    def __del__(self):
        if self.vid.isOpened():
            self.vid.release()

if __name__ == '__main__':
    App(tkinter.Tk(), "Window")