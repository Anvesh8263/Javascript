const name= document.getElementById("Name");
const tagsContainer = document.querySelector(".tags");

const addName = ()=>{
    const tag= document.createElement("div");
    tag.setAttribute("class","tag");

    tag.innerText= `Hey, I am ${Name.value}`;
    tagsContainer.append(tag);
}
