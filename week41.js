/*
    Hi.
    This is a set of practice exercises.
    The purpose is to train on a few things at a time.
    You do this by entering your answer after a task is given (see the example).

    DO NOT change any code given, unless the task specifically says to do so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}





/* -----------------------------------------------------------------------------
    Task: A

    1. Declare a variable to store the following values 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55
    2. Declare a variable to keep the sum of the numbers from step 1.
    3. Use a for or while loop to sum the numbers from step 1 to the variable from step 2
    4. Make a generic function for step 3.
    
*/
addSpacing(1);

console.log("Task: A");

const numbers = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55];

let totalSum = 0;

for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
}

print("The sum of the numbers is:" + totalSum);

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const sumResult = sumNumbers(numbers);
print("The sum using the function is: " + sumResult);







/* -----------------------------------------------------------------------------
    Task: B

    1. Use a for loop to find the position of 'raspberry' in the list of fruits.
    2. Create a generic function that can find the position of anny fruit in the list. 
*/
addSpacing(1);

console.log("Task: B");

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'pineapple', 'pear', 'peach', 'plum', 'watermelon', 'blueberry', 'raspberry', 'blackberry', 'strawberry', 'cherry', 'lemon', 'lime', 'pomegranate', 'apricot'];

let raspberryIndex = -1;
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'raspberry') {
        raspberryIndex = i;
        break;
    }
}

print("The position of 'raspberry' is: " + raspberryIndex);

function findPositionInArray(itemName, itemList) {
    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i] === itemName) {
            return i;
        }
    }
    return -1;
}

const mangoIndex = findPositionInArray('mango', fruits);
print("The position of 'mango' is: " + mangoIndex);






/* -----------------------------------------------------------------------------
    Task: C

    1. Declare a new variable to store fruits that start with the letter 'b'.
    2. Use a for or while loop to copy over all fruits starting with 'b' to your new variable (the one you declared in point 1).
    3. Print the number of fruits that start with 'b' (hint: it will be the length of the list from point 2).
*/
addSpacing(1);

console.log("Task: C");

const bFruits =[];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i][0].toLocaleLowerCase() === 'b') {
        bFruits.push(fruits[i]);
    }
}

print("Number of fruits that start with 'b': " + bFruits.length);
print("Fruits that start with 'b': " + bFruits.join(', '));


/* -----------------------------------------------------------------------------
    Task: D
    * Write the code to find the number of fruits in the list that have a name longer than 8 characters.
    * Print the count.
*/
addSpacing(1);

console.log("Task: D");

let longNameCount = 0;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length > 8) {
        longNameCount++;
    }
}

print("Number of fruits with names longer than 8 character: " + longNameCount);



/* -----------------------------------------------------------------------------
    Task: E
    
    Use loops (for or while) to prove that list A and list B contain exactly the same items.
*/
addSpacing(1);

console.log("Task: E");

const A = [1, 4, 5, "Bananas", true, 3.14, 9.81];
const B = [1, 3.14, 5, 9.81, true, 4, "Bananas"];

if (A.length !== B.length) {
    print("The lists do not contain the same items.")
} else {

    let areEqual = true;

    const sortedA = A.slice().sort();
    const sortedB = B.slice().sort();

    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]){
            areEqual = false;
            break;
        }
    }

    if (areEqual) {
        print("The lists contains the same items.");
    } else {
        print("The lists do not contain the same items.");
    }
}
//#region Util Functions
function addSpacing (lines = 1) {
    for (let i =0; i < lines; i++){
        print("")
    }
}

function print (text) {
    console.log(text)
}
//#endregion