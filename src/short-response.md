# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Question 1

### Prompt 1

What are the core principles of encapsulation in object-oriented programming?

### Response 1

Encapsulation in object-oriented programming is the bundling of data and hiding it so anything outside of the code cannot mess with it. According to MDN, it is described as a **black box**, because you can use it but you cannot touch what's inside.

---

## Question 2

### Prompt 2

The code snippet below is an example of a **closure**.

```js
const multiplyNumsBy = (nums, multiplier) => {
  return nums.map((num) => num * multiplier);
};

const multiplesOfFive = multiplyNumsBy([1, 2, 3, 4], 5); // [5, 10, 15, 20]
```

First, define what a **closure** is in your own words and then explain how this example includes a closure.

### Response 2

A **closure** is when a **inner function** remembers data so that it may still be used from outside of the code. This lets the function keep private information for later use. However, this code does **NOT** provide an example of a closure because it simply does not remember any data.

---

## Question 3

### Prompt 3

Consider the code snippet below showing a factory function for creating animal objects. The `makeNoise` method is not working as intended:

```js
const makeAnimal = (name, species, sound) => {
  const animal = {
    name: name,
    species: species,
    makeNoise: () => {
      console.log(`${this.name} the ${this.species} says ${sound}`);
    },
  };
  return animal;
};

const betty = makeAnimal("betty", "cat", "meow");
betty.makeNoise(); // undefined the undefined says meow

const bugs = makeAnimal("bugs", "bunny", "whatsup doc");
bugs.makeNoise(); // undefined the undefined says meow says whatsup doc
```

First, define the `this` keyword.

Then, explain why the `makeNoise` method is not working (why are `this.name` and `this.species` returning `undefined`?).

Finally, update the code snippet above to fix it.

### Response 3

The `this` keyword essentially refers to the object that is using that function. The `makeNoise()` function is not working because according to MDN, arrow functions handle the `this` keyword differently. Arrow functions actually already inherit the keyword from their parent scope. In order to fix the code above, I would refactor it to not be an arrow function and instead use a regular function. I would also add

#### Syntax Fix:

```js
makeNoise() {
  console.log(`${this.name} the ${this.species} says ${sound}`);
};
```
