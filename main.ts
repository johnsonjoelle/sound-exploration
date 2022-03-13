bluetooth.onBluetoothConnected(function () {
    bluetooth.startAccelerometerService()
    bluetooth.startButtonService()
    bluetooth.startTemperatureService()
})
basic.showIcon(IconNames.Happy)
bluetooth.startUartService()
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
