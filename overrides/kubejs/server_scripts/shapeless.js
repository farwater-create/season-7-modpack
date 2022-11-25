// priority: 1

onEvent("recipes", (event) => {
  console.info("loading shapeless recipes");
  event.shapeless("architects_palette:charcoal_block", [
    "9x minecraft:charcoal",
  ]);

  event.shapeless("9x minecraft:charcoal", [
    "architects_palette:charcoal_block",
  ]);

  event.shapeless("create:andesite_casing", [
    "#minecraft:logs",
    "create:andesite_alloy",
  ]);

  event.shapeless("create:brass_casing", [
    "#minecraft:logs",
    "#forge:plates/brass",
  ]);

  event.shapeless("create:copper_casing", [
    "#forge:stone",
    "#forge:plates/copper",
  ]);

  event.shapeless("create:refined_radiance_casing", [
    "#forge:glass/colorless",
    "create:refined_radiance",
  ]);

  event.shapeless("kubejs:ash_block", ["9x #forge:ash"]);
});
