import cv2


def startCap():
    cap = cv2.VideoCapture(0)
    return cap


def getCap(cap, r=30):
    for i in range(r):
        cap.read()
    ret, frame = cap.read()
    return ret, frame


def capRelease(cap):
    cap.release()


def getImage():
    cap = cv2.VideoCapture(0)

    # "Прогреваем" камеру, чтобы снимок не был тёмным
    for i in range(30):
        cap.read()

    # Делаем снимок
    ret, frame = cap.read()

    # Записываем в файл
    # cv2.imwrite('cam.png', frame)

    # Отключаем камеру
    cap.release()

    return ret, frame