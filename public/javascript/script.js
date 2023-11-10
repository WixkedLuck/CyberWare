function SendMail() { 

var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
}
emailjs.send("service_46w1h8g", "template_7axa13r", params, "ZSWIAF0k4AttoBBVE").then(function(res){
    alert("Success! Thank you for sending us a message we will be back to you soon!" +res.status); 
})
}