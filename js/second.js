const age = 16;

if(age >= 18) {
    console.log('You are good to go!');
} else if(age < 15) {
    console.log('Way too young, sorry.');
}

else {
    console.log('You are not old enough.');
}

function isDouble (dice1, dice2) {
    if(dice1 === dice2) {
        return true;
    } else {
        return false;
    }
}

if( isDouble(6, 6) == true) {
    console.log('You rolled a double');
} else {
    console.log('You didn\'t');
}