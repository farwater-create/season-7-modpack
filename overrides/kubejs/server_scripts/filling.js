// priority: 1
onEvent("recipes", event => {
  event.recipes.createFilling("create:electron_tube", [
    "create:polished_rose_quartz",
    Fluid.of("tconstruct:molten_iron", 10),
  ]);
});
