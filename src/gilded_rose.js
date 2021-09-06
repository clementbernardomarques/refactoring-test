
class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
    this.listItemParticular = ["aged brie", 
                              "sulfuras", 
                              "backstage passes"]
  }

  isParticularItem(item) {
    for (let i = 0; i < this.listItemParticular.length; i++) {
      if (item.name.toLowerCase().includes(this.listItemParticular[i])) {
        return true
      }
  }
  return false
}


  updateQuality() {
    const listItemParticular = ["Aged Brie", 
                                "Sulfuras, Hand of Ragnaros", 
                                "Backstage passes to a TAFKAL80ETC concert"]

    for (let i = 0; i < this.items.length; i++) {
      var qualityToAdd = -1
      var sellInToAdd = -1
      let notSulfuras = true

      const itemToUpdate = this.items[i]

      if (listItemParticular.includes(itemToUpdate.name)) {
        if (itemToUpdate.name === "Aged Brie") {
          qualityToAdd = 1
        }
        else if (itemToUpdate.name.toLowerCase().includes('backstage passes')) {
          if (itemToUpdate.sellIn < 6) {
            qualityToAdd = 3
          }
          else if (itemToUpdate.sellIn < 11) {
            qualityToAdd = 2
          }
          else {
            qualityToAdd = 1
          }
        }
        else {
          qualityToAdd = 0
          sellInToAdd = 0
          notSulfuras = false
        }
      } else if (itemToUpdate.sellIn < 0 || itemToUpdate.name.toLowerCase().includes('conjured')){
        qualityToAdd = qualityToAdd*2
      }
      if (notSulfuras) {
      itemToUpdate.quality = Math.min(Math.max(itemToUpdate.quality + qualityToAdd, 0), 50)
      itemToUpdate.sellIn = itemToUpdate.sellIn + sellInToAdd
        }
      }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
};
