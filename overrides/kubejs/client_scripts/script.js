// priority: 3

console.info(
  "Hello, World! (You will see this line every time client resources reload)"
);

onEvent("jei.hide.items", (event) => {
  [
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
  ].forEach((item) => event.hide(item));
});
