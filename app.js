var today = new Date();
var hourNow = today.getHours();
var minNow = today.getMinutes();
var greeting;

if (hourNow > 18) {
    greeting = 'Night';
} else if (hourNow > 12) {
    greeting = 'Afternoon';
} else if (hourNow > 0) {
    greeting = 'Morning';
} 

document.write(`Let's start our ${greeting} with new quote`);

