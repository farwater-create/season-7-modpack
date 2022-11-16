// priority: 1

onEvent("recipes", event => {

  event.recipes
    .createMixing(
      Fluid.of("create_confectionery:caramel", 125),
      "croptopia:caramel"
    )
    .heated();

  event.recipes.createCrushing(
    ["2x croptopia:caramel"],
    "create_confectionery:bar_of_caramel"
  );

  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_invar", 270), [
      Fluid.of("tconstruct:molten_iron", 180),
      Fluid.of("tconstruct:molten_nickel", 90),
    ])
    .heated();

  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_netherite", 10), [
      Fluid.of("tconstruct:molten_debris", 40),
      Fluid.of("tconstruct:molten_gold", 20),
    ])
    .superheated();

  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_obsidian", 100), [
      Fluid.of("minecraft:water", 50),
      Fluid.of("minecraft:lava", 100),
    ])
    .heated();

  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_rose_gold", 180), [
      Fluid.of("tconstruct:molten_copper", 90),
      Fluid.of("tconstruct:molten_gold", 90),
    ])
    .heated();

  event.recipes.createCompacting("minecraft:cobbled_deepslate", [
    "9x minecraft:cobblestone",
    Fluid.of("minecraft:lava", 100),
  ]);

  event.recipes.createMixing(
    ["create:crimsite", Item.of("create:crimsite").withChance(0.5)],
    ["minecraft:blackstone", "create:crimsite"]
  );

  event.recipes.createMixing("2x minecraft:coarse_dirt", [
    "minecraft:gravel",
    "minecraft:dirt",
  ]);

  event.recipes.createMixing(
    ["minecraft:dirt", Item.of("minecraft:flint").withChance(0.1)],
    "minecraft:coarse_dirt"
  );

  event.recipes
    .createMixing(
      [
        "2x minecraft:blackstone",
        Item.of("minecraft:blackstone").withChance(0.1),
      ],
      ["minecraft:cobblestone", "minecraft:blackstone"]
    )
    .heated();

  event.recipes.createMixing(
    ["create:asurine", Item.of("create:asurine").withChance(0.5)],
    ["minecraft:cobbled_deepslate", "create:asurine"]
  );

  event.recipes
    .createMixing(
      Fluid.of("tconstruct:blazing_blood", 50),
      "minecraft:blaze_powder"
    )
    .heated();

  event.recipes
    .createMixing(Fluid.of("createbigcannons:molten_steel", 90), [
      Fluid.of("tconstruct:molten_iron", 180),
      "#minecraft:coals",
    ])
    .heated();

  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_amethyst_bronze", 90), [
      Fluid.of("tconstruct:molten_copper", 90),
      Fluid.of("tconstruct:molten_amethyst", 100),
    ])
    .heated();

  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_bronze", 360), [
      Fluid.of("tconstruct:molten_copper", 90),
      Fluid.of("tconstruct:molten_tin", 90),
    ])
    .heated();

  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_constantan", 180), [
      Fluid.of("tconstruct:molten_copper", 90),
      Fluid.of("tconstruct:molten_nickel", 90),
    ])
    .heated();

  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_debris", 180), [
      "minecraft:ancient_debris",
      "4x create:powdered_obsidian",
    ])
    .superheated();

  event.recipes
    .createMixing(Fluid.of("tconstruct:molten_electrum", 180), [
      Fluid.of("tconstruct:molten_gold", 90),
      Fluid.of("tconstruct:molten_silver", 90),
    ])
    .heated();

  event.recipes.createMixing(
    ["create:veridium", Item.of("create:veridium").withChance(0.5)],
    ["minecraft:mossy_cobblestone", "create:veridium"]);

});
