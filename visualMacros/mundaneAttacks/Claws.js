let targets = Array.from(game.user.targets);

targets.forEach(target => {
    new Sequence()
        .effect()
        .file("jb2a.melee_generic.slashing.one_handed")
        .attachTo(token)
        .stretchTo(target, { attachTo: true })
        //.size(5000)
        .scale(2.0)
        .spriteOffset({ x: 0, y: 25 })
        .wait(1500)

        .effect()
        .file("modules/jb2a_patreon/Library/Generic/Creature/Claws_01*.webm")
        .attachTo(token)
        .stretchTo(target, { attachTo: true })
        //.size(5000)
        .scale(2.0)
        .spriteOffset({ x: 0, y: 25 })
        .wait(1500)

        .sound()
        .file("sounds/h-axe.mp3")
        .fadeInAudio(500)
        .fadeOutAudio(500)
        .wait(1500)

        .play()

});