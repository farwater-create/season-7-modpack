// priority: 0
const saplings = ['croptopia:apricot_sapling','croptopia:coconut_sapling','croptopia:nutmeg_sapling','croptopia:date_sapling','croptopia:grapefruit_sapling','croptopia:lime_sapling','croptopia:pear_sapling','croptopia:starfruit_sapling','croptopia:pecan_sapling','croptopia:peach_sapling','croptopia:avocado_sapling','croptopia:kumquat_sapling','croptopia:plum_sapling','croptopia:orange_sapling','croptopia:walnut_sapling','croptopia:almond_sapling','croptopia:dragonfruit_sapling','croptopia:mango_sapling','croptopia:fig_sapling','croptopia:apple_sapling','croptopia:nectarine_sapling','croptopia:cashew_sapling','croptopia:cherry_sapling','croptopia:persimmon_sapling','croptopia:lemon_sapling','croptopia:banana_sapling','croptopia:almond_sapling','croptopia:apple_sapling','croptopia:apricot_sapling','croptopia:avocado_sapling','croptopia:banana_sapling','croptopia:cashew_sapling','croptopia:cherry_sapling','croptopia:coconut_sapling','croptopia:date_sapling','croptopia:dragonfruit_sapling','croptopia:fig_sapling','croptopia:grapefruit_sapling','croptopia:kumquat_sapling','croptopia:lemon_sapling','croptopia:lime_sapling','croptopia:mango_sapling','croptopia:nectarine_sapling','croptopia:nutmeg_sapling','croptopia:orange_sapling','croptopia:peach_sapling','croptopia:pear_sapling','croptopia:pecan_sapling','croptopia:persimmon_sapling','croptopia:plum_sapling','croptopia:starfruit_sapling','croptopia:walnut_sapling','croptopia:cinnamon_sapling','croptopia:almond_sapling','croptopia:apple_sapling','croptopia:apricot_sapling','croptopia:avocado_sapling','croptopia:banana_sapling','croptopia:cashew_sapling','croptopia:cherry_sapling','croptopia:coconut_sapling','croptopia:date_sapling','croptopia:dragonfruit_sapling','croptopia:fig_sapling','croptopia:grapefruit_sapling','croptopia:kumquat_sapling','croptopia:lemon_sapling','croptopia:lime_sapling','croptopia:mango_sapling','croptopia:nectarine_sapling','croptopia:nutmeg_sapling','croptopia:orange_sapling','croptopia:peach_sapling','croptopia:pear_sapling','croptopia:pecan_sapling','croptopia:persimmon_sapling','croptopia:plum_sapling','croptopia:starfruit_sapling','croptopia:walnut_sapling','croptopia:cinnamon_sapling'];
onEvent('chest.loot_tables', event => {
    event.modify("minecraft:village/village_farmer", table => {
        table.addPool(pool => {
            saplings.forEach(item => {
                pool.rolls = [2, 8]
                pool.addItem(item, 5);
            });
        });
    });
    event.modify("lootr:blocks/lootr_chest", table => {
        table.addPool(pool => {
            pool.rolls = [2, 4]
            saplings.forEach(item => {
                pool.addItem(item, 5);
            });
        });
    })
    event.modify("lootr:blocks/lootr_barrel", table => {
        table.addPool(pool => {
            pool.rolls = [2, 8]
            saplings.forEach(item => {
                pool.addItem(item, 5);
            });
        });
    })
})