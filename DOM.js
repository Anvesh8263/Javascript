console.log(document.body);
// it will gives the body elements
console.log(document.head);
// it will gives the head elements
console.log(document.documentElement);
console.log(document.body.firstChild);
console.log(document.firstElementChild)
console.log(document.childNodes);
console.log(document.body.children);
console.log(document.childNodes);

const arr=document.body.children;
console.log(arr.length);

const newArr=Array.from(arr);

console.log(arr);
console.log(newArr);

for(let i=0;i<newArr.length;++i){
    console.log(newArr[i]);
}



// const thisOne1="Anvesh Mangalam";
// // console.log(document.getElementById(thisOne));

// console.log(document.getElementsByClassName("okay"));
// console.log(document.getElementsByName("email"));

// console.log(thisOne[0]);
// const thisOne=document.getElementsByTagName("span");

// console.log(thisOne);
// thisOne[0].textContent="newOne"
// console.log(thisOne[0])

const thisOne=document.getElementsByTagName("span");
thisOne[0].textContent="newOne";
console.log(thisOne[0]);
thisOne[0].style.backgroundColor="red"
thisOne[0].style.borderRadius="5px"
thisOne[0].style.color="white"
thisOne[0].style.fontStyle="italic"


const mybtn=document.getElementById("mybtn");
mybtn.style.backgroundColor="blue";
mybtn.style.padding="1vmax 4vmax";
mybtn.style.border="none";
mybtn.style.cursor="pointer";

mybtn.style.borderRadius="5px";
console.log(thisOne[0]);
const btn=document.querySelector(".okay");
btn.innerText="none";

