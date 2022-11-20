let targets = Array.from(game.user.targets);
const target = game.user.targets.first();
ui.notifications.notify(token.name + " Ataca " + target.name);


targets.forEach(target => {
    new Sequence()
        .effect()
        .file("modules/jb2a_patreon/Library/Generic/Weapon_Attacks/Melee/Spear01_0*_Regular_Blue_800x600.webm")
        .attachTo(token)
        .stretchTo(target, { attachTo: true })
        //.size(5000)
        .scale(3.0)
        .spriteOffset({ x: -200, y: -50 })
        .wait(1500)


        .sound()
        .file("sounds/h-axe.mp3")
        .fadeInAudio(500)
        .fadeOutAudio(500)
        .wait(1500)


        .play()

});