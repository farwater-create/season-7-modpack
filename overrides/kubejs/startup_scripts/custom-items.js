// priority: 0

onEvent("block.registry", (event) => {
  event.create("ash").maxStackSize(64);
});
