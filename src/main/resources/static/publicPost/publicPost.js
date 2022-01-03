
 const shareBtn = document.getElementById("sharPost-btn");
 shareBtn.addEventListener("click", ()=> {
		
	const userName = document.cookie;
	const post = document.getElementById("exampleFormControlTextarea1").value;
	const date  = (new Date().toLocaleString()); 
	const Id = "id" + Math.random().toString(16).slice(2);
       
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            
            if(request.readyState===4) {
                if(request.responseText==="Ok"){
                    alert("Message Posted");
                } 
            }
        });
        
        request.open('POST',`http://localhost:8080/publicPost`);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify({postID:Id,userName:userName, publicPost:post, date:date}));
})

let responseArray;
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    
    if(request.readyState===4) {
       if(request.responseText!=="") {
        responseArray = JSON.parse(request.responseText);
            console.log(responseArray);
       } else {
            console.log("Something is wrong");

		}
	
    }
});

request.open('GET',`http://localhost:8080/getPosts`);
request.send(null);

let adPublicPost = () => {
 let profilePic = "mySpace.jpg";
 if(localStorage.getItem("profilePic")) {
	profilePic = localStorage.getItem("profilePic");
}
let postCol = document.getElementById("viewPublicPost-col");
for(let i=0; i<responseArray.length; i++) {
	postCol.innerHTML += `	<div class="post-container">
				     		<div class="postDetails">
				     			<img id="post-pic"  src=Images/${profilePic}>
				     			<p>${responseArray[i].userName}<br>
				     			${responseArray[i].date}</p>
				     			
				     		</div >
				     		<p>${responseArray[i].publicPost}</p>
				     	</div >`
}
}
setTimeout(adPublicPost, 400);