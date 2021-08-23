const readlineSync=require('readline-sync');
const chalk=require('chalk');
//Set themes
const quest=chalk.bold.bgCyan;
const message=chalk.bold.magenta;
const error=chalk.bold.bgRed;

var userName=readlineSync.question(quest('\nPlease Enter Your Name: '));

console.log(message('\nGreat to have you here '+userName.toUpperCase()));

var dateOfBirth=readlineSync.question(quest('\nEnter Your Date of Birth in DD/MM format only '))
var number=dateOfBirth.replace('/','');

var isPrime=true;

validateDateofBirth(number);

//To check for prime  
function toCheckForPrime(number){
for (let i = 2; i < number; i++) {
    if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
if (isPrime) {
        
        console.log(`\n${number} is a prime number`);
        
        console.log(message('\nPlease do share this CLI app on your social media...'))}
else {
        console.log(`\n${number} is a not prime number`);
}
}

function validateDateofBirth(number){
  var dob=number.toString();
  var dd=dob.slice(0,2);
  var mm=dob.slice(-2);
  
  if(Number(dd)>31 || Number(mm)>12){
    console.log(error('\nPlease enter a valid date of birth.'));
  }
  else{

    var date=Number(dd);
  var month=Number(mm);
  if(month===02 && date>29){
      console.log(error('\nPlease enter a valid date of birth.'));
  }
  else if(month===04 && date===31){
      console.log(error('\nPlease enter a valid date of birth.'));
  }
  else if(month===06 && date===31){
      console.log(error('\nPlease enter a valid date of birth.'));
  }
  else if(month===09 && date===31){
      console.log(error('\nPlease enter a valid date of birth.'));
  }
  else if(month===10 && date===31){
      console.log(error('\nPlease enter a valid date of birth.'));
  }
  else{
    toCheckForPrime(number);
  }
  }

}


  
