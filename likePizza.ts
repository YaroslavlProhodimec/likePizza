const friends = [
  { name: "alex", pizza: ["cheese", "peperoni"] },
  { name: "mike", pizza: ["salami", "margarita"] },
  { name: "stas", pizza: ["meat"] },
  { name: "anna", pizza: ["fish"] },
];

const likePizza = (input) => {
  let resultArray = [];
  for (let i = 0; i < input.length; i++) {
    let char = input[i].pizza;
    for (let j = 0; j < char.length; j++) {
      // resultArray.push(char[j]);
      resultArray = [...resultArray, char[j]];
    }
  }
  return resultArray;
};
