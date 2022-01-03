 document.getElementById("exampleFormControlInput1").value = localStorage.getItem('userName');
   const sendMessageBtn = document.getElementById("sendMessage");
   sendMessageBtn.addEventListener("click", () => {
		const messageId = "id" + Math.random().toString(16).slice(2);
		const to = localStorage.getItem('userName');
		const from = document.cookie;
      	const message  = document.getElementById("exampleFormControlTextarea1").value;
      	const date  = (new Date().toLocaleString());
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            
            if(request.readyState===4) {
                if(request.responseText==="Ok") {
                 alert("Message Delivered");
                } 
            }
        });
        
        request.open('POST',`http://localhost:8080/privateMessage`);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify({messageId:messageId, to:to, from:from, message:message, date:date}));
        

 });
    