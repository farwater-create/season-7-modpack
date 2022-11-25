// priority: 0

onEvent("block.registry", (event) => {
  event
    .create("ash_block")
    .material("dirt")
    .hardness(0.5)
    .tagBlock("minecraft:mineable/shovel")
    .requiresTool(false);
});
