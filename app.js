// load streak
let streak = localStorage.getItem("studyStreak") || 0

document.getElementById("streak").innerText = streak

// create heatmap
let heatmap=document.getElementById("heatmap")

for(let i=0;i<30;i++){

let box=document.createElement("div")

box.classList.add("day")

heatmap.appendChild(box)

}

// check timer data from main site
function checkTimerStudy(){

let studyTime = localStorage.getItem("todayStudy") || 0

// minimum 10 minutes
if(studyTime >= 600){

updateStreak()

activateHeatmap()

}

}

function updateStreak(){

let today=new Date().toDateString()

let lastDay=localStorage.getItem("lastStudyDay")

if(lastDay !== today){

streak++

localStorage.setItem("studyStreak",streak)

localStorage.setItem("lastStudyDay",today)

}

document.getElementById("streak").innerText=streak

updateMessage()

}

function activateHeatmap(){

let today=new Date().getDate()

let days=document.querySelectorAll(".day")

if(days[today-1]){

days[today-1].classList.add("active")

}

}

function updateMessage(){

let msg=""

if(streak < 3){

msg="Start your streak 🚀"

}

else if(streak < 7){

msg="Nice consistency 🔥"

}

else{

msg="Topper mode activated 💪"

}

document.getElementById("message").innerText=msg

}

checkTimerStudy()
