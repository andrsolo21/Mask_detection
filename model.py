import pandas as pd
import numpy as np

from fastai.vision import *
from get_image import getImage, startCap, getCap, capRelease
import time


def getLearner():
    path = './model'
    return load_learner(path)


learn = getLearner()


def predict(cap):
    t = time.time()
    ret, frame = getCap(cap)
    # img = open_image(name)
    frame = frame / 255
    im = np.ndarray([3, frame.shape[0], frame.shape[1]])
    im[0] = frame[:, :, 0]
    im[1] = frame[:, :, 1]
    im[2] = frame[:, :, 2]
    img = Image(torch.tensor(im).float())
    prob = learn.predict(img)[2][0]
    print(prob, time.time() - t)
    return ret, frame


def getPrediction(frame, learner):
    frame = frame / 255
    im = np.ndarray([3, frame.shape[0], frame.shape[1]])
    im[0] = frame[:, :, 0]
    im[1] = frame[:, :, 1]
    im[2] = frame[:, :, 2]
    img = Image(torch.tensor(im).float())
    return learner.predict(img)[2][0]



if __name__ == '__main__':
    cap = startCap()
    t = time.time()
    n = 20
    for i in range(n):
        predict(cap)
    print((time.time() - t) / n)
    capRelease(cap)