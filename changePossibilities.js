/*
Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins.
They found out you're a programmer and asked you to solve something they've been wond
ering for a long time.Write a function that, given an amount of money and an array
of coin denominations,computes the number of ways to make the amount of money with
coins of the available denominations.
Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your
 program would output 4—the number of ways to make 4¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/

function changePossibilities(n, denoms) {
  // Write your code here.
  /* initialize an array with the first value being 1.
		The index represents the a target amount
		The value is the amount of ways we can change for that index.
	*/
  const output = new Array(n + 1).fill(0);
  output[0] = 1;
  for (const denom of denoms) {
    /*
		for each demonination we can check if we can make the index. If we can we change that index
		with the previous value and and the value of leftover output[currVal - denom]
		*/
    for (let currVal = 1; currVal < output.length; currVal++) {
      if (denom <= currVal) {
        output[currVal] += output[currVal - denom];
      }
    }
  }
  return output[n]; // return value at n index.  o(nd) time and o(n) space
}

const tar1 = 4;
const tar2 = 10;
const demo1 = [1, 2, 3];
const demo2 = [1, 5, 10, 25];
console.log(changePossibilities(tar1, demo1)); // 4
console.log(changePossibilities(tar2, demo2)); // 4
