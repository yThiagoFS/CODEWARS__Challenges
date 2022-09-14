/*DESCRIPTION AND LINK OF THE CHALLENGE AT THE END*/

// my solution:
function XO(str) {
    let x = 0
    let o = 0
    let strInsensitive = str.toLowerCase()
    for(let i in strInsensitive) {
        if(strInsensitive[i] === 'x') x += 1
        if(strInsensitive[i] === 'o') o += 1
    }
    return x === o ?  true :  false
}
/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

LINK OF THE CHALLENGE: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
*/