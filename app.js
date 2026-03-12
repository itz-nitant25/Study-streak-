import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"

import {
getFirestore,
doc,
getDoc
}
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"

import {
getAuth,
GoogleAuthProvider,
signInWithPopup,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"


// FIREBASE CONFIG

const firebaseConfig = {

apiKey: "AIzaSyBtotVbhe6RBn2QPQCSXbCVcY9rL_36KwM",
authDomain: "toppertimer-70de2.firebaseapp.com",
projectId: "toppertimer-70de2"

}


const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()


// LOGIN BUTTON

document.getElementById("userBox").innerHTML =
`<button id="loginBtn">Login</button>`

document.getElementById("loginBtn").onclick = () => {

signInWithPopup(auth,provider)

}


// USER STATE

onAuthStateChanged(auth, async(user)=>{

if(!user) return

document.getElementById("userBox").innerHTML =

`<img src="${user.photoURL}" width="40"> ${user.displayName}`


// LOAD DATA

const ref = doc(db,"users",user.uid)

const snap = await getDoc(ref)

if(!snap.exists()) return

let data = snap.data()

let total = data.totalTime || 0

let streak = data.streak || 0


// LEVEL SYSTEM

let level = Math.floor(total / 3600) + 1


document.getElementById("streak").innerText = streak

document.getElementById("level").innerText = level

document.getElementById("time").innerText =
Math.floor(total/60) + " min"

})


// OPEN TIMER WEBSITE

document.getElementById("openTimer").onclick = () => {

window.open("https://topper-timer.vercel.app/","_blank")

}
