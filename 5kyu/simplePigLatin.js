/*DESCRIPTION AND LINK OF THE CHALLENGE AT THE END*/

// my solution:
function pigIt(str){
    let arrSplitedBySpace = str.split(' ')
    let finalArr = []
    for(let i in arrSplitedBySpace){
        console.log(arrSplitedBySpace[i])
        let splitArr =  arrSplitedBySpace[i].split('')
        let itemShifted = splitArr.shift()
        finalArr.push(splitArr.splice(0,1).push(itemShifted))
        finalArr.push(itemShifted)
    }
    console.log(finalArr)
}
pigIt('Pig latin is cool')

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

LINK OF THE CHALLENGE: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
*/