const arr = [10,10,15,3,43,120,122]

// Find the sum of the array

const sum = arr.reduce((sum,value) => {
   
      sum += value;
      return sum;
},0)

console.log(sum)

//Find the max value from an array

const max = arr.reduce((accu,value) => accu > value ? accu : value)

console.log(max)

// Remove duplicate elements from the array

let uniqueArr = new Set(arr);
console.log(uniqueArr)

//Reversing an array

arr.reverse()
console.log(arr)

//rotate an array by k steps
let newArr = [];
let k = 3;
for(let i = 0;i< arr.length;i++)
{
    newArr.push(arr[(arr.length-k+i)%arr.length])
}
console.log(newArr)

//Find the intersection of two array

const arr1 = [10,20,30,40,50]
const arr2 = [40,50,60,70,80,90,100]

const intersection = new Set(arr1).intersection(new Set(arr2))

console.log(intersection)