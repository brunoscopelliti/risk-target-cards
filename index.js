"use strict";

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

const objectives = [
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

function countries (list) {
  return {
    type: "tournament",
    countries: list,
    plainText: `Conqueer the following countries: ${list.map(friendlyName).join(", ")}.`,
    tournament: true,
  };
}

const africa = ["congo", "egypt", "east-africa", "madagascar", "north-africa", "south-africa"];

const asia = ["afghanistan", "china", "india", "irkutsk", "japan", "kamchatka", "middle-east", "mongolia", "siam", "siberia", "ural", "yakutsk"];

const europe = ["great-britain", "iceland", "northern-europe", "scandinavia", "southern-europe", "ukraine", "western-europe"];

const northAmerica = ["alaska", "alberta", "central-america", "eastern-united-states", "greenland", "northwest-territory", "ontario", "quebec", "western-united-states"];

const oceania = ["eastern-oceania", "indonesia", "new-guniea", "western-oceania"];

const southAmerica = ["argentina", "brazil", "peru", "venezuela"];

const tournamentObjectives = [
  countries([...africa, ...asia, "southern-europe", "ukraine"]),
  countries([...africa, ...asia, ...southAmerica]),
  countries([...africa, ...europe, "brazil", "peru", "venezuela", "afghanistan", "mongolia", "siberia", "ural", "yakutsk"]),
  countries([...africa, ...europe, "eastern-united-states", "greenland", "ontario", "quebec", "afghanistan", "middle-east", "ural"]),
  countries([...africa, ...europe, ...oceania, "india", "middle-east", "siam"]),
  countries([...africa, ...europe, ...southAmerica, "afghanistan", "middle-east", "ural", "siberia"]),
  countries([...africa, ...northAmerica, "great-britain", "iceland", "northern-europe", "scandinavia", "southern-europe", "ukraine"]),
  countries([...africa, ...northAmerica, ...southAmerica, "southern-europe", "ukraine", "western-europe"]),
  countries([...africa, ...oceania, ...southAmerica, "southern-europe", "western-europe", "china", "india", "irkutsk", "japan", "middle-east", "mongolia", "siam"]),
  countries([...asia, ...europe, "indonesia"]),
  countries([...asia, ...northAmerica]),
  countries([...asia, ...oceania, "alaska", "alberta", "congo", "egypt", "east-africa", "madagascar", "south-africa"]),
  countries([...asia, ...oceania, "iceland", "northern-europe", "scandinavia", "southern-europe", "ukraine"]),
  countries([...europe, ...northAmerica, "congo", "north-africa", "south-africa", "japan", "kamchatka"]),
  countries([...europe, ...northAmerica, "japan", "kamchatka", "siberia", "ural", "yakutsk"]),
  countries([...europe, ...northAmerica, ...southAmerica, "japan", "kamchatka"]),
  countries([...europe, ...oceania, ...southAmerica,  "egypt", "east-africa", "north-africa", "afghanistan", "india", "middle-east", "siam"]),
  countries([...northAmerica, ...oceania, "iceland","scandinavia", "ukraine", "afghanistan", "china", "india", "middle-east", "siam", "ural"]),
  countries([...northAmerica, ...southAmerica, "congo", "north-africa", "south-africa", "great-britain", "iceland", "western-europe", "irkutsk", "japan", "kamchatka", "mongolia"]),
  countries([...northAmerica, ...southAmerica, "congo", "egypt", "east-africa", "madagascar", "north-africa", "india", "middle-east", "siam", "indonesia", "new-guniea", "western-oceania"]),
];

module.exports = objectives.concat(tournamentObjectives);
