function friendlyName (name) {
  return name
    .split("-")
    .map(
      (el) => el[0].toUpperCase() + el.slice(1)
    )
    .join(" ")
}

function army (targetArmy) {
  var army = friendlyName(targetArmy);
  return {
    type: "destroy",
    plainText: `Destroy the ${army} army. If you are the ${army} army, or ${army} army are eliminated by someone else your objective becomes conqueer 24 territories`,
    army: targetArmy,
    fallback: regions(24, 1),
    tournament: false,
  };
};

function regions (quantity, tankPerRegion) {
  var text = `Hold ${quantity} territories`;

  if (tankPerRegion > 1) {
    text += ` with at least ${tankPerRegion} tanks on each territory`;
  }

  return {
    type: "regions",
    plainText: text,
    regions: quantity,
    tankPerRegion,
    tournament: false,
  };
};

function conqueer (continents, extra) {
  var text = `Conqueer the totality of `;
  var first = friendlyName(continents[0]);
  var second = friendlyName(continents[1]);

  if (extra) {
    text += `${first}, ${second}, and a third continent of your choice`;
  } else {
    text += `${first} and ${second}`;
  }

  return {
    type: "conqueer",
    plainText: text,
    continents,
    extra,
    tournament: false,
  };
}

module.exports = [
  army("black"),
  regions(18, 2),
  army("blue"),
  conqueer(["asia", "africa"]),
  regions(24, 1),
  conqueer(["asia", "south-america"]),
  army("green"),
  conqueer(["europe", "oceania"], true),
  conqueer(["europe", "south-america"], true),
  army("red"),
  conqueer(["north-america", "africa"]),
  army("violet"),
  conqueer(["north-america", "oceania"]),
  army("yellow"),
];
