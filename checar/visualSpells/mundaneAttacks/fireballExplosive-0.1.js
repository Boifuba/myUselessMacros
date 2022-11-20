const target = game.user.targets.first();



let targets = Array.from(game.user.targets);

//Para cada target em Array aplicar a sequencia

targets.forEach(target => {
    new Sequence()
        .effect()
        .file("jb2a.fire_bolt.orange")
        .attachTo(token)
        .stretchTo(target, { attachTo: true })
        .size(500)

        .effect()
        .file("jb2a.explosion.orange.0")
        .atLocation(target)
        .belowTokens()
        .waitUntilFinished(-500)
        .scale(0.5)

        .effect()
        .file("jb2a.explosion.orange.0")
        .atLocation(target)
        .waitUntilFinished()

        .effect()
        .file("jb2a.flames.02.orange")
        .atLocation(target)
        .spriteOffset({ x: -10, y: -70 })
        .size(300)
        .fadeOut(1000)
        .persist()
        .play()

});