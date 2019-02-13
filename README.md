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
  army: "black",
  fallback: {
    regions: 24,
  },
  tournament: false,
}
```

Possible card's types: `destroy`, `regions`, and `conqueer`.

Card's fields change on the basis of the card's type. Other examples:

* Conqueer continents

```js
{
  type: "destroy",
  continents: ["asia", "south-america"],
  extra: false
  tournament: false,
}
```

* Conqueer regions:

```js
{
  type: "regions",
  regions: 18,
  tankPerRegion: 2,
  tournament: false,
}
```
