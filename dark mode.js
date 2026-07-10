const button = document.getElementById("theme-toggle");


button.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");


if(document.body.classList.contains("light-mode")){

button.innerHTML="☀️";

}

else{

button.innerHTML="🌙";

}


});
