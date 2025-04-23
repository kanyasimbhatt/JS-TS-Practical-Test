// Find Element Appearing More than N/3 Times

// const nums = [1, 2, 3, 1, 1, 2, 2];

// output: [1, 2] // (7/3 = 2.33 → anything appearing more than 2 times)

function returnMoreOccuringElements(arr) {
  let limit = Math.floor(arr.length / 3);
  let output = [];
  let store = new Map();

  for (let a of arr) {
    if (store.has(a)) {
      let val = store.get(a);
      store.set(a, ++val);
    } else {
      store.set(a, 1);
    }
  }

  for (entry of store) {
    if (entry[1] > limit) {
      output.push(entry[0]);
    }
  }

  return output;
}

console.log(returnMoreOccuringElements([1, 2, 3, 1, 1, 2, 2, 3, 3, 3]));
