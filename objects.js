// ==================================
// CREATING CLASSES - HAMSTERS & HUMANS
// ==================================

class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`Hello! My name is ${this.name}.`);
  }
  eat(count, limit) {
    while (count < limit) {
      this.weight++;
      this.mood++;
      count++;
    }
  }
  exercise(count, limit) {
    while (count < limit) {
      this.weight--;
      count++;
    }
  }
  ageUp(count, limit) {
    while (count < limit) {
      this.age++;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
      count++;
    }
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

// ===========================================

const timmy = new Person("Timmy");
timmy.ageUp(0, 5);
timmy.eat(0, 5);
timmy.exercise(0, 5);
timmy.ageUp(5, 14);

const gus = new Hamster("Gus");
gus.owner = "Timmy";
timmy.buyHamster(gus);
timmy.ageUp(14, 29);
timmy.eat(0, 2);
timmy.exercise(0, 2);

console.log(timmy);
console.log(gus);
