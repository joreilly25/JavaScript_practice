// Get number from user input - done
// Loop from 1 to the entered number - done
// If current number is divisible by 3 print "Fizz" - done
// If current number is divisible by 5 print "Buzz" - done
// If current number is divisible by 3 and 5 print "FizzBuzz" - done
// Otherwise print the current number - done

let endNum = +prompt("Please enter a number for FizzBuzz up to: ");

while (isNaN(endNum)) {
  endNum = +prompt("Please only enter a number: ");
}

for (let i = 1; i <= endNum; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    document.write("FizzBuzz<br>");
  } else if (i % 3 === 0) {
    document.write("Fizz<br>");
  } else if (i % 5 === 0) {
    document.write("Buzz<br>");
  } else {
    document.write(i + "<br>");
  }
}
