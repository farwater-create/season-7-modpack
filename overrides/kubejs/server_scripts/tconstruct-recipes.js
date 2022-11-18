// priority: 0

onEvent("tags.fluids", (event) => {
  event.add("forge:experience", "experienceobelisk:raw_experience")
  event.add("minecraft:lava", "tconstruct:flowing_blazing_blood")
  event.add("minecraft:lava", "tconstruct:flowing_molten_debris")
  event.add("minecraft:lava", "tconstruct:blazing_blood")
  event.add("minecraft:lava", "tconstruct:molten_debris")
})
