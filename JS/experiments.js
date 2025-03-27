const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const myName = "Aminu Mohammed";
console.table(myName);

const firstName = "Aminu";
const lastName = "Mohammed";
const sentence = "Hello " + firstName + " " + lastName + "! How are you?!";
console.log(sentence);

const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you?!`;
console.log(sentenceWithTemplate);

const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is ... not blue?");
}

const character = 'Q';
const timesToRepeat = 100;

for (let i = 0; i < timesToRepeat; i++) {
  console.log(character);
}

if (2 + 2 === 4) {
    console.log("Math works!");
} else {
    console.log("Math doesn't work!");
}

