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

//Checking palindrome array
newArr = [1,2,3,3,2,1]
let flag = 0
for(let i=0;i<newArr.length/2-1;i++)
{
    if(newArr[i] !== newArr[newArr.length-i-1])
    {
        flag++;
        break;
    }

}
if(flag == 0)
    console.log("It is palindrome")
else
    console.log("It is not palindrome")

//Group by based on an object property

const EmployeeData = [
    {id : 1,name : "Sayan",city:"Kolkata"},
    {id : 2,name : "Tom",city:"New York"},
    {id : 3,name : "Ronaldo",city:"Lisbon"},
    {id : 4,name : "Bruno",city:"Lisbon"},
    {id : 5,name : "Ramos",city:"Madrid"},
    {id : 6,name : "Carvajal",city:"Madrid"}


]
const groupedData = Object.groupBy(EmployeeData,property => property.city)

for(let [city,data] of Object.entries(groupedData))
{
    console.log(city)
    console.log(data)
}

//Fetch unique cities from the emploee data

let cities = []
for(let item of EmployeeData)
{
    cities.push(item.city)
}
console.log(new Set(cities))