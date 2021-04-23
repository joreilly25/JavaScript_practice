function favoriteAnimal(animal) {
    console.log(animal + " is my favorite animal!")
  }
  
  favoriteAnimal('Cheetah');

  function add7(number) {
      let numberAdded7 = number + 7;
      console.log(numberAdded7);
  }

  add7(7);

  function multiply(num1, num2) {
      let numProduct = num1 * num2;
      console.log(numProduct);
  }

  multiply(5,5);

  function capitalize(string) {
      let capFirst = string.charAt(0).toUpperCase();
      let stringCap = capFirst + string.substr(1).toLowerCase();
      console.log(stringCap);
}

capitalize("HeLoLo");

function lastLetter(findLastLetter) {
    let stringLength = findLastLetter.length;
    stringLength--
    let foundLastLetter = findLastLetter.charAt(stringLength);
    console.log(foundLastLetter);
}

lastLetter("HELLO BEAUTIFUL");