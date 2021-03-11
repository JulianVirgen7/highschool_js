 //Question 1
 //How do I include JS in an HTML file?
 //You reference the js file in html.

 //Question 2
 //What command do I use to add code?
 //You use the git add . command.

 //Question 3
 //What command do I use to push code?
 //You use the git push command.


 let name = 'Julian';
let sum = 5 + 5;
let divide = 10 / 2;

console.log('name:', name);
console.log('sum of 5 + 5:', sum);
console.log('10 / 2 is:', divide);

function add(a, b) { //passenger are called parameters

    //var vs let = scoping    
    let sum = a+b;
    return sum
    //return a+b  
    
    }
    
    let a=1;
    let b=5
    
    console.log(add(1,5));

    //JavaScript Loops
    //While loop

    let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// expected output: 3

//lab 49
let str = '';

for (let i = 2; i < 7; i++) {
  str = str + i;
}

//lab 50

let sum = 5 + 3 + 4 + 8;
let divide = 10 / 5;
console.log(3 * 4 * 2);
console.log(20 - 12);

//lab 51
let books = ['Star Wars', 'Harry Potter', 'Dairy of a Wimpy Kid', 
'Of Mice and Men', 'Lord of The Rings', 'The cat in the hat',
'the hunger games', 'the hobbit', 'the haunted museum', 'the lorax' ]

console.log(books.length)
// 10

let first = books[0]
// Star Wars

let last = books[books.length - 1]
// the lorax

let numbers =[2,4,6,8,10]

console.log(3 * 4 * 10)

