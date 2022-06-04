input.onPinPressed(TouchPin.P0, function () {
    open = 0
})
input.onPinReleased(TouchPin.P0, function () {
    open = 1
    alarmOn = 1
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    alarmOn = 0
})
let alarmOn = 0
let open = 0
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.forever(function () {
    while (alarmOn == 1) {
        music.setVolume(255)
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
})
