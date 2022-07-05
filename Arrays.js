let marks= [88,87,99,92,81];
const fruit=['Apple','Banana','Orange','Mango'];
const mixed=['str',89,[3,5]];

const arr= new Array(88,92,81,99,'Mango');

console.log(arr);
console.log(mixed);
console.log(fruit[1]);
// console.log(Array.isArray(88));
console.log(arr.length)
arr[0]='Anvesh';
console.log(arr);

let value=marks.indexOf(88);
console.log(value)

// mutating or modifying arrays
marks.push(7676);
console.log(marks)

marks.unshift(89796);
console.log(marks)

marks.pop()
console.log(marks)

marks.shift()
console.log(marks)

marks.splice(1,3)
console.log(marks)

marks.reverse()
console.log(marks)

let marks2 = [4,6,7,9];
marks= marks.concat(marks2)
console.log(marks)

let myobj= {
    name:'Anvesh',
    channel :'TheRacer',
    isActive:true,
    marks:[88,87,99,92]
}

console.log(myobj)
console.log(myobj.isActive)
console.log(myobj.channel)
console.log(myobj.marks)


