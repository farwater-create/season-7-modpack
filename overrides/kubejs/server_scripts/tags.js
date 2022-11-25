// priority: 1

onEvent("item.tags", (event) => {
  ["spider", "enderman", "zombie", "skeleton", "creeper"].forEach((mob) => {
    event.add("forge:ash", `undead_expansion:ashes_of_${mob}`);
  });
});
