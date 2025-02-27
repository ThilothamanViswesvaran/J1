// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

// let js = prompt(`What is the “official” name of JavaScript?`);

// if(js === 'ECMAScript'){
//     console.log('Right');
// }
// else{
//     console.log('You don’t know? ECMAScript!');
// }

// Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

// let number = prompt(`Enter number:`);

// if(number > 0){
//     console.log(1);
// }
// else if( number < 0){
//     console.log(-1);
// }
// else{
//     console.log(0);
// }

// let a = 2;
// let b = 3;
// let result = (a + b < 4) ? "Below" : "Over";

// console.log(result)

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too big' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }

// let userName = 'John';

// function showMessage() {
//   userName = "Bob";

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName ); 

// showMessage();

// alert( userName ); 

// function showMessage(from, text) {

//   from = '*' + from + '*'; 

//   alert( from + ': ' + text );
// }

// let from = "Ann";

// showMessage(from, "Hello"); 

// alert( from ); 

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

ask("Do you agree?", showOk, showCancel);