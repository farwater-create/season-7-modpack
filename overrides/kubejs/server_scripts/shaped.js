// priority: 1

onEvent("recipes", (event) => {
    console.info("loading shaped recipes");
    
    event.shaped("3x ae2:annihilation_plane", [
        'CCC',
        'IAI',
    ],
    {
        C: "ae2:fluix_crystal",
        I: "minecraft:iron_ingot",
        A: "ae2:annihilation_core"
    });
});
