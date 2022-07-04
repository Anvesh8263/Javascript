const name= 'Anvesh';
const greetings='Good Morning ';
console.log(greetings+name);

let html= "<h1> this is a heading</h1>"+
          "<p> this is my para</p>";

html=html.concat('this', ' str2');
// console.log(html)
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);

console.log(html.indexOf('this'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt('5'));
console.log(html.endsWith('str2'));
console.log(html.includes('heading'));
console.log(html.includes('wonder'));
console.log(html.substring(0,9));
console.log(html.slice('-4'));
console.log(html.split('  '));
console.log(html.replace('this ', 'it'));

