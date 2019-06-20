# risk-target-cards

Risk target cards.

## Install

```bash
npm install risk-target-cards
```

## Cards

A card is like

```js
{
  type: "destroy",
  plainText: "Destroy the Black army. If you are the Black army, or Black army are eliminated by someone else your objective becomes conqueer 24 territories",
  army: "black",
  fallback: {
    type: "regions",
    regions: 24,
    tankPerRegion: 1,
    tournament: false,
  },
  tournament: false,
}
```

Possible card's types: `destroy`, `regions`, `conqueer`, and `tournament`.

Card's fields change on the basis of the card's type. Other examples:

* Conqueer continents

```js
{
  type: "conqueer",
  plainText: "Conqueer the totality of Asia and South America",
  continents: ["asia", "south-america"],
  extra: false
  tournament: false,
}
```

* Conqueer regions:

```js
{
  type: "regions",
  plaintText: "Hold 18 territories with at least 2 tanks on each territory",
  regions: 18,
  tankPerRegion: 2,
  tournament: false,
}
```

* Tournament

```js
{
  type: "tournament",
  countries: ["congo", ...],
  plainText: "Conqueer the following countries: Congo, ...",
  tournament: true
}
```
