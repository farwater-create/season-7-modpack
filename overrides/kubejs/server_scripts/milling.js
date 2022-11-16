// priority: 1

onEvent("recipes", event => {
  event.recipes.createMilling(
    [
      "aquaculture:neptunium_nugget",
      Item.of("aquaculture:neptunium_nugget").withChance(0.75),
      Item.of("aquaculture:neptunium_nugget").withChance(0.5),
      Item.of("aquaculture:neptunium_nugget").withChance(0.25),
    ],
    "aquaculture:neptunes_bounty"
  )
});
