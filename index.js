const user = prompt("Enter your name: ").trim();
let age = Number(prompt("Enter your age:"));



if(isNaN(age)){
    console.log("Only numbers are allowed!");
}
else{
    if(age<13){
        console.log(`Hey ${user}, you are too young to use this platform!`);
    }else if(age>=13 && age<=19){
        console.log(`Hello ${user}, you are a teenager!`);
    }
    else{
        console.log(`Welcome ${user}, you are an adult!`);
    }

    switch(age){
        case 18:
            console.log(`Wow ${user}, you just became an adult!`);
            break;
    }
}