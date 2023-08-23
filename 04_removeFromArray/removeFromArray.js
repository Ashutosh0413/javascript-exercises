const removeFromArray = function(array,...elementsToRemove) {
    const answerArray =[];
    array.forEach((element) => {
        if(!elementsToRemove.includes(element)){
            answerArray.push(element);
        }


    });
    return answerArray;
   

};

// Do not edit below this line
module.exports = removeFromArray;
