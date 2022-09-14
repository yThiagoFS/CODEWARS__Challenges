// not finished

function chain(initialValue, arrayActions) {
    let numReturned = 0
    arrayActions.forEach((item,i) => {
        if(i === 0) {
             initialValue += 10
        } else if(i === 1) {
            initialValue *= 30
        } 
        
    })
    return numReturned += initialValue
}
chain(357.8043283818716,['a','b'])