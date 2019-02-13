function army (targetArmy) {
  return {
    type: "destroy",
    army: targetArmy,
    fallback: {
      regions: 24,
    },
    tournament: false,
  };
};

function regions (quantity, tankPerRegion) {
  return {
    type: "regions",
    regions: quantity,
    tankPerRegion,
    tournament: false,
  };
};

function conqueer (continents, extra) {
  return {
    type: "conqueer",
    continents,
    extra,
    tournament: false,
  };
}

module.exports = [
  army("black"),
  army("blue"),
  army("green"),
  army("red"),
  army("violet"),
  army("yellow"),

  conqueer(["asia", "africa"]),
  conqueer(["asia", "south-america"]),
  conqueer(["europe", "oceania"], true),
  conqueer(["europe", "south-america"], true),
  conqueer(["north-america", "africa"]),
  conqueer(["north-america", "oceania"]),

  regions(18, 2),
  regions(24),
];
