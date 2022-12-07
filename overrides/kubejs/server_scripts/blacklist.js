// priority: 1

const outputBlacklist = [
  // AE2
  "advancedperipherals:chunk_controller",
  "ae2:spatial_anchor",
  "ae2:matter_cannon",
  "ae2:tiny_tnt",
  // Create
  "create:tree_fertilizer",
  // TConstruct
  "tconstruct:ender_slime_sling",
  "tconstruct:sky_slime_sling",
  "tconstruct:molten_diamond",
  "tconstruct:molten_diamond_bucket",
  // IM
  "immersiveengineering:turret_gun",
  "immersiveengineering:turret_chem",
  // Misc
  "invisibilitycloak:cloak_of_invisibility",
  "advancedperipherals:chunk_controller",
  "advancedperipherals:ar_goggles",
  "create_things_and_misc:porridge",
];

const tinkersSmeltingBlacklist = (item) => {
  return [
    `tconstruct:smeltery/melting/${item}/axes`,
    `tconstruct:smeltery/melting/${item}/boots`,
    `tconstruct:smeltery/melting/${item}/chestplate`,
    `tconstruct:smeltery/melting/${item}/helmet`,
    `tconstruct:smeltery/melting/${item}/leggings`,
    `tconstruct:smeltery/melting/${item}/enchanting_table`,
    `tconstruct:smeltery/melting/${item}/weapon`,
    `tconstruct:smeltery/melting/${item}/shovel`,
    `tconstruct:smeltery/melting/${item}/horse_armor`,
    `tconstruct:smeltery/melting/${item}/juke_box`,
  ]
}

const recipeBlackList = [
  "minecraft:ender_eye",
  "createbigcannons:melting/melt_steel_ingot",
  "architects_palette:charcoal_block",
  "ae2:network/parts/annihilation_plane_alt2",
  "ae2:network/parts/annihilation_plane_alt",
].concat(
  tinkersSmeltingBlacklist("diamond"),
  tinkersSmeltingBlacklist("netherrite")
)

const modBlackList = ["waystones"];


onEvent("recipes", (event) => {
  outputBlacklist.forEach((item) => event.remove({ output: item }));
  recipeBlackList.forEach((recipe) => event.remove({ id: recipe }));
  modBlackList.forEach((mod) => event.remove({ mod: mod }));
});
