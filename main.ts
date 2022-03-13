input.onSound(DetectedSound.Loud, function () {
    bluetooth.uartWriteNumber(1)
})
input.onSound(DetectedSound.Quiet, function () {
    bluetooth.uartWriteNumber(0)
})
basic.showIcon(IconNames.Happy)
bluetooth.startUartService()
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
