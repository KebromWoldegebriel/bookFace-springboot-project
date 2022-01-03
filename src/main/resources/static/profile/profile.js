if(document.URL.indexOf("editProfile.html")>=0) {
    
    const uploadPic = document.getElementById("uploadPic");
   
    
    uploadPic.addEventListener("click", () => {
        const formData = new FormData();
        formData.append("file",fileuplod.files[0]);
        localStorage.setItem('profilePic', fileuplod.files[0].name);
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            
            if(request.readyState===4) {
                
                    alert("Picture Saved");
                 
            }
        });
        
        request.open('POST',`http://localhost:8080/upload/${document.cookie}`);
        //request.setRequestHeader("Content-Type", "multipart/form-data");
        request.send( formData  );
        

    });
    
    
 
    document.getElementById("exampleFormControlInput1").value = document.cookie;
    const editProfileBtn = document.getElementById("editBtn");
    editProfileBtn.addEventListener("click", ()=> {
	 const  userAge = document.getElementById("exampleFormControlInput2").value;
    const  UserLocation = document.getElementById("exampleFormControlInput3").value;
    const  userAboutMe  = document.getElementById("exampleFormControlTextarea1").value;
    const userDate = new Date().toLocaleDateString();
        
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            
            if(request.readyState===4) {
                if(request.responseText==="Ok"){
                    alert("Profile Updated");
                } 
            }
        });
        
        request.open('POST',`http://localhost:8080/editProfile`);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify({userName:document.cookie, age:userAge, location:UserLocation, date:userDate, aboutMe:userAboutMe}));
        })

} else {
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    
    if(request.readyState===4) {
       if(request.responseText!=="") {
           const responseArray =   JSON.parse(request.responseText);
           console.log(responseArray);
           if(responseArray.length===5) {
                document.getElementById("userName").innerText = `User Name: ${document.cookie}`;
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
       } else {
        console.log('spmething aint right');
 
		}
	
    }
});

request.open('GET',`http://localhost:8080/getProfile/${document.cookie}`);
request.send(null);

}