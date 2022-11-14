priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent("recipes", (event) => {
  console.log("Registering Recipes")
  recipeTweaks(event)
  woodCutting(event)
  createAdditions(event)
  xpTweaks(event)
  neptunium(event)
  removeBadItems(event)
  console.log("Recipes Updated")
})

function recipeTweaks(event) {
  // Recipes
  event.replaceInput({}, "create:dough", "#forge:dough")
  event.replaceInput({}, "farmersdelight:wheat_dough", "#forge:dough")
  event.replaceInput({}, "croptopia:dough", "#forge:dough")

  event.recipes
    .createMixing(
      Fluid.of("create_confectionery:caramel", 125),
      "croptopia:caramel"
    )
    .heated()

  event.recipes.createCrushing(
    ["2x croptopia:caramel"],
    "create_confectionery:bar_of_caramel"
  )

  // 16x shafts shapeless
  event.remove({ output: "create:shaft" });
  event.remove({ id: "create:crafting/kinetics/shaft" });
  event.shapeless('16x create:shaft', ['create:andesite_alloy', 'create:andesite_alloy']);

  // 16x gantry shafts
  event.remove({ output: "create:gantry_shaft" });
  event.remove({ id: "create:crafting/kinetics/gantry_shaft" });
  event.shaped(
    '16x create:gantry_shaft',
    [' A ', ' R ', ' A '],
    { A: 'create:andesite_alloy', R: 'minecraft:redstone'}
   );

  event.shapeless("architects_palette:charcoal_block", [
    "9x minecraft:charcoal",
  ])
  event.shapeless("9x minecraft:charcoal", [
    "architects_palette:charcoal_block",
  ])

  event.shapeless("architects_palette:spool", ["9x minecraft:string"])

  event.shapeless("create:andesite_casing", [
    "#minecraft:logs",
    "create:andesite_alloy",
  ])
  event.shapeless("create:brass_casing", [
    "#minecraft:logs",
    "#forge:plates/brass",
  ])
  event.shapeless("create:copper_casing", [
    "#forge:stone",
    "#forge:plates/copper",
  ])
  event.shapeless("create:refined_radiance_casing", [
    "#forge:glass/colorless",
    "create:refined_radiance",
  ])

  event.recipes.createMixing(
    ["create:asurine", Item.of("create:asurine").withChance(0.5)],
    ["minecraft:cobbled_deepslate", "create:asurine"]
  )

  event.recipes.createCrushing("minecraft:blackstone", "minecraft:basalt")

  event.recipes
    .createMixing(
      [
        "2x minecraft:blackstone",
        Item.of("minecraft:blackstone").withChance(0.1),
      ],
      ["minecraft:cobblestone", "minecraft:blackstone"]
    )
    .heated()

  event.recipes.createMixing("2x minecraft:coarse_dirt", [
    "minecraft:gravel",
    "minecraft:dirt",
  ])
  event.recipes.createMixing(
    ["minecraft:dirt", Item.of("minecraft:flint").withChance(0.1)],
    "minecraft:coarse_dirt"
  )

  event.recipes.createMixing(
    ["create:crimsite", Item.of("create:crimsite").withChance(0.5)],
    ["minecraft:blackstone", "create:crimsite"]
  )

  event.recipes.createCompacting("minecraft:cobbled_deepslate", [
    "9x minecraft:cobblestone",
    Fluid.of("minecraft:lava", 100),
  ])

  event.recipes.createMixing(
    ["create:veridium", Item.of("create:veridium").withChance(0.5)],
    ["minecraft:mossy_cobblestone", "create:veridium"]
  )

  event.shaped("create:sail_frame", ["SSS", "SAS", "SSS"], {
    S: "minecraft:stick",
    A: "create:andesite_alloy",
  });

  event.remove({ id: "create:crafting/kinetics/white_sail" });
  event.shaped("create:white_sail", ["SSS", "SAS", "SSS"], {
    S: "minecraft:stick",
    A: "#minecraft:occludes_vibration_signals"
  });
}


function woodCutting(event) {
  function createWoodCuttingRecipe(woodtype) {
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_button"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_fence"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_fence_gate"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_pressure_plate"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_slab"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_stairs"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_planks",
      "minecraft:" + woodtype + "_trapdoor"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_button",
      "minecraft:" + woodtype + "_planks"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_fence",
      "minecraft:" + woodtype + "_planks"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_fence_gate",
      "minecraft:" + woodtype + "_planks"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_pressure_plate",
      "minecraft:" + woodtype + "_planks"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_slab",
      "minecraft:" + woodtype + "_planks"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_stairs",
      "minecraft:" + woodtype + "_planks"
    )
    event.stonecutting(
      "minecraft:" + woodtype + "_trapdoor",
      "minecraft:" + woodtype + "_planks"
    )
  }
  ["acacia", "birch", "dark_oak", "jungle", "oak", "spruce", "crimson", "warped"]
    .forEach(woodtype => createWoodCuttingRecipe(woodtype));
}

function createAdditions(event) {
  function wireRecipe(material) {
    event.remove({ id: "createaddition:rolling/" + material + "_plate" })

    event.custom({
      type: "createaddition:rolling",
      input: {
        tag: "forge:rods/" + material,
      },
      result: {
        item: "createaddition:" + material + "_wire",
      },
    })
  }
  wireRecipe("copper")
  wireRecipe("gold")
  wireRecipe("iron")
}

function xpTweaks(event) {
  // XP Fluids to Bottle o' Enchanting with appropiate Ratios
  event.recipes.createFilling("minecraft:experience_bottle", [
    "minecraft:glass_bottle",
    Fluid.of("experienceobelisk:raw_experience", 10),
  ])
  event.recipes.createFilling("minecraft:experience_bottle", [
    "minecraft:glass_bottle",
    Fluid.of("sophisticatedcore:xp_still", 150),
  ])
  event.recipes.createFilling("minecraft:experience_bottle", [
    "minecraft:glass_bottle",
    Fluid.of("cofh_core:experience", 250),
  ])

  // Emptying Recipe - Bottle o' Enchanting => CoFH xp fluid
  event.recipes.createEmptying(
    ["minecraft:glass_bottle", Fluid.of("cofh_core:experience", 250)],
    "minecraft:experience_bottle"
  )
}

function neptunium(event) {
  // Milling 1-4 neptunium nuggets
  event.recipes.createMilling(
    [
      "aquaculture:neptunium_nugget",
      Item.of("aquaculture:neptunium_nugget").withChance(0.75),
      Item.of("aquaculture:neptunium_nugget").withChance(0.5),
      Item.of("aquaculture:neptunium_nugget").withChance(0.25),
    ],
    "aquaculture:neptunes_bounty"
  )

  // Crushing 5-9 neptunium nuggets
  event.recipes.createCrushing(
    [
      "5x aquaculture:neptunium_nugget",
      Item.of("aquaculture:neptunium_nugget").withChance(0.8),
      Item.of("aquaculture:neptunium_nugget").withChance(0.6),
      Item.of("aquaculture:neptunium_nugget").withChance(0.4),
      Item.of("aquaculture:neptunium_nugget").withChance(0.2),
    ],
    "aquaculture:neptunes_bounty"
  )
}

function removeBadItems(event) {
  [
    // Abuseable
    "advancedperipherals:chunk_controller",
    "ae2:spatial_anchor",
    "ae2:matter_cannon",
    "ae2:tiny_tnt",
    // Admin only
    "invisibilitycloak:cloak_of_invisibility",
    // Spams console on arc and doesnt function
    "create:tree_fertilizer"
  ]
    .forEach(item => event.remove({ output: item }));
}
