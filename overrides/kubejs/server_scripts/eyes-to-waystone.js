// priority 1
onEvent('recipes', event => {
    event.recipes.createMechanicalCrafting("1x waystones:warp_stone",
    [
        'ABCD',
        'EFGH',
        'IJKL',
        'MNOP',
    ], {
        A: "endrem:black_eye",
        B: "endrem:cold_eye",
        C: "endrem:corrupted_eye",
        D: "endrem:lost_eye",
        E: "endrem:nether_eye",
        F: "endrem:old_eye",
        G: "endrem:rogue_eye",
        H: "endrem:cursed_eye",
        I: "endrem:evil_eye",
        J: "endrem:guardian_eye",
        K: "endrem:magical_eye",
        L: "endrem:wither_eye",
        M: "endrem:witch_eye",
        N: "endrem:undead_eye",
        O: "endrem:exotic_eye",
        P: "minecraft:ender_eye",
    }
    );

    event.shaped('1x waystones:waystone', [
        ' S ',
        ' W ',
        'OOO'
    ], {
        S: "minecraft:stone_bricks",
        W: "waystones:warp_stone",
        O: "minecraft:obsidian"
    });

    event.shaped('1x waystones:mossy_waystone', [
        ' S ',
        ' W ',
        'OOO'
    ], {
        S: "minecraft:mossy_stone_bricks",
        W: "waystones:warp_stone",
        O: "minecraft:obsidian"
    });

    event.shaped('1x waystones:mossy_waystone', [
        ' S ',
        ' W ',
        'OOO'
    ], {
        S: "minecraft:chiseled_sandstone",
        W: "waystones:warp_stone",
        O: "minecraft:obsidian"
    });
});