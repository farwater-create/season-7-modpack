// priority: 1

onEvent("recipes", (event) => {
  event.recipes.createSplashing(
    ["minecraft:mossy_cobblestone"],
    ["minecraft:cobblestone"]
  );
});
