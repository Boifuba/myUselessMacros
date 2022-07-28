const target = game.user.targets.first();

new Sequence()
    .effect()
        .file("jb2a.energy_beam.normal.bluepink.03")
        .attachTo(token)
        .stretchTo(target, { attachTo: true })
        .persist()
    .play()

    