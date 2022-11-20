// priority: 1
const creepers = [
    "creeperoverhaul:jungle_creeper",
    "creeperoverhaul:bamboo_creeper",
    "creeperoverhaul:desert_creeper",
    "creeperoverhaul:badlands_creeper",
    "creeperoverhaul:hills_creeper",
    "creeperoverhaul:savannah_creeper",
    "creeperoverhaul:mushroom_creeper",
    "creeperoverhaul:swamp_creeper",
    "creeperoverhaul:dripstone_creeper",
    "creeperoverhaul:cave_creeper",
    "creeperoverhaul:dark_oak_creeper",
    "creeperoverhaul:spruce_creeper",
    "creeperoverhaul:beach_creeper",
    "creeperoverhaul:snowy_creeper"
];

onEvent('entity.loot_tables', event => {
    creepers.forEach(creeper => {
        event.modifyEntity(creeper, table => {
            table.addPool(pool => {
                pool.rolls = 2
                pool.addItem('undead_expansion:ashes_of_creeper', 1)
            })
        });
    });
})