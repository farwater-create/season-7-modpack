// priority: 0
onEvent('item.registry.tool_tiers', event => {
	event.add('cheese', tier => {
		tier.uses = 2
		tier.speed = 12.0
		tier.attackDamageBonus = -3.0
		tier.level = 1
		tier.enchantmentValue = 34
		tier.repairIngredient = '#forge:cheeses'
	})
})