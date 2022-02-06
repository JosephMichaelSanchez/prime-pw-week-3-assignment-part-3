console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded=40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges=[3, 5, (-6), 0, 7, 11];
console.log(supplyChanges);
// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);
// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');
let final=supplyChanges.pop();
console.log(final);
// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log(supplyChanges);
// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');
for (let x=0; x<supplyChanges.length; x++){
  if(supplyChanges[x]>0){
    console.log('Added ' + supplyChanges[x] + ' parts.')
  }
  if(supplyChanges[x]===0){
    console.log('No Change')
    }
  if(supplyChanges[x]<0){
    console.log('Removed ' + -supplyChanges[x] + ' parts.')
  }
  }
// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');
for(transfer of supplyChanges){
  if(transfer>0){
    console.log('Added ' + transfer + ' parts.')
  }
  if(transfer===0){
    console.log('No change.')
  }
  if(transfer<0){
    console.log('Removed ' + -transfer + ' parts.')
  }
}
//END LOOP
//We created a variable named "transfer" to represent the value in the array that is the number of parts removed or added.
//The loop then checks the value of "transfer" in relation to '0' and console.logs the appropriate string of text.

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');
let sum=0
for (let x=0; x<supplyChanges.length; x++){
  sum=sum + supplyChanges[x]
}
//END LOOP
console.log(sum)
//We created a variable named "sum" and gave it an intial value of '0'.
//The loop will run through the array and add each value in it to "sum".
//Once we have looped through the array, we can console.log "sum" to get the total number of supplies.

// 9. We have a large stash of parts in our warehouse that we
//    need to box up and get ready for shipment.
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
let parts=572
let boxes=0
while (parts>=7){
  console.log('Filling boxes with 7 parts each...');
  parts-=7;
  boxes++;
  if (parts<7){
    console.log('We filled ' + boxes + ' boxes.')
    console.log('There are ' + parts + ' parts remaining.');
  }
}
//END OF LOOP
//We created a variable named "parts" to represent the total number of parts we have, and it's initial value is 572.
//We created a variable named "boxes" to represent each box we have filled with 7 parts, and it's initial value is 0.
//"parts-=7" represents us subtracting 7 from "parts" each time through the loop.
//"boxes++" represents us adding 1 to "boxes" each time through the loop.
//"if (parts<7)" is us checking if we no longer have enough parts to fill a box after each time through the loop.
//Once "parts" reaches a value less than 7, we will console.log how many boxes we filled, and how many parts are left.
