priority: 1

onEvent('player.tick', event => {
    const { x, y, z } = event.player
    if (x < -2110 && x > -2180 &&
        y < 132 && y > 120 &&
        z < 1400 && z > 1320
    ) {
        event.player.potionEffects.add('slow_falling')
    }
})

onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items');
        event.player.give('1x minecraft:wooden_pickaxe');
        event.player.give('1x minecraft:wooden_sword');
        event.player.give('1x minecraft:wooden_shovel');
        event.player.give('create:goggles');
        event.player.give('1x croptopia:tres_leches_cake');
        event.player.give('1x farmersrespite:coffee');
    }
})
