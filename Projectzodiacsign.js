


const zodiac =document.getElementById("zodiac");
const body=document.body;

const changeBackground = ()=>{
    switch (zodiac.value){
        case "aries":
            body.style.backgroundColor="orange";
            break;
            case "Taurus":
            body.style.backgroundColor="green";
            break;
            case "Gemini":
            body.style.backgroundColor="red";
            break;
            case "cancer":
            body.style.backgroundColor="black";
            break;
            case "Leo":
            body.style.backgroundColor="#00f6fe";
            break;
            case "Virgo":
            body.style.backgroundColor="blue";
            break;
            case "Libra":
            body.style.backgroundColor="maroon";
            break;
            case "scorpio":
            body.style.backgroundColor="#75ade5";
            break;
            case "capricorn":
            body.style.backgroundColor="#55cb4e";
            break;
            case "aquarius":
            body.style.backgroundColor="#895968";
            break;
            case "pisces":
            body.style.backgroundColor="#fef500";
            break;
                                    


        default:
            break;
    }
}
