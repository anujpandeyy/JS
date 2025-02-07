function logDetails({name,age,city}){
    console.log(name);
    console.log(age);
    console.log(city);
}

let obj = {
    name: "Anuj",
    age: 22,
    city: "Mumbai"
}


logDetails(obj);


function mergeArrays(myArr,myArr2){
    return [...myArr,...myArr2];
}

const userInput = parseInt(prompt('Enter the no of elements u want in ur array1').trim());
let myArr = [];

for(let i=1;i<=userInput;i++){
    let temp = prompt(`Enter  for ${i} element`);
    myArr.push(temp) ;
}

console.log(myArr);
const userInput2 = parseInt(prompt('Enter the no of elements u want in ur array2').trim());
let myArr2 = [];
for(let i=1;i<=userInput2;i++){
    let temp = prompt(`Enter  for ${i} element`);
    myArr2.push(temp) ;
}

console.log(myArr2);

console.log(mergeArrays(myArr,myArr2));


class BankAccount{
    constructor(balance){
        this.balance = balance;
    }
    deposit(amount){
       this.balance += amount;
       return this.balance;
    }
    withdraw(amount){
        if(amount>this.balance){
            return "You don't have enough balance to withdraw!";
        }
        else{
            this.balance-=amount;
            return this.balance;
        }
    }
}

let obj2 = new BankAccount(5000);

console.log(obj2.deposit(5000));
console.log(obj2.withdraw(15000));

