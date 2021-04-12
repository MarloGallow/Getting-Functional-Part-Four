//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE


/*

Write a function that can count the number of
genders in the dataset. The function will 
accept a string and an array as arguements. 
The output should be a number. 

*/

function genderCount(array, string){
//CODE BELOW HERE
var count = 0;
var genderCon = {
  female: 4, 
  male: 3,
  non: 1,}
for(var i = 0; i <= array.length - 1; i++){
  if(array[i].gender === genderCon){
  count++  
  }
}
return genderCon;

//CODE ABOVE HERE
}
console.log(genderCount('genderCon'))
//genderCount(customers, genderCon)