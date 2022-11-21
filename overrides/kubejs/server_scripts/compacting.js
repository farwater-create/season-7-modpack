// priority: 1

onEvent("recipes", event => {
    event.recipes.createCompacting("minecraft:cobbled_deepslate", [
        "9x minecraft:cobblestone",
        Fluid.of("minecraft:lava", 100),
      ]);
})