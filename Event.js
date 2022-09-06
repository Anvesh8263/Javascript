const heading= document.getElementById("heading");
const Box1= document.getElementById("Box1");
const mybtn= document.getElementById("mybtn");

mybtn.addEventListener("click",()=>{
    console.log("Clicked");
    
});
mybtn.addEventListener("click",()=>{
    Box1.style.backgroundColor="yellow";
   
    Box1.style.margin="10px";
});
mybtn.addEventListener("click",()=>{
    heading.style.backgroundColor="orange";
    
});
mybtn.addEventListener("click",()=>{
    Box1.classList.add("classForDiv");

});
Box1.addEventListener("mouseover",()=>{
    mybtn.style.transform="scale(1.1)";

});
Box1.addEventListener("mouseout",()=>{
    mybtn.style.transform="";

});
heading.addEventListener("mouseover",()=>{
    mybtn.style.transform="scale(1.1)";

});
heading.addEventListener("mouseout",()=>{
    mybtn.style.transform="";

});

mybtn.addEventListener("mouseover",()=>{
    heading.style.transform="scale(1.1)";

});
mybtn.addEventListener("mouseout",()=>{
    heading.style.transform="";

});
mybtn.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    mybtn.style.backgroundColor="purple";

});
addEventListener("contextmenu",(e)=>{
    e.preventDefault();
});


