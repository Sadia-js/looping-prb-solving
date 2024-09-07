// Capitalize Every first Letter of each word in a String
const text = 'hello world! this is an example.';
let capitalizedText = [];

const parts = text.split(' ');
for(let i = 0; i < parts.length; i++){
    const firstChar = parts[i].charAt(0).toUpperCase();
    const restOfWords = parts[i].slice(1);
    capitalizedText.push(firstChar + restOfWords);
}
console.log(capitalizedText.join(' '));

