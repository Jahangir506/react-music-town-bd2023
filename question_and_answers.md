
## Question_and_Answers

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

#### Answer: B__ explain: There is a typo in the code. You declared a variable named greeting, but then you tried to assign an empty object to a variable named greetign, which is not defined. As a result, you'll get a ReferenceError indicating that greetign is not defined.


###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

#### Answer: D__ explain: JavaScript is a dynamically typed language, which means it will attempt to perform type coercion when you use the + operator. In this case, it will convert the number 1 to a string and concatenate it with the string "2", resulting in the string "12". Then, if you try to use the + operator to add "12" and 2, JavaScript will convert "12" back to a number and perform the addition, resulting in 3.


###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

#### Answer: A__ explain: In this code, you create an array food with elements "1", "2", "3", and "4". Then, you create an object info with a property favoriteFood assigned to the first element of the food array, which is "1". Later, you change the value of info.favoriteFood to "5", but this change doesn't affect the original food array. Therefore, when you console.log(food), it will still output ["1", "2", "3", "4"].



###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

#### Answer: B__ explain:  In the provided code, the sayHi function expects an argument name, but when you call sayHi() without passing any argument, it results in the name parameter being undefined. Therefore, the function returns "Hi there, undefined" as the output.


###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

#### Answer: D__ explain:  In this code, you have an array nums with four elements: 0, 1, 2, and 3. You use the forEach method to iterate over each element of the array. The arrow function (num) => {...} is executed for each element of the array.Inside the arrow function, there's an if statement that checks if the num is truthy (i.e., not equal to 0). For all elements except 0, the condition is true, so count is incremented by 1. Since three out of the four elements in the array are not equal to 0, count is incremented three times, resulting in a final value of 4 when you console.log(count).

