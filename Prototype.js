function Animal(name, species) {
  this.name = name;
  this.species = species;
}

Animal.prototype.getName = function () {
  return this.name;
};

Animal.prototype.getSpecies = function () {
  return this.species;
};

let dog = new Animal("Tom", "Dog");

console.log(dog.getName());
console.log(dog.getSpecies());
