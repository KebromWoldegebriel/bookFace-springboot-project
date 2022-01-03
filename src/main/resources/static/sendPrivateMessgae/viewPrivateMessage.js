const privateMessageCotainerCol = document.getElementById("viewPrivateMessage-col");
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    
    if(request.readyState===4) {
       if(request.responseText!=="") {
           const responseArray =   JSON.parse(request.responseText);
           console.log(responseArray);
           	for(let i=0; i<responseArray.length; i++) {
				privateMessageCotainerCol.innerHTML += `<div class="message-container">
				     		<p class="h5">From: ${responseArray[i].from}</p>
				     		<p class="h5">To: ${responseArray[i].to}</p>
				     		<p class="h5">Message: ${responseArray[i].message}</p>
				     		<p class="h5">Date: ${responseArray[i].date}</p>
				     		<button id=${responseArray[i].messageId} type="button" class="btn btn-danger delete-btn">Delete</button>
				     	</div >`
	
			}
       
       } 
	
    }
});

request.open('GET',`http://localhost:8080/getPrivateMessages/${document.cookie}`);
request.send(null);


const deleteFunction = ()=> {
	const deleteMessageButtons = document.querySelectorAll(".delete-btn");
  	console.log(deleteMessageButtons);
  	for (var i = 0; i <deleteMessageButtons.length; i++) {
      const temp = deleteMessageButtons[i];
      deleteMessageButtons[i].addEventListener("click", () => {
		const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            
            if(request.readyState===4) {
                if(request.responseText==="Ok") {
                 alert("Message Deleted");
                } 
            }
        });
        
        request.open('POST',`http://localhost:8080/deletePrivateMessage/${temp.id}`);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(null);		
        console.log(temp.id);
      });
  	}
}
setTimeout(deleteFunction, 400);




