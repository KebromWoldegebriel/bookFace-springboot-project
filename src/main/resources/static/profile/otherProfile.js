const userName = localStorage.getItem('userName');
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    
    if(request.readyState===4) {
       if(request.responseText!=="") {
            const responseArray =   JSON.parse(request.responseText);
            console.log(responseArray);
            if(responseArray.length===5) {
                document.getElementById("userName").innerText = `User Name: ${userName}`;
                document.getElementById("age").innerText = `Age: ${responseArray[2]}`;
                document.getElementById("location").innerText = `Location: ${responseArray[0]}`
                document.getElementById("date").innerText = `Member Since: ${responseArray[1]}`
                document.getElementById("aboutMe").innerText = `${responseArray[3]}`
                document.getElementById("profile-pic").src = `Images/${responseArray[4]}`
           } else if(responseArray.length===4) {
                document.getElementById("userName").innerText = `User Name: ${document.cookie}`;
                document.getElementById("age").innerText = `Age: ${responseArray[2]}`;
                document.getElementById("location").innerText = `Location: ${responseArray[0]}`;
                document.getElementById("date").innerText = `Member Since: ${responseArray[1]}`;
                document.getElementById("aboutMe").innerText = `${responseArray[3]}`;
           } else if(responseArray.length===1) {
            document.getElementById("profile-pic").src = `Images/${responseArray[0]}`;
        }
      
       } 
	
    }
});

request.open('GET',`http://localhost:8080/getProfile/${userName}`);
request.send(null);





