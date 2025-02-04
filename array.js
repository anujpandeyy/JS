function ReverseArr(newArr){
    let revArr = [];
    for(let i=newArr.length-1;i>=0;i--){
        revArr.push(newArr[i]);
    }
    return revArr;
}

const userInput = parseInt(prompt("Enter Array Size :").trim());

let myArr = [];

for(let i=0;i<userInput;i++){
    let element = parseInt(prompt(`Enter ${i+1} element:`).trim());
    myArr.push(element);
}

console.log(myArr);
console.log(ReverseArr(myArr));

function mergeObjects(obj1,obj2){
    return {...obj1,...obj2};
}


let obj1 = {};
let obj2 = {};


const key1 = prompt("Enter the keys for the first object (comma separated):").split(',');
const key2 = prompt("Enter the keys for the second object (comma separated):").split(',');


for(let i=0;i<key1.length;i++){
 let key = key1[i].trim();
 let value = prompt(`Enter the value for the key ${key}`);
 obj1[key] = value.trim();
}

for(let i=0;i<key2.length;i++){
    let key = key2[i].trim();
    let value = prompt(`Enter the value for the key ${key}`);
    obj2[key] = value.trim();
}

console.log(obj1);
console.log(obj2);

console.log(mergeObjects(obj1,obj2));


let calculator = {
    "+":(a,b)=> a+b,
    "-":(a,b)=> a-b,
    "*":(a,b)=> a*b,
    "/":(a,b)=>(b!==0?a/b: "Cannot divide by zero")
}

const history = [];

while(true){
    const operation = prompt("Enter operation like + - * and / to view past history type history or to exit the program type exit").toLowerCase().trim();

    if(operation==="exit"){
        break;
    }
    else if(operation==="history"){
        console.log(history);
        continue;
    }
    else if (!calculator[operation]){
        console.log("Invalid operation. Try again.");
        continue;
    }
    else{
        const num1 = parseFloat(prompt("Enter num 1: ").trim());
        const num2 = parseFloat(prompt("Enter num 2: ").trim());
        if(isNaN(num1) || isNaN(num2)){
            console.log("Pls enter valid number");
            continue;
        }
        const result = calculator[operation](num1,num2);
        history.push(`${num1} ${operation} ${num2} = ${result}`);
        console.log(result);
    }
}