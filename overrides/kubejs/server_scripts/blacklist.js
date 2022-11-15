
// priority: 2

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
];

const recipeBlackList = [
  "tconstruct:smeltery/casting/diamond/block",
  "tconstruct:smeltery/casting/diamond/block",
  "tconstruct:smeltery/casting/diamond/gem_gold_cast",
  "tconstruct:smeltery/casting/diamond/gem_sand_cast",
  "tconstruct:smeltery/casting/diamond/gem_red_sand_cast",
  "create:empty_tconstruct_molten_diamond_bucket_of_tconstruct_molten_diamond",
  "create:fill_minecraft_bucket_with_tconstruct_molten_diamond",
  "tconstruct:molten_diamond_bucket",
];

const fluidBlackList = [
  'tconstruct:molten_diamond'
];

const modBlackList = [
  "waystones"
];

onEvent("recipes", event => {
  outputBlacklist.forEach(item => event.remove({ output: item }));
  recipeBlackList.forEach(recipe => event.remove({ id: recipe }));
  modBlackList.forEach(mod => event.remove({ mod }));
});

onEvent('fluid.registry', event => {
  recipeBlackList.forEach(fluid => event.remove(fluid))
});
