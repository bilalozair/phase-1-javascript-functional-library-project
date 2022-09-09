//1)  myEach function

function alert(value) {
    console.log(value)
}

const myEach = function (collection, alert) {

    if (Array.isArray(collection)) {

        for (let i = 0; i < collection.length; i++) {
            alert(collection[i]);        
        }
        return collection;
    } 
    else if (typeof collection  === "object") {

        let collectionCopy = Object.assign({},collection);
        let convArray = Object.values(collectionCopy);
        for (let i = 0; i < convArray.length; i++) {
            alert(convArray[i]);        
        }
        return collection;
    }
    else {
        let error = "collection is not a valid input. Must be either obj or array.";
        return error;
    }
}



// 2) myMap function

function multiplier(num) {
    let value = num*3;
    return value;
}

const myMap = function (collection, multiplier) {

     if (Array.isArray(collection)) {
        let newArray = [];
        let newElement;
        for (let i = 0; i < collection.length; i++) {
            newElement = multiplier(collection[i]);
            newArray.push(newElement);
        }
        console.log(newArray)
        console.log(Array.isArray(newArray))
        return newArray;
    } 
    else if (typeof collection  === "object") {
        let objResult = []; 
        let collectionCopy = Object.assign({},collection);
        let convArray = Object.values(collectionCopy);
        let objElement;
        for (let i = 0; i < convArray.length; i++) {
            objElement = multiplier(convArray[i]);      
            objResult.push(objElement)  
        }
        console.log(objResult)
        return objResult;
    }
    else {
        let error = "collection is not a valid input. Must be either obj or array.";
        return error;
    }

}

// 3 myReduce

function reduceCallBack(acc, val, collection) {
    return acc + (val*3);
}

const myReduce = function (collection, reduceCallBack, startVal = 0) {
    if (Array.isArray(collection)) {
        let resultVal;
        let accVal = startVal;
        for (let i = 0; i < collection.length; i++) {
            resultVal = reduceCallBack(accVal, collection[i], collection);
            accVal = resultVal;
        }
        console.log(resultVal)
        return resultVal;
    } 
    else if (typeof collection  === "object") {
         
        let collectionCopy = Object.assign({},collection);
        let convArray = Object.values(collectionCopy);
        let resultVal;
        let accVal = startVal;
        for (let i = 0; i < convArray.length; i++) {
            resultVal = reduceCallBack(accVal, convArray[i], collection);
            accVal = resultVal;
        }
        console.log(resultVal)
        return resultVal;
    }
    else {
        let error = "collection is not a valid input. Must be either obj or array.";
        return error;
    }
}

myReduce([1,2,3,4], reduceCallBack)
// myReduce({one:1, two:2, three:3, four:4}, reduceCallBack)
