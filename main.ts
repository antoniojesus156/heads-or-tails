let counter = 0
let cross = 0
input.onLogoEvent(TouchButtonEvent.Released, function () {
    counter = 0
    cross = 0
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    for (let index = 0; index < 100; index++) {
        if (Math.randomBoolean()) {
            counter += 1
        } else {
            cross += 1
        }
    }
    basic.showNumber(counter)
    basic.showIcon(IconNames.Happy)
    basic.showNumber(cross)
    basic.showIcon(IconNames.No)
})
