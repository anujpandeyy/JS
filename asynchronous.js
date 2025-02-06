function message(message,delay){
    setTimeout(function(){
        console.log(message);
    },delay)
}

let userInput = prompt('Enter Message:').trim();
let userDelay = Number(prompt('Enter Delay eg: 1000 is 1sec').trim());
message(userInput,userDelay);

function countDown(number){
    let interval = setInterval(function(){
        console.log(number);
        if(number===0){
            clearInterval(interval);
            console.log('Count Down is complete!');
        }
        number--;
    },1000);
}

let userInput2 = Number(prompt('Enter Number for countdown').trim());
if(isNaN(userInput2)){
    console.log('pls enter a valid no :(');
}
else{
    countDown(userInput2);
}


async function fetchData() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        let data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Error",error.message);
    }
}

fetchData();

async function fetchData2(){
    try{
        let [data,data2] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1"),
            fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        ]);

        let dataRes =await data.json();
        let dataRes2 =await data2.json();

        console.log(dataRes);
        console.log(dataRes2);
                


    }catch(e){
        console.error("Error",e);
    }
}

fetchData2();