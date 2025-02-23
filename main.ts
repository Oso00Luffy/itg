basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showString("hello")
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
