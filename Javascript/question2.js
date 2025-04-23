//Implement a deepFreeze(obj) function that recursively applies Object.freeze() to an object and all nested objects or arrays,
// making the entire structure fully immutable. This ensures no part of the object can be modified after freezing.

let obj = {
  a: 10,
  b: {
    c: 20,
    d: 30,
  },
  e: {
    f: [1, 2, 3, 4],
  },
  g: {
    h: {
      i: 10,
    },
  },
};

function deepFreeze(obj, output = {}) {
  for (let a of Object.entries(obj)) {
    if (Array.isArray(a[1])) {
      output[a[0]] = Object.freeze(a[1]);
    } else if (typeof a[1] === "object") {
      output[a[0]] = deepFreeze(a[1], {});
    } else {
      output[a[0]] = a[1];
    }
  }
  return Object.freeze(output);
}

obj = deepFreeze(obj);
obj.e.f = 12;
console.log(obj);
