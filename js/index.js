const toggle = document.getElementById("toggle");

const basic = document.getElementById("basic");
const professional = document.getElementById("professional");
const master = document.getElementById("master");

let type = "month";

toggle.addEventListener("click",function(){

    if(type == "month")
    {
        type = "year";
        toggle.style.justifyContent = "start";
        basic.innerHTML = "199.99";
        professional.innerHTML = "249.99";
        master.innerHTML = "399.99";
    }
    else{
        type = "month";
        toggle.style.justifyContent = "end";
        basic.innerHTML = "19.99";
        professional.innerHTML = "24.99";
        master.innerHTML = "39.99";
    }
    
});
