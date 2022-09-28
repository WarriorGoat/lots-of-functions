/*
Function name - sayHi
parameters: nameStr - string
modify string - add "Hi, " before the parameter - concantenate or interpolate?
return modified string
*/
function sayHi(nameStr) {
    // let newStr = `Hi, ${nameStr}`;
    // return newStr;
    return `Hi, ${nameStr}`; // this gives the same answer as defining a variable and assiging the function to the variable
}

console.log(sayHi("John"));
console.log(sayHi("Jimmy"));
console.log(sayHi("Bob"));
console.log();
/*
Function name - bigString
parameters: str1 & str2 - strings
compare strings by length and return the larger one or both if equal
return larger string
*/
function bigString(str1, str2) {
    if (str1.length>str2.length) {
        return `${str1} is the longer string`
    }else if(str2.length>str1.length){
        return `${str2} is the longer string`
    }else {return `${str1} and ${str2} are the same length`}
}
console.log(bigString("two","three"));
console.log(bigString("four", "two"));
console.log(bigString("one", "two"));
console.log();

/*
Function name - bigNumber
parameters: num1 & num2 - numbers
compare numbers and return the larger one or both if equal
return larger string
*/

function bigNumber(num1, num2) {
    if (num1>num2) {
        return `${num1} is the larger number`
    }else if(num2>num1){
        return `${num2} is the larger number`
    }else {return `${num1} and ${num2} are equal`}
}
console.log(bigNumber(2,3));
console.log(bigNumber(4,2));
console.log(bigNumber(1,1));
console.log();

/*
Function name - fiveMore
parameters: array - array of numbers
adds 5 to all odd numbers in the array
return the revised array
*/

function fiveMore(array) {
    let i = 0
    let newArray = []
    while (i<array.length) {
        if (array[i]%2===0){
            newArray.push(array[i])
        }else {
            newArray.push(array[i]+5)
        }i++
    };
    return newArray
}

array1=[1,2,3,4,5,6]
console.log(fiveMore(array1));
console.log();

/*
Function name - arraySummer
parameters: array - array of numbers
add together all the numbers in an array
return the sum
*/

function arraySummer(array) {
    let i = 0
    let sum = 0
    while (i<array.length) {
       sum = sum + array[i]
        i++
    };
    return sum
}

array1=[1,2,3,4,5,6]
console.log(`The total of your array is ${arraySummer(array1)}`);
console.log();

/*
Function name - everyDivisible
parameters: num - a number less then 10
finds all the numbers from 0 to 100 that are divisible by num
return the list of numbers one at a time
*/
function everyDivisible(num) {
    let resultant = 0
    let i = 1
    let divis = []
    while (resultant<100) {
       resultant = num * i;
       divis.push(resultant);
       i++;
    };
    let n = 0
    while (n<divis.length && divis[n]<=100){
        console.log(divis[n]);
        n++;
    }
}

everyDivisible(7)
console.log();