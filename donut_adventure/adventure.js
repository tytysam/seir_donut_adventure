// console.log("JS file is connected!");

// ==========================================================
// The Adventure of Dougie the Donut on the Streets of NYC
// ==========================================================

// Randomization Function
const randomization = (limit) => {
  return Math.floor(Math.random() * limit);
};

// Hero Class
class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10,
    };
    this.catchPhrases = [
      "i'm fresher than day old pizza",
      "you can't count my calories",
    ];
  }
  talkSass() {
    console.log(this.catchPhrases[randomization(this.catchPhrases.length)]);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight() {
    console.log(`I'm ready to rumble!`);
  }
}

const dougie = new Hero("Dougie");
