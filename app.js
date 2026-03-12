import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import {

getFirestore,
doc,
getDoc,
setDoc

}

from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


const firebaseConfig = {

apiKey:"AIzaSyBtotVbhe6RBn2QPQCSXbCVcY9rL_36KwM",

authDomain:"toppertimer-70de2.firebaseapp.com",

projectId:"toppertimer-70de2",

storageBucket:"toppertimer-70de2.appspot.com",

messagingSenderId:"809874833955",

appId:"1:809874833955:web:55580be4fcb2534a822796"

};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


let xp = 0;
let level = 1;
let streak = 0;


const streakEl = document.getElementById("streak");
const levelEl = document.getElementById("level");
const xpFill = document.getElementById("xpfill");
const xpText = document.getElementById("xptext");


async function loadData(){

const ref = doc(db,"global","streakData");

const snap = await getDoc(ref);

if(snap.exists()){

let data = snap.data();

xp = data.xp || 0;

level = data.level || 1;

streak = data.streak || 0;

updateUI();

}

}


function updateUI(){

streakEl.innerText = streak;

levelEl.innerText = level;

let percent = (xp/100)*100;

xpFill.style.width = percent+"%";

xpText.innerText = xp+" / 100 XP";

}


document.getElementById("addStudy").onclick = async ()=>{

xp += 20;

if(xp >= 100){

xp = 0;

level++;

}

streak++;

updateUI();


await setDoc(doc(db,"global","streakData"),{

xp:xp,

level:level,

streak:streak

});

};


document.getElementById("openTimer").onclick = ()=>{

window.open("https://topper-timer.vercel.app/");

};


loadData();
