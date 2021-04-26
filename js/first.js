let a = 10;
let b = 7 * a;
console.log(b);
console.log(a);
console.log(9 * a);
console.log(20 + 5);
console.log(1 + 2 + 3 + 4 + 5 + 6);
console.log((4 + 6 + 9) / 77);
const max = 57;
let actual = max - 13;
let percentage = actual / max;

let string = "The revolution will not be televised.";
console.log(string);

let one = "Hello, ";
let two = "how are you?";
let joined = one + two;
console.log(joined);
let multiple = one + one + one + one + two;
console.log(multiple);

let response = one + "I am fine - " + two;
console.log(response);

let myDate = "19" + "87";
console.log(typeof myDate);

let myString = "525";
let myNum = Number(myString);
console.log(typeof myNum);

let myNum2 = 825;
let myString2 = myNum2.toString();
console.log(typeof myString2);

let song = "Fight the Youth";
song = `Fight the Youth`;

console.log(song.search("the"));
let score = 9;
let highestScore = 10;
let output = `I like the song "${song}". I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output);
