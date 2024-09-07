// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person';
const reversed_statement = [];
const array_statement = statement.split(' ');
// console.log(array_statement);
for(const statement of array_statement){
    // console.log(char);  
    reversed_statement.unshift(statement)
}
console.log(reversed_statement.join(' ')); // 'person working hard a am I'