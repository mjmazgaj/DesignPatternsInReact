function Chair(type, color, note, price) {
  this.type = type;
  this.color = color;
  this.note = note;
  this.price = price;
}

function Table(type, color, note, price) {
  this.type = type;
  this.color = color;
  this.note = note;
  this.price = price;
}

function Bed(type, color, note, price) {
  this.type = type;
  this.color = color;
  this.note = note;
  this.price = price;
}

function FurnitureFactory() {
  this.create = (type, color, note, price) => {
    switch (type) {
      case "Chair":
        return new Chair(type, color, note, price);
      case "Table":
        return new Table(type, color, note, price);
      case "Bed":
        return new Bed(type, color, note, price);
      default:
        throw new Error("Unknown furniture type");
    }
  };
}

const furnitureFactory = new FurnitureFactory();

export { furnitureFactory };
