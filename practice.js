const number = 5;
/**condition will be false for
->number = 0
->number = ""
->number = NaN
->number = false
->number = undefined 
**/

/** condition will be true for
 * number = " "
 * number = "0" //because 0 here is a string
 * number = []
 * number = {}
 * number = 'false'
 **/

if(number){
 console.log("Found");
}else{
console.log("Not found");
}

/**undefined vs null*/
//if we don't define a variable
let mojnu;
console.log(mojnu);
//if we call a function with return but has no return value
function add(num1,num2){
    let sum = num1+num2;
}
const result = add(5,6);
console.log(result);
/**undefined section ends here*/

/**Double(==) and Triple equal(===)
 * Double equal doesn't check which type
 * Triple equal checks the value and it's type
 */
let a = 2;
let b = "2";
//here it'll show this is true
if(a == b){
    console.log("Its true");
}else{
    console.log("its false");
}
//in triple equal it'll show false
if(a===b){
    console.log("its true");
}else{
    console.log("its false");
}

//output will be correct,because in JS 1 = true
const c = 1;
const d = true;
if(c==d){
    console.log("correct");
}else{
    console.log("incorrect");
}
//But if we check with triple equal it'll be false
/**double triple section ends here */

/** map,filter and smart way to run loop section 
 ->map is used to work on any element of an array
*/
//squaring the elements of an array by using for loop
let myArray = [2,3,4,5,6];
const output = [];
for(let i = 0; i< myArray.length;i++){
    const element = myArray[i];
    const arrayResult = element*element;
    output.push(arrayResult);
}
console.log(output);
//doing the same thing with map-filter
const ab = myArray.map(function(numbers){
    return numbers*numbers;
}) 
//map can take 3 array parameters 
myArray.map(function(numbers,index,array){
    console.log(numbers, index,array);
})
console.log(ab);

//writing same map with arrow function
const result2 = myArray.map(x => x*x);
console.log("after arrow=",result2);

//filter=shows the specific values
const result3 = myArray.filter(x=> x<4); //It'll show the array elements less than 4
console.log("after filtering",result3);
/** maping filtering ends here */

/**maping with objects */
let myArray2=[
{id: 1, name:'Habib', age:26},
{id: 2, name:'Pinky', age:26},
{id: 3, name:'Antu', age:20},
{id: 4, name:'Rahman', age:33}
];
const arrayNames = [];

for(let j=0;j<myArray2.length;j++){
    const element2 = myArray2[j].name;
    arrayNames.push(element2);
}
console.log(arrayNames);

//doing the same thing with map
const result4 = myArray2.map(s => s.name);
console.log("After maping the names are=",result4);