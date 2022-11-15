// priority: 0
onEvent("tags.items", event => {
  event.add('forge:coffee_beans', 'farmers_respite:coffee_beans');
  event.add('forge:crops/coffee_beans', 'farmers_respite:coffee_beans');
  event.add('forge:crops', 'farmers_respite:coffee_beans');
})
