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

const recipeBlackList = [
  "minecraft:ender_eye",
  "tconstruct:smeltery/melting/diamond/axes",
  "tconstruct:smeltery/melting/diamond/boots",
  "tconstruct:smeltery/melting/diamond/chestplate",
  "tconstruct:smeltery/melting/diamond/helmet",
  "tconstruct:smeltery/melting/diamond/leggings",
  "tconstruct:smeltery/melting/diamond/enchanting_table",
  "tconstruct:smeltery/melting/diamond/weapon",
  "tconstruct:smeltery/melting/diamond/shovel",
  "tconstruct:smeltery/melting/diamond/horse_armor",
  "tconstruct:smeltery/melting/diamond/juke_box",
];

const modBlackList = ["waystones"];

onEvent("recipes", (event) => {
  outputBlacklist.forEach((item) => event.remove({ output: item }));
  recipeBlackList.forEach((recipe) => event.remove({ id: recipe }));
  modBlackList.forEach((mod) => event.remove({ mod: mod }));
});
