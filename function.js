function Factorial(number){
    if(number==0){
        return 1;
    }
    else{
        for(let i=number-1;i>1;i--){
            number = number *i;
        }
    }
    return number;
}

const userInput = Number(prompt("Enter No: ").trim());

if(isNaN(userInput)){
    console.log("Pls enter a valid number");
}

else{
    const op = Factorial(userInput);
    console.log(op);
}


function fizzBuzz(number){
    for(let i=1;i<=number;i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz");
        }
        else if (i%3===0){
            console.log("Fizz");
        }
        else if (i%5===0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}


const userInput2 = Number(prompt("Enter No: ").trim());

if(isNaN(userInput2)){
    console.log("Pls enter a valid number!");
}

else{
    fizzBuzz(userInput2);
}

function isPalindrome(name) {
  var xname = "";
  let i = name.length-1;
  while(i>=0){
      xname = xname + name[i];
      i--;
  }
  return name === xname;
}

const userInput3 = prompt("Enter Name:").toLowerCase().trim();
if (isPalindrome(userInput3)) {
  console.log("1");
} 
else {
  console.log("0");
}

