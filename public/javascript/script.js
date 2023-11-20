function SendMail() { 

var params = {
    //combining Email.js template we create params to get specific values from the contact form
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
}
//send the params using your serivice id, templete id, param values, and public key 
emailjs.send("service_46w1h8g", "template_7axa13r", params, "ZSWIAF0k4AttoBBVE").then(function(res){
    alert("Success! Thank you for sending us a message we will be back to you soon!" +res.status); 
})
}