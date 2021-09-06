const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 40),

      // this conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6)
    ];

    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    console.log(updatedItems)
    expect(updatedItems[0].name).toBe("+5 Dexterity Vest");
    expect(updatedItems[0].sellIn).toBe(9);
    expect(updatedItems[0].quality).toBe(19);

    expect(updatedItems[1].sellIn).toBe(1);
    expect(updatedItems[1].quality).toBe(1);

    expect(updatedItems[3].sellIn).toBe(0);
    expect(updatedItems[3].quality).toBe(80);

    expect(updatedItems[4].sellIn).toBe(-1);
    expect(updatedItems[4].quality).toBe(80);

    expect(updatedItems[5].sellIn).toBe(14);
    expect(updatedItems[5].quality).toBe(21);

    expect(updatedItems[6].sellIn).toBe(9);
    expect(updatedItems[6].quality).toBe(50);

    expect(updatedItems[7].sellIn).toBe(4);
    expect(updatedItems[7].quality).toBe(50);

    expect(updatedItems[8].sellIn).toBe(2);
    expect(updatedItems[8].quality).toBe(43);

    expect(updatedItems[9].sellIn).toBe(2);
    expect(updatedItems[9].quality).toBe(4);
  });
});
