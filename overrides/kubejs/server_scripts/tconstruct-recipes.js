// priority: 0

onEvent("tags.fluids", (event) => {
  //adds experience to the experience tag
  event.add("forge:experience", "experienceobelisk:raw_experience")

  //adds tconstruct molten metals to the lava tag to make them burn
  event.add("minecraft:lava", "tconstruct:blazing_blood")
  event.add("minecraft:lava", "tconstruct:flowing_blazing_blood")
  event.add("minecraft:lava", "tconstruct:molten_debris")
  event.add("minecraft:lava", "tconstruct:flowing_molten_debris")
})
