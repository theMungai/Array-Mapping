// ARRAY MAPPING

// 1. Double the numbers.

const originalNumbers = [1,2,3,4,5,60];
const doubledNumbers = originalNumbers.map(doubledNum => doubledNum * 2)
console.log(doubledNumbers)

// 2. uppercase Strings
const fruits = ["banana", "apple", "cherry", "grapes"];

const upperCaseFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase()
})
console.log(upperCaseFruits)

//  3. Extract object properties;

const users = [
  {name :"Simon", age : 24},
  {name : "Clinton", age : 25},
  {name : "Kamau", age : 26},
  {name : "Kago", age : 23}
]

const userNames = users.map(user => user.name);
console.log(userNames)

//  4. Calculate square roots

const numbers = [4,9,16,25,36,49];
const squareRoots = numbers.map(number => Math.sqrt(number));
console.log(squareRoots);

// 5. Customize mapping function

const tempCelcius = [25,30,15,20];
const tempFahrenheit = tempCelcius.map((cel) => (cel * 9/5) + 32);
console.log(tempFahrenheit);

// 6. square even numbers

const allNumbers = [1,2,3,4,5,6,7,8,9]
const evenNumbers = allNumbers.map(function (num) {
  if(num % 2 === 0){
    return num * num
  }
  else {
    return num
  }
})

console.log(evenNumbers);

// 7. Calculate area of rectangles
const rectangles = [
  {width : 7, height : 8},
  {width : 4, height : 12},
  {width : 6, height : 10}
]

const rectangleAreas = rectangles.map(function(rectangle){
  return rectangle.width * rectangle.height
})
console.log(rectangleAreas);

//  8. Extract initials from names
const names = ["John Doe", "Donald Trump", "Joe Biden"];

const initials = names.map(function(name) {
  const [firstName, lastName] = name.split(' ');
 
  return `${firstName.charAt(0)} ${lastName.charAt(0)}` 
});

console.log(initials);

// 9. Format dates

const dateStrings = ['2023-05-20','2023-01-15','2023-09-10'];

const formattedDates = dateStrings.map(function(dateString){
  const date = new Date(dateString);
  
  return `${date.getMonth() + 1}/ ${date.getDate()}/ ${date.getFullYear()}`
})

console.log(formattedDates);

// 10. Create HTML List

const items = ['Apple', 'Banana', 'Cherry', 'Date'];

const htmlList = `<ul>${items.map(function(item) {
  return `<li>${item}</li>`;
}).join('')}</ul>`;

console.log(htmlList);