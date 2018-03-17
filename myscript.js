/*
  Multi-line comments look like this.

  They make it easier to write larger blocks of prose for
  detailed explanations or other notes without marking each
  line with a comment.  

  You only need to mark the beginning and the end.
*/

var greeting = 'Hello everyone!';
alert(greeting);
console.log("OMG this is JavaScript");
alert('Haha! Gotchya :P'); // this is a comment on the end of a line.
var message = 'Say "Hello" to my little friend.';
console.log(message);
var warning = "Don't swim here.  There are sharks!";
console.log(warning);
var sumOfNumbers = 1 + 3;
alert(sumOfNumbers);

//FUNCTIONS
function functionName(argument) {
    // Performing an operation
    var double = argument * 2;
    // Returning a value
    return double;
};
console.log(functionName(10));

function add(arg1,arg2) {
    // Performing an operation
    var d = arg1 + arg2;
    // Returning a value
    return d;
};
//console.log(add(10,10));

function sub(arg1,arg2) {
    // Performing an operation
    var d = arg1 - arg2;
    // Returning a value
    return d;
};

function mul(arg1,arg2) {
    // Performing an operation
    var d = arg1 * arg2;
    // Returning a value
    return d;
};

function div(arg1,arg2) {
    // Performing an operation
    var d = arg1 / arg2;
    // Returning a value
    return d;
};
//console.log(add(10,10));

var number = 7;
    if (number > 7) {
        console.log('High!');
    } else if (number < 7) {
        console.log('Low!');
    } else {
        console.log('You guessed our number.');
    }   


function decide(operator,n1,n2)   {
    if(operator == "+"){
        return add(n1,n2)
    }

    else if(operator == "-"){ 
        return sub(n1,n2)
    }
    else if(operator == "*"){ 
        return mul(n1,n2)
    }
    else if(operator == "/"){ 
        return div(n1,n2)
    }
    else{ 
        alert("Plaese enter an appropriate operator");
    }
} 

//ARRAYS
var animals = ['cat', 'dog', 'horse'];
var randomThings = [2, 'book', 'today is Saturday', 10];
var numbers = [1, 2, 8, 19];

var randomThings = [2, 'book', 'today is Saturday', 10];
console.log(randomThings.length); // We will get 4.

var randomThings = [2, 'book', 'today is Saturday', 10];
var firstItem = randomThings[0];
console.log(firstItem);
var secondItem = randomThings[1];
console.log(secondItem);

var animals = ['cat', 'dog', 'horse'];
// let's replace 'dog' with 'fish'
animals[1] = 'fish';
console.log(animals); // Now our animals array will be ['cat', 'fish', 'horse']

var animals = ['cat', 'dog', 'horse'];
animals.push('rabbit');
console.log(animals); // animals will be ['cat', 'dog', 'horse', 'rabbit']

var favfood = ['bhindi','mango','dal','kheer','sevpuri'];
console.log(favfood.length); 
console.log(favfood[2]); 
favfood[1] = 'chiku';
favfood.push('roti');

//Loops

//While loop
// starting point
var number = 0;
while (number < 10) {
    // 'less than 10'' is a condition (finishing point)
    console.log('JavaScript is awesome!');
    number = number + 1;
    // + 1 is a counter/size of the step
}

//For loop
var i;
for (i = 0; i <= 5; i = i + 1) {  // (starting point; condition; step)
    console.log('Purr');
}

//Iterating Through Arrays
var animals = ['cats', 'dogs', 'horses'];
for(var i = 0; i < animals.length; i++){
    console.log('I love ' + animals[i]);
}

//Loops and Logic
for (var i = 10; i >= 0; i = i - 1) {
    if (i === 5) { // triple equals compares types as well!!
        console.log('WooHoo, we are in the middle!');
    } else {
        console.log(i);
    }
}

//tasks
var number = 10;
while (number >= 1) {
    // 'less than 10'' is a condition (finishing point)
    console.log(number);
    number = number - 1;
    // + 1 is a counter/size of the step
}


for (var i = 3; i <= 22; i = i + 3) {  // (starting point; condition; step)
    console.log('Printing every 3rd number ' + i);
}

for (var i = 0; i <= favfood.length; i = i + 1) {  // (starting point; condition; step)
    console.log('I like ' + favfood[i]);
}

//exercise
/*
Count from 1 to 50 and print the numbers out:

If a number is a multiple of three, print ‘Fizz’.
If it’s a multiple of 5, print ‘Buzz’.
If it’s a multiple of 3 and 5, print ‘FizzBuzz’.
For everything else, print the number itself.

*/
for(var i = 1; i<=50;i++)
{
    if(i%3 == 0 && i%5 == 0)
    {
        console.log('FIZZBUZZ');
    }
    else if (i%3 == 0)
    {
        console.log('FIZZ');
    }
    else if (i%5 == 0){
        console.log('BUZZ');
    }
    else{
        console.log(i);
    }
}

//DOCUMENT OBJECT MODEL (DOM)

var ourTwitter = document.querySelector('.fa-twitter');
console.log(ourTwitter);
// We can store page elements in variables, just like any other value!
// The result on the console is : <i class="fa fa-twitter" aria-hidden="true"></i>