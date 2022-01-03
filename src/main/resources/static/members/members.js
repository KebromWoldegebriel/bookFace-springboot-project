let usersProfileArray;
let usersProfilePicture;

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    
    if(request.readyState===4) {
       if(request.responseText!=="") {
        usersProfileArray = JSON.parse(request.responseText);
            console.log(usersProfileArray);
       } else {
            console.log("Something is wrong");

		}
	
    }
});

request.open('GET',`http://localhost:8080/getMembers`);
request.send(null);


const request2 = new XMLHttpRequest();
request2.addEventListener('readystatechange', () => {
    
    if(request2.readyState===4) {
       if(request2.responseText!=="") {
        usersProfilePicture = JSON.parse(request2.responseText);
            console.log(usersProfilePicture);
       } else {
            console.log("Something is wrong");

		}
	
    }
});

request2.open('GET',`http://localhost:8080/getMembersPicture`);
request2.send(null);

let addUsers = () => {
	let gridContainer = document.getElementById("con");
for(let i=0; i<usersProfileArray.length; i++) {
    let photoPath ="src=Images/mySpace.jpg";
   
    
    for(let j=0; j<usersProfilePicture.length; j++) {
		if(usersProfileArray[i].userName===usersProfilePicture[j].userName) {
			photoPath = `src=Images/${usersProfilePicture[j].photoPath}`
		}
	}

    gridContainer.innerHTML +=     `<div class="row">
    <div class="col-sm d-flex justify-content-end">
      <img class="user-pic"   ${photoPath}>
      
    </div>
    <div class="col-sm">
      <h4>${usersProfileArray[i].userName}</h4>
      <h4>${usersProfileArray[i].location}</h4>
    </div>
  </div>
  <div class="row">
      <div class="col-sm d-flex justify-content-end">
          <button id=${usersProfileArray[i].userName} type="button" class="btn btn-primary viewProfile">View Profile</button>
      </div>
      <div class="col-sm sndMessage-col">
          <button  id=${usersProfileArray[i].userName} type="button" class="btn btn-success sendMessage">Send Message</button>

      </div>
  </div>`

}

}

//added this code becuse usersProfile.length is be executed before userProfile
//is intialized becuse of slow response from the server. So I decided to delay the looping through userProfile node array
setTimeout(addUsers, 400);


const intializeViewBtns = () => {
const viewProfileButtons = document.querySelectorAll(".viewProfile");
console.log(viewProfileButtons);
for (var i = 0; i <viewProfileButtons.length; i++) {
		const temp = viewProfileButtons[i];
    	viewProfileButtons[i].addEventListener("click", () => {
        localStorage.setItem('userName', temp.id);
        window.open("./memberProfile.html", '_blank').focus();
    });
}
}


const intializeSendMessageBtns = () => {
  const sendMessageButtons = document.querySelectorAll(".sendMessage");
  console.log(sendMessageButtons);
  for (var i = 0; i <sendMessageButtons.length; i++) {
      const temp = sendMessageButtons[i];
      sendMessageButtons[i].addEventListener("click", () => {
		 localStorage.setItem('userName', temp.id);	
		 window.open("./sendPrivateMessage.html", '_blank').focus();
         console.log(temp.id);
      });
  }
}



//again i had to add this code becuse I had to wait for the buttons to render on the page 
// before i can loop through the viewProfileButtons node 
setTimeout(intializeViewBtns, 400);
setTimeout(intializeSendMessageBtns, 400);






























