const myEach = (arr, cb) => {
    if (Array.isArray(arr)) {
        for (let i=0; i<arr.length; i++) {
            cb(i)
        }
        return arr
    } else {
        for (let i in arr) {
            cb(arr[i])
            i++
    }
    return arr
}
}

const myMap = (arr, cb) => {
    let newArr = []
    if (Array.isArray(arr)) {
        for (let i=0; i<arr.length; i++) {
            newArr.push(cb(arr[i]))
        }
    } else {
        for (let i in arr) {
            newArr.push(cb(arr[i]))
            i++

    }
}
return newArr
}


const myReduce = (arr, cb, init) => {
    //cb will take (acc, val, collection)
    //myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10); => 16
    let reduceVal = 0;
    if (init) {
        reduceVal += init;
        console.log(`this is reduceVal ${reduceVal}`)
    }
    if (Array.isArray(arr)) {
        for (let i=0; i<arr.length; i++) {
            console.log(`this is the element of array's val ${arr[i]}`)
            console.log(`this is the function output ${cb(arr[i])} `)
            reduceVal+= cb(arr[i])
        }
    } else {
        for (let i in arr) {
            reduceVal+= cb(arr[i])
            i++
    }
}
return reduceVal
}


const myFind = (arr, cb) => {
    let foundVal;
    if (Array.isArray(arr)) {
        for (let i=0; i<arr.length; i++) {
            if (cb(arr[i])===true) {
                foundVal = arr[i]
                break
            }
        }
    } else {
        for (let i in arr) {
            if (cb(arr[i])===true) {
                foundVal = arr[i]
                break} else {i++}
        }
    }
    return foundVal
}

const myFilter = (arr, cb) => {
    let foundVals =[];
    if (Array.isArray(arr)) {
        for (let i=0; i<arr.length; i++) {
            if (cb(arr[i])===true) {
                foundVals.push(arr[i])
            }
        }
    } else {
        for (let i in arr) {
            if (cb(arr[i])===true) {
                foundVals.push(arr[i])
                i++}
        }
    }
    return foundVals
}

const mySize = (arr) => {
    let len=0;
    if (Array.isArray(arr)) {
        for (let i=0; i<arr.length; i++) {
            len++
            }
    } else {
        for (let i in arr) {
            len++
            i++
        }
        }
    return len
}

const myFirst = (arr, len) => {
    let newArr =[];
    if (len) {
        for (let i=0; i<len; i++) {
            newArr.push(arr[i])
        }
        return newArr
    } else {
    return arr[0]}
}

const myLast = (arr, len) => {
    let newArr =[];
    if (len) {
        for (let i=1; i<=len; i++) {
            newArr.push(arr[arr.length-i])
        }
        return newArr
    } else {
    return arr[arr.length-1]}
}

const myKeys = (arr) => {
    let keys = [];
    for (let i in arr) {
        keys.push(i)
    }
    return keys
}

const myValues = (arr) => {
    let values = [];
    for (let i in arr) {
        values.push(arr[i])
    }
    return values
}