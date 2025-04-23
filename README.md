# Hello this repository is dedicated for the codes I wrote for the practical exam

## I had Set 2 for the implementation

#### Javascript questions I had:

### 1.

```/*
Implement a function limit that accepts a callback and a number n, which restricts invocation of the callback to at most n times. Subsequent calls of the created function will return the result of the last invocation of the callback function.*/

function createGreeting(name, language) {
  if (language === "spanish") {
    return `Hola, ${name}!`;
  } else if (language === "french") {
    return `Bonjour, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}
const limitedGreeting = limit(createGreeting, 3);
console.log(limitedGreeting("Alice", "english"));  // "Hello, Alice!"
console.log(limitedGreeting("Roberto", "spanish")); // "Hola, Roberto!"
console.log(limitedGreeting("Marie", "french"));   // "Bonjour, Marie!"
console.log(limitedGreeting("John", "english"));   // Still "Bonjour, Marie!"
```

### 2.

` Implement a deepFreeze(obj) function that recursively applies Object.freeze() to an object and all nested objects or arrays, making the entire structure fully immutable. This ensures no part of the object can be modified after freezing.`

### 3.

```// Find Element Appearing More than N/3 Times

const nums = [1, 2, 3, 1, 1, 2, 2];

output: [1, 2] // (7/3 = 2.33 → anything appearing more than 2 times)
```

#### Typescript questions I had:

### 1.

```
type Animal = { name: string; fly?: boolean; swim?: boolean };

function canFly(animal: Animal): boolean {
  // Write this block
}

const bird: Animal = { name: 'Sparrow', fly: true };
const fish: Animal = { name: 'Salmon', swim: true };

console.log(canFly(bird));  // Output: true
console.log(canFly(fish));  // Output: false
```

### 2.

`type Rev1 = ReverseString<"abc">;       // Expected: "cba" `

### 3.

```
type Person = {
  name: string;
  name1: string;
  isActive: boolean;
};

type StringProperties = PickByType<Person, string>;  // op { name: string, name1: string }
type BooleanProperties = PickByType<Person, boolean>;  // op { isActive: boolean }
type NumberProperties = PickByType<Person, number>;  // op {}
```
