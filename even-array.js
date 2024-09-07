// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];
const even_numbers = [];
for(const number of numbers){
    if(number % 2 === 0){
        even_numbers.push(number);
    }
}
console.log(even_numbers); //[12, 98, 78, 46]

