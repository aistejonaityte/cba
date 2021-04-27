enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (alien.isHittingTile(CollisionDirection.Bottom)) {
        alien.vy = -200
        alien.ay += 600
        animation.setAction(alien, ActionKind.Jumping)
        animation.runMovementAnimation(
        alien,
        animation.animationPresets(animation.easeUp),
        100,
        false
        )
    }
})
info.onCountdownEnd(function () {
    let monkeys_Killed = 0
    scene.cameraShake(4, 500)
    game.showLongText("GAME OVER. You killed " + monkeys_Killed + " Monkeys. Try again!  ", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    if (level == 1) {
        scene.setBackgroundColor(15)
        tiles.setTilemap(tilemap`level2`)
        levelUp.setPosition(600, 65)
        alien.setPosition(50, 88)
        alien.setImage(assets.image`alien`)
        levelUp.setImage(assets.image`diamond`)
        level = 2
    } else if (level == 2) {
        scene.setBackgroundColor(15)
        tiles.setTilemap(tilemap`level3`)
        alien.setPosition(30, 88)
        levelUp.setPosition(500, 30)
        alien.setImage(assets.image`alien`)
        levelUp.setImage(assets.image`diamond`)
        level = 3
    } else {
        scene.cameraShake(4, 500)
        tiles.setTilemap(tilemap`level4`)
    }
})
let levelUp: Sprite = null
let alien: Sprite = null
let level = 0
info.startCountdown(60)
level = 1
info.setLife(3)
alien = sprites.create(assets.image`alien`, SpriteKind.Player)
alien.setPosition(75, 334)
alien.ay = 300
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(15)
controller.moveSprite(alien)
scene.cameraFollowSprite(alien)
let diamond = sprites.create(assets.image`diamond`, SpriteKind.Food)
levelUp = 0
levelUp.setPosition(11, 25)
