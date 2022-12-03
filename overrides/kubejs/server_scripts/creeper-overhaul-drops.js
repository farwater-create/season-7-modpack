// priority: 1
const creepers = [
  "creeperoverhaul:jungle_creeper",
  "creeperoverhaul:bamboo_creeper",
  "creeperoverhaul:desert_creeper",
  "creeperoverhaul:badlands_creeper",
  "creeperoverhaul:hills_creeper",
  "creeperoverhaul:savannah_creeper",
  "creeperoverhaul:mushroom_creeper",
  "creeperoverhaul:swamp_creeper",
  "creeperoverhaul:dripstone_creeper",
  "creeperoverhaul:cave_creeper",
  "creeperoverhaul:dark_oak_creeper",
  "creeperoverhaul:spruce_creeper",
  "creeperoverhaul:beach_creeper",
  "creeperoverhaul:snowy_creeper",
];

const saplingChance = 0.2;
const ashChance = 0.15;

function applyTemperateSaplingsTable(table) {
  table.addPool((pool) => {
    pool.rolls = 1;
    pool.randomChance(saplingChance);
    pool.addItem("croptopia:fig_sapling", 4);
    pool.addItem("croptopia:date_sapling", 4);
    pool.addItem("croptopia:apple_sapling", 4);
    pool.addItem("croptopia:apricot_sapling", 4);
    pool.addItem("croptopia:date_sapling", 4);
    pool.addItem("croptopia:cherry_sapling", 4);
    pool.addItem("croptopia:lemon_sapling", 2);
    pool.addItem("croptopia:plum_sapling", 4);
    pool.addItem("croptopia:persimmon_sapling", 4);
    pool.addItem("croptopia:kumquat_sapling", 4);
    pool.addItem("croptopia:pear_sapling", 4);
    pool.addItem("croptopia:walnut_sapling", 4);
    pool.addItem("croptopia:peach_sapling", 4);
    pool.addItem("croptopia:nectarine_sapling", 4);
    pool.addItem("croptopia:pecan_sapling", 3);
    pool.addItem("croptopia:almond_sapling", 3);
  });
}

function applyTropicalSaplingsTable(table) {
  table.addPool((pool) => {
    pool.rolls = 1;
    pool.randomChance(saplingChance);
    pool.addItem("croptopia:banana_sapling", 1);
    pool.addItem("croptopia:avocado_sapling", 1);
    pool.addItem("croptopia:mango_sapling", 2);
    pool.addItem("croptopia:cinnamon_sapling", 2);
    pool.addItem("croptopia:lime_sapling", 4);
    pool.addItem("croptopia:starfruit_sapling", 2);
    pool.addItem("croptopia:grapefruit_sapling", 2);
    pool.addItem("croptopia:cashew_sapling", 3);
  });
}

function applyDrySaplingsTable(table) {
  table.addPool((pool) => {
    pool.rolls = 1;
    pool.randomChance(saplingChance);
    pool.addItem("croptopia:dragonfruit_sapling");
  });
}

function applyIslandSaplingsTable(table) {
  table.addPool((pool) => {
    pool.rolls = 1;
    pool.randomChance(saplingChance);
    pool.addItem("croptopia:coconut_sapling");
    pool.addItem("croptopia:nutmeg_sapling", 2);
  });
}

onEvent("entity.loot_tables", (event) => {
  console.info("loading creeper overhaul drops");
  creepers.forEach((creeper) => {
    event.modifyEntity(creeper, (table) => {
      table.addPool((pool) => {
        pool.rolls = 2;
        pool.randomChance(ashChance);
        pool.addItem("undead_expansion:ashes_of_creeper", 1);
      });
      switch (creeper) {
        case "creeperoverhaul:desert_creeper":
          applyDrySaplingsTable(table);
          break;
        case "creeperoverhaul:badlands_creeper":
          applyDrySaplingsTable(table);
          break;
        case "creeperoverhaul:hills_creeper":
          applyTemperateSaplingsTable(table);
          break;
        case "creeperoverhaul:savannah_creeper":
          applyDrySaplingsTable(table);
          break;
        case "creeperoverhaul:dark_oak_creeper":
          applyTemperateSaplingsTable(table);
        case "creeperoverhaul:beach_creeper":
          applyIslandSaplingsTable(table);
          break;
        case "creeperoverhaul:snowy_creeper":
          applyTemperateSaplingsTable(table);
          break;
        case "creeperoverhaul:mushroom_creeper":
          applyTemperateSaplingsTable(table);
          break;
        case "creeperoverhaul:jungle_creeper":
          applyTropicalSaplingsTable(table);
          break;
        case "creeperoverhaul:bamboo_creeper":
          applyTropicalSaplingsTable(table);
          break;
      }
    });
  });
});
