// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const rev_colors = [];
for(const color of colors){
    rev_colors.unshift(color); // ['orange', 'yellow', 'green', 'blue', 'red' ]
}
console.log(rev_colors);