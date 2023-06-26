//ARRAY METHODS


// ______________ARR METHODS_________________
const arr =  [2,3,3,4,5,3223,23,32]


// not modifies the actual array, dosen't return any thing, only loop through the item; unbreakable, un-skip-able loop; 
// arr.forEach(item=>{
//   if(item==5){
    
//   }   
//    console.log(item+10)})
// console.log(arr)



// console.log(arr.includes(10))


// // arr.filters return array with conditions matched
// myArr = arr.filter((e)=>e===3)
// console.log(myArr) 


// modifies and return the copy of the array. But not modify the actual array
// myArr = arr.map((e)=>e+23)
// console.log(myArr)


// returns REDUCE TO A SINGLE VALUE, takes result variable as an first argument which initializes later,
//  second argument is a single item of an array, not modified the actual array
// const newArr = arr.reduce((acc,val)=>acc+val,0)
// console.log(newArr) 
// const max = arr.reduce((acc,curr)=>{
// if(curr>acc){
//   acc=curr}
//   return acc
// },0)
// console.log(max)

// ++++++++++++++++++++++++++++++SECOND CLASS STARTS++++++++++++++++++++++++++++++++++++
const users = [
  {firstName:"pratik",surname:"verma",age:23},
  {firstName:"gulshan",surname:"kumar",age:30},
  {firstName:"yashaswi",surname:"sahu",age:21},
  {firstName:"kishore",surname:"V",age:33},
]

// const FullNameArr = users.reduce((acc,curr)=>{
//  acc.push(curr.firstName+ " " + curr.surname)
// return acc
// },[])
// console.log(FullNameArr)


// const listOfAge = users.reduce((acc,curr)=>{
  // ____for checking the item is present or not inside any object we use [] syntax___
//   if(acc[curr.age]){
//   acc[curr.age] = ++acc[curr.age] }
//   else{
//     acc[curr.age]=1 
//   } 
// return acc;
// },  {})
// console.log(listOfAge)
// *********************************************************************

// ________________________________USING MAP AND FILTER CHAINING____________________
// const listOfUncleUsers = users.filter(user=>user.age>30).map(i=>i.firstName)
// console.log(listOfUncleUsers)
// ****************************************************************************

// ________________________________USING REDUCER____________________
// const listOfUncleUsers = users.reduce((acc,curr)=>{
//   if(curr.age>30){
//     acc.push(curr.firstName)
//   }
//   return acc
// },[])
// console.log(listOfUncleUsers)
// ++++++++++++++++++++++++++++++SECOND CLASS END++++++++++++++++++++++++++++++++++++

// checks that at least one item matched the condition and if matched ? it returns true or false
// console.log(arr.some(ans => ans>80023))

// checks that at every item matched the condition and if matched ? it returns true or false
// console.log(arr.every(ans => ans>5))


// const alphabets = "andksndsmdksdasdmmsdalmom"
// .split method applies in string , return an array of split characters, receives an argument "" which means split with,
//  in default it splits with cursor
// const newAlphabetsArr = alphabets.split("")
// console.log(newAlphabetsArr)

// // decreased Sorted here x is first value and y is second value ? 
// const sortedArr = newAlphabetsArr.sort((x,y)=> x > y ? -1 :1)

// console.log(sortedArr)




