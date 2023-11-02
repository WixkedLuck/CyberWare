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
  const result2And3Element = document.getElementById("result2And3");

  if (results) {
    resultElement.innerHTML = results
      .map(result => `<${result.tag} style="${result.style}">${result.message}</${result.tag}>`)
      .join("");
      //hide other resulting innerDOM
    result2And3Element.innerHTML = ""; 
  } else if (result2And3) {
    if (!results) {
      resultElement.innerHTML = "";
    }
    result2And3Element.innerHTML = result2And3
      .map(result => `<${result.tag} style="${result.style}">${result.message}</${result.tag}>`)
      .join("");
  } else {
    resultElement.innerHTML = "<h5>Login failed. Please try again.</h5>";
    result2And3Element.innerHTML = "";
  }

  // Clear input
  userName.value = "";
  userPassword.value = "";
});

function validateUser(username, password) {
  const validUsers = {
    "user1": "PASSWORD1", // Both username and password need to be correct
    "user2": "PASSWORD2", // Either username or password needs to be correct
    "user3": "PASSWORD3", // Either username or password needs to be correct
  };

  if (validUsers.hasOwnProperty(username) && validUsers[username] === password) {
    return [
      { tag: "h5", message: "Login successful!" },
      { tag: "p", message: "Hello, world!", style: "color: green; font-size: 24px;" },
    ];
  }

  return null; 
}

function validateUser2AndUser3(username, password) {
  const validUsers = {
    "user2": "PASSWORD2", // Either username or password needs to be correct
    "user3": "PASSWORD3", // Either username or password needs to be correct
  };

  if (validUsers.hasOwnProperty(username) || validUsers["user2"] === password || validUsers["user3"] === password) {
    if (username === "user2") {
      return [
        { tag: "h5", message: "Login successful!" },
        { tag: "p", message: "Hello from User 2!", style: "color: blue;" },
      ];
    } else if (username === "user3") {
      return [
        { tag: "h5", message: "Login successful!" },
        { tag: "p", message: "Hello from User 3!", style: "color: red;" },
      ];
    }
  }

  return null; 
}
