"use strict";
function canFly(animal) {
    if (animal.fly === true) {
        return true;
    }
    return false;
}
const bird = { name: 'Sparrow', fly: true };
const fish = { name: 'Salmon', swim: true };
console.log(canFly(bird)); // Output: true
console.log(canFly(fish)); // Output: false
