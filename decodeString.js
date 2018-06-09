/*
Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the
 square brackets is repeated exactly k times.Note: k is guaranteed to be a positive integer.

For s = "4[ab]", the output should be decodeString(s) = "abababab"
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

function decodeString(s) {
  let output = '';
  let curNum = 0;
  const stackStr = []; // stacks to keep track current String and current Number for multiplication
  const stackNum = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      stackStr.push(output);
      stackNum.push(curNum);
      output = '';
      curNum = 0;
    } else if (s[i] === ']') {
      const num = stackNum.pop();
      const prevString = stackStr.pop();
      output = prevString + output.repeat(num);
    } else if (parseInt(s[i]) && !isNaN(s[i])) {
      // element is number
      curNum += Number(s[i]);
    } else {
      output += s[i];
    }
  }
  return output; // o(n) space and time
}

const s1 = '4[ab]'; // , the output should be decodeString(s) = "abababab"
const s2 = '2[b3[a]]'; // , the output should be decodeString(s) = "baaabaaa"

console.log(decodeString(s1));
console.log(decodeString(s2));
