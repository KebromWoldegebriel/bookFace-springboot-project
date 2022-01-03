localStorage.clear();
const loginBtn = document.getElementById("login-btn");
if(loginBtn) {
loginBtn.addEventListener("click", ()=> {
const userNameInput = document.getElementById("exampleInputEmail1").value;
const passWordInput = document.getElementById("exampleInputPassword1").value;

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    
    if(request.readyState===4) {
       if(request.responseText!=="") {
			const temp = JSON.parse(request.responseText);
			console.log();
			console.log(passWordInput);
			if(temp.passWord===passWordInput) {
				 window.location.href = "./profile.html";
				 document.cookie = userNameInput;
			} else {
				 alert("Incorrect password");
			}
           console.log(temp);
       } else {
			 alert("Account does not exist");
		}
	
    }
});

request.open('GET',`http://localhost:8080/login/${userNameInput}`);
request.send(null);

})
}


const signUpBtn = document.getElementById("signUp-btn");
if(signUpBtn) {
signUpBtn.addEventListener('click', () => {
    window.location.href = "./signUp.html";
})
}

const createAcctBtn = document.getElementById("createAcct-btn");
if(createAcctBtn) {
createAcctBtn.addEventListener("click", ()=> {
const userNameInput = document.getElementById("exampleInputEmail1").value;
const passWordInput = document.getElementById("exampleInputPassword1").value;

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    
    if(request.readyState===4) {
        if(request.responseText==="OK"){
            alert("Account created, please login");
            window.location.href = "./index.html";
        } else {
            alert("User Name already exists");
        }
    }
});

request.open('POST',`http://localhost:8080/signUp`);
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify({userName:userNameInput, passWord:passWordInput}));
})
}
