radio.onReceivedNumber(function (receivedNumber) {
    serial.writeLine("t" + String.fromCharCode(receivedNumber))
    basic.showNumber(receivedNumber)
    basic.pause(2000)
    basic.clearScreen()
})
radio.setGroup(1)
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate38400
)
basic.forever(function () {
	
})
