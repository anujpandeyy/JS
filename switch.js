const userInput = Number(prompt("Enter Number:"));

if(isNaN(userInput)){
    console.log("Pls enter a number!");
}else{
    if(userInput%2==0){
        console.log("Even Number");
    }else{
        console.log("Odd Number");
    }
}

const myuserInput = prompt("Enter Color:").trim().toLowerCase();


switch(myuserInput){
    case "red":
    console.log("Stop");
    break;
    case "yellow":
    console.log("Slow down");
    break;
    case "green":
    console.log("Go");
    break;
    default:
    console.log("Invalid input");
    break;
}


const correctUsername = "admin";
const correctPassword = "1234";

const username = prompt("Enter Username:").trim();
const password = prompt("Enter Password:").trim();

if(username===correctUsername && password===correctPassword){
    console.log("Login successful");
}else if(username===correctUsername && password!==correctPassword){
    console.log("Incorrect password");
}else{
    console.log("User not found");
}