// priority: 1

onEvent("item.registry", (event) => {
  event.create("ash").maxStackSize(64);
	event.create('cheese_sword', 'sword')
		.tier('cheese').maxDamage(128).displayName('Cheese Sword').rarity(RARITY_RARE)
		.tooltip('§7Curious energies surround this blade - it is patterned after something from a lost world')
		.tooltip('§eSeason 1 Memo')
});
