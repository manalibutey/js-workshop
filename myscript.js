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