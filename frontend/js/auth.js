const API =
"https://progressive-web-application-277p.onrender.com";

if(document.getElementById("registerForm")){

document
.getElementById("registerForm")
.addEventListener("submit",
async(e)=>{

e.preventDefault();

const username =
document.getElementById("username").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const res = await fetch(
`${API}/auth/register`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
username,
email,
password
})
}
);

const data = await res.json();

if(data.token){

localStorage.setItem(
"token",
data.token
);

localStorage.setItem(
"userId",
data._id
);

window.location =
"index.html";
}else{
alert(data.message);
}

});
}

if(document.getElementById("loginForm")){

document
.getElementById("loginForm")
.addEventListener("submit",
async(e)=>{

e.preventDefault();

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const res = await fetch(
`${API}/auth/login`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
}
);

const data = await res.json();

if(data.token){

localStorage.setItem(
"token",
data.token
);

localStorage.setItem(
"userId",
data._id
);

window.location =
"index.html";
}else{
alert(data.message);
}

});
}