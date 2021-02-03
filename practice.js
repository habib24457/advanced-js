const number = 5;
/**condition will be false for
->number = 0
->number = ""
->number = NaN
->number = false
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

