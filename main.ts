bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.EigthNote)
    connected = true
    basic.clearScreen()
    basic.showString("Talk")
    while (connected == true) {
        led.plotBarGraph(
        input.soundLevel(),
        255
        )
    }
})
bluetooth.onBluetoothDisconnected(function () {
    connected = false
})
input.onSound(DetectedSound.Loud, function () {
    bluetooth.uartWriteNumber(1)
})
input.onSound(DetectedSound.Quiet, function () {
    bluetooth.uartWriteNumber(0)
})
let connected = false
basic.showIcon(IconNames.Happy)
bluetooth.startUartService()
