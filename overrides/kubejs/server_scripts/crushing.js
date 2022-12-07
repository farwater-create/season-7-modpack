// priority: 1

onEvent("recipes", (event) => {
  console.info("loading crushing recipes");
  event.recipes.createCrushing(
    [
      "2x minecraft:cobblestone",
      "minecraft:redstone",
      Item.of("minecraft:redstone").withChance(0.5),
    ],
    "minecraft:redstone_ore"
  );

  event.recipes.createCrushing(
    [
      "5x aquaculture:neptunium_nugget",
      Item.of("aquaculture:neptunium_nugget").withChance(0.8),
      Item.of("aquaculture:neptunium_nugget").withChance(0.6),
      Item.of("aquaculture:neptunium_nugget").withChance(0.4),
      Item.of("aquaculture:neptunium_nugget").withChance(0.2),
    ],
    "aquaculture:neptunes_bounty"
  );

  event.recipes.createCrushing("minecraft:blackstone", "minecraft:basalt");

  event.recipes.createCrushing(
    ["2x croptopia:caramel"],
    "create_confectionery:bar_of_caramel"
  );

  event.recipes.createCrushing(
    "#forge:ores/certus_quartz",
    "1x ae2:certus_quartz_dust"
  );

});
