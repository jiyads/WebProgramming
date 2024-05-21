/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Jiyad Mohammed Arif Shaikh Student ID:149307233  Date: 21/05/2024
*
********************************************************************************/ 

//Step 2: "Hello World"
console.log("Hello World")

// Step 3: Creating the "Server Paths" 
var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This course name is WEB700. This assignment was prepared by Jiyad Mohammed Arif Shaikh",
    "jmashaikh1@myseneca.ca  Jiyad MOhammed Arif Shiakh",
    "Hello, User Logged In",
    "Main Panel",
    "Logout Complete. Goodbye" 
];

// Step 4: Creating the "web server simulator" Function - "httpRequest" 
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}
//Step 5: Manually Testing the "httpRequest" Function
console.log(httpRequest("GET",("/")));
console.log(httpRequest("Post" , "/"));
console.log(httpRequest("GET", "/"));       
console.log(httpRequest("GET", "/logout"));   
console.log(httpRequest("GET", "/contact")); 
console.log(httpRequest("POST", "/login"));  
console.log(httpRequest("GET", "/panel")); 
console.log(httpRequest("POST", "/logout"));
console.log(httpRequest("GET", "/unknown")); 
console.log(httpRequest("Post" , "/about"));
console.log(httpRequest("GET" , "/about"))

//Step 6: utility function to generate a random integer value.
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
//Step 6:Automating the Tests by creating a "automateTests" Function
function automateTests() {
    var testVerbs = ["GET", "POST"];
    var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest() {
        var randVerb = testVerbs[getRandomInt(testVerbs.length - 1)];
        var randPath = testPaths[getRandomInt(testPaths.length - 1)];
        console.log(httpRequest(randVerb, randPath));
    }
    setInterval(randomRequest, 1000);
}

// Step 7:Invoke the "automateTests" function 
automateTests();

