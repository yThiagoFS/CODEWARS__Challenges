/*DESCRIPTION AND LINK OF THE CHALLENGE AT THE END*/

// my solution
function billboard(name, price = 30){
    const nameArray = [...name]
    return  nameArray.reduce((ac, letters) => {
        return ac += price
    }, 0)
} 
billboard('Thiago Ferreira')

/*
You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

LINK OF THE CHALLENGE: https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
*/