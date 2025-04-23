type Animal = { name: string; fly?: boolean; swim?: boolean };

function canFly(animal: Animal): boolean {
  if ("fly" in animal && animal.fly === true) {
    return true;
  }

  return false;
}

const bird: Animal = { name: "Sparrow", fly: true };
const fish: Animal = { name: "Salmon", swim: true };

console.log(canFly(bird)); // Output: true
console.log(canFly(fish)); // Output: false
