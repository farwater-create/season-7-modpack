// priority: 1

onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items');
        event.player.give('1x minecraft:wooden_pickaxe');
        event.player.give('1x minecraft:wooden_sword');
        event.player.give('1x minecraft:wooden_shovel');
        event.player.give('1x minecraft:wooden_axe');
        event.player.give('create:goggles');
        event.player.give('1x croptopia:tres_leches_cake');
        event.player.give('1x farmersrespite:coffee');
    }
})
