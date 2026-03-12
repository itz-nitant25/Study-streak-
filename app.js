let streak = localStorage.getItem("streak") || 0

document.getElementById("streak").innerText = streak

let heatmap = document.getElementById("heatmap")

for(let i=0;i<30;i++){

let div=document.createElement("div")

div.classList.add("day")

heatmap.appendChild(div)

}

function markStudy(){

let today=new Date().getDate()

let days=document.querySelectorAll(".day")

days[today-1].classList.add("active")

let last=localStorage.getItem("lastDay")

let now=new Date().toDateString()

if(last!==now){

streak++

localStorage.setItem("streak",streak)

localStorage.setItem("lastDay",now)

}

document.getElementById("streak").innerText=streak

}
