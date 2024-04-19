input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Butterfly)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Olá")
})
basic.showIcon(IconNames.Angry)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.InBackground)
basic.forever(function () {
	
})
