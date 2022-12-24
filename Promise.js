1. Write one example explaining how you can write a callback function.

function firstfun(name,sum)
{
console.log(name,sum)
}
function callBack(a,b)
{
    return a+b;
}

firstfun("SUJIT", callBack(10,30));

Output - SUJIT 30


2. "Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 

Explain callback hell.
Numbers
1
2
3
4
5
6
7


function callBackFnc()
{
    let count=1;

    setTimeout(() =>{
        console.log(count++);
        setTimeout(() =>{
            console.log(count++);
            setTimeout(() =>{
                console.log(count++);
                setTimeout(() =>{
                    console.log(count++);
                    setTimeout(() =>{
                        console.log(count++);
                        setTimeout(() =>{
                            console.log(count++); 
                            setTimeout(() =>{
                                console.log(count++);                 
                            },7000);                 
                        },6000);               
                    },5000);
               },4000);
            },3000);
        },2000);
    },1000);
}
callBackFnc();

3. "Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed 
then it should go to reject the state and catch the error and print Promise Rejected "


const promiseFun = new Promise((resolve,reject) => {
    let count="10";

    if(count === 10)
    {
      resolve("Successfully Resolved")
    }

    else{
        reject("Number not same")
    }
})

promiseFun.then((x) =>
{
console.log(x);
})

promiseFun.catch((x) =>
{
console.log(x);
})


5. Create examples to explain callback function

function firstfun(name,sum)
{
console.log(name,sum)
}
function callBack(a,b)
{
    return a*b;
}

firstfun("CALL", callBack(10,30));

Output - CALL 300


6. Create examples to explain callback hell function

function callBackFnc()
{
    let count=1;

   
                setTimeout(() =>{
                    console.log(count++);
                    setTimeout(() =>{
                        console.log(count++);
                        setTimeout(() =>{
                            console.log(count++);                
                        },3000);               
                    },2000);
               },1000);
            
}
callBackFnc();

7. Create examples to explain promises function


const promiseFun = new Promise((resolve,reject) => {
    let count="30";

    if(count === 10)
    {
      resolve("Successfully Resolved")
    }

    else{
        reject("Number not same")
    }
})

promiseFun.then((x) =>
{
console.log(x);
})

promiseFun.catch((x) =>
{
console.log(x);
})


8. Create examples to explain async await function


await keyword is used with a function to represent that the function is an asynchronous function and returns a promise.

async function func() {
    console.log('Async function.');
    return Promise.resolve(1);
}

func(); 



9. Create examples to explain promise.all function

Promise.all() method takes an iterable of promises as input and returns a single Promise as Output

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'Sujit');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});