// priority: 1

onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items');
        event.player.give('1x minecraft:stone_pickaxe');
        event.player.give('1x minecraft:stone_sword');
        event.player.give('1x minecraft:stone_shovel');
        event.player.give('1x minecraft:stone_axe');
        event.player.give('create:goggles');
        event.player.give('1x farmersrespite:coffee');
        event.player.tell("Welcome to Farwater Create, it's time to get busy!");
    }
})
