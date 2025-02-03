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


