var ClearHistory=document.querySelector('#History');

// Function to handle form submission
document.getElementById("login-form").addEventListener("submit", function (event) {
  // Prevent default 
  event.preventDefault(); 

  // Get the values from the users input
  const userName = document.querySelector('#exampleInputEmail1');
  const userPassword = document.querySelector('#exampleInputPassword1');

  const username = userName.value;
  // Convert password to uppercase just incase
  const password = userPassword.value.toUpperCase(); 

  // Call the validation functions
  const results = validateUser(username, password);
  const result2And3 = validateUser2AndUser3(username, password);

  // Append the results to the DOM
  const resultElement = document.getElementById("result");
  const result1 = document.getElementById("result1");
  const result2And3Element = document.getElementById("result2And3");

  if (results) {
    resultElement.innerHTML="<h5>Login Successful!</h5>";
    result1.innerHTML = results
      .map(result => `<${result.tag} style="${result.style}">${result.message}</${result.tag}>`)
      .join("");
      //hide other resulting innerDOM
    result2And3Element.innerHTML = ""; 
  } else if (result2And3) {
    if (!results) {
      result1.innerHTML = "";
    }
    resultElement.innerHTML="<h5>Login Successful!</h5>";
    result1.innerHTML="";
    result2And3Element.innerHTML = result2And3
      .map(result => `<${result.tag} style="${result.style}">${result.message}</${result.tag}>`)
      .join("");

  } else {
    resultElement.innerHTML = "<h5>Login failed. Please try again.</h5>";
    result2And3Element.innerHTML = "";
    result1.innerHTML="";
  }

  // Clear input
  userName.value = "";
  userPassword.value = "";
});

function validateUser(username, password) {
  const validUsers = {
    "admin": "5F4DCC3B", // Both username and password need to be correct
    "John.Doe": "PASSWORD123", // Either username or password needs to be correct
    "user3": "PASSWORD3", // Either username or password needs to be correct
  };

  if (validUsers.hasOwnProperty(username) && validUsers[username] === password) {
    return [
      
      { tag: "p", message: "Congratulations!", style:" padding-top: 2rem; font-size: 24px; border-top: 2px solid #4e697d;" },
      {tag: "img", message: "<img src='../images/halloween-ghost.png' style='width:fit-content; margin: auto; padding-top:2rem;'></img>",  },
      { tag: "p", message: "it only took you years to get in and now i'm forever a ghost here to haunt you instead of showing you how to protect our company from SQL injections..I guess instead I will reward you with a tastey treat...not like ghosts can enjoy it anyway.  ", style: " font-size: 24px;" },
      {tag: "img", message: "<img src='../images/strawberry-cake.png' style='max-width: 300px;'></img>"  },
      {tag: "p", message:"", style:" padding-bottom: 4rem; font-size: 24px; border-bottom: 2px solid #4e697d;"}
    ];
  }

  return null; 
}

function validateUser2AndUser3(username, password) {
  const validUsers = {
    "admin' OR '1'='1'": "PASSWORD123", // Either username or password needs to be correct
    "admin--": "PASSWORD3", // Either username or password needs to be correct
    "(SELECT TOP 1 name FROM sysobjects WHERE xtype = 'U')": "PASSWORD234",
    "John.Doe": "PASSWORDS"
  };

  if (validUsers.hasOwnProperty(username) || validUsers["(SELECT TOP 1 name FROM sysobjects WHERE xtype = 'U')"] === password || validUsers["admin--"] === password) {
    if (username === "admin' OR '1'='1'") {
     
      return [
       
        { tag: "p", message: "Dear: Sam,", style: "text-align: start; border-top: 2px solid #4e697d; padding-top:3rem; " },
        { tag: "p", message: "It has come to our attention that we are currently experiencing a data breach via our login portal. Please take this time to update your username and password accordingly. To follow the most up to date username and password policy guidelines please click <a class='text-primary'; title='link'; data-bs-toggle='modal'; data-bs-target='#figurefour';>here</a>", style: "padding-top:5rem;" },
        { tag: "p", message: "Best,", style: "text-align: start; padding-top:7rem;" },
        { tag: "p", message: "Management", style: "text-align: start;  padding-bottom: 4rem; border-bottom: 2px solid #4e697d;" },
      ];
    } else if (username === "admin--") {
      return [
       
        { tag: "p", message: "To whom it may concern,", style: "text-align: start; border-top: 2px solid #4e697d; padding-top:3rem; padding-bottom:5rem; " },
        { tag: "p", message: "Hello and welcome to our company! I wanted to reach out to you personally and give you a warm welcome to our team! I look forward to seeing your great accomplishments in the field. Before that though, I do need you to fill out some of these forms by <span class='text-warning'>Friday</span> so that we can get you into our system as an admin. Please remember we do need your full name, copies of your DL and SSN, and your secerity clearence number. " },
        
        { tag: "p", message: "<a href='../fileshare/i-9.pdf' target='blank'>Employee Eligibility Verification</a>", style: "text-align: start; padding-top:7rem;" },
        { tag: "p", message: "<a href='../fileshare/sf61.pdf' target='blank'>Appointment Affidavits</a>", style: "text-align: start; " },
        { tag: "p", message: "<a href='../fileshare/sf144.pdf' target='blank'>Statement of Prior Federal Service </a>", style: "text-align: start; " },

        { tag: "p", message: "Sincerly,", style: "text-align: start; padding-top:7rem;" },
        { tag: "p", message: "Mike Harfield", style: "text-align: start;"  },
        { tag: "p", message: "Tel: <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='blank'>(778-330-2389)</a>", style: "text-align: start;"  },
      ];
    }else if (username === "(SELECT TOP 1 name FROM sysobjects WHERE xtype = 'U')") {
      return [
       
        { tag: "p", message: "Great Job! but what did you just type in? ", style: "text-align: start; padding-top:1rem; padding-bottom:5rem; " },
        {tag: "h5", message: "<p class=underlined>Lets Break It Down </p><br></br>", },
        {tag: "p", message:"In this case, the malicious user tries to retrieve the name of the first table in the database by injecting the subquery (SELECT TOP 1 name FROM sysobjects WHERE xtype = 'U'). The subquery returns the table's name if it exists. Otherwise, it sends an informative error message about the database."},  
        {tag: "p", message:"Following this, we can edit the code to fetch information in a table such as a users first and last name ", style: "padding-top: 3rem; padding-bottom: 3rem; " },
        {tag: "p", message: "<code class='language-sql'>SELECT firstname, lastname FROM users WHERE user_id = '$id';</code><br></br>", style: ""},
        {tag: "table", message: " <table class='table table-striped' style='background-color: whitesmoke;'><thead><tr> <th scope='col'>Full Name:</th><th scope='col'>John</th><th scope='col'>Doe</th></tr></thead>"},
        {tag: "p", message: "with this information now available to us if the user wasn't smart we could then try to brute force a login by assuming the persons username is their litteral name. In this case '<span class=text-warning>John.Doe</span>' a further attack could reveal the password as well. To speed up the process we will give it to <span class='text-warning'>you</span> ", style: "padding-top: 3rem;"}
      
      ];
      
        
    }else if (username === "John.Doe") {
      return [
        {tag: "h5", message: "<p class=Title>Welcome Back John Doe! </p><br></br>", style: "padding-top: 5rem; border-top: 2px solid #4e697d;" },
        {tag: "p", message: "why not start where you left off?", style: "padding-bottom: 2rem; "},
        {tag: "div", message: "<iframe width='560' height='315'  src='https://www.youtube.com/embed/cx6Xs3F_1Uc?si=aM4xeYeLRPlSD7mW&amp;start=301' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>", style: 'margin: auto; justify-content: center; width: fit-content; padding-bottom: 6rem;'  },
        {tag: "p", message: "To move on solve this next users login. (Hint only the first 8 characters is needed as our new password policy has changed :) )", style: "padding-bottom:3rem;"},
        {tag: "div", message: "<img src='../images/hash.png' style='margin: auto; justify-content: center; width: fit-content;  padding-top:2rem; max-width: 500px;'></img>", style: "margin: auto; width: fit-content; padding-bottom: 3rem; "  },
        {tag: "p", message:"", style: "border-bottom: 2px solid #4e697d;"}
      ];
  }
}

  return null; 
}

//clear history btn
ClearHistory.addEventListener('click',function () {
  localStorage.clear();
  location.reload();
})