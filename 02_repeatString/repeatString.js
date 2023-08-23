const repeatString = function(inputString, numberOfTimes) {
    let str = "";
    if (numberOfTimes < 0){
        return 'ERROR';
    }
    for(let i=0;i<numberOfTimes;i++){
        str += inputString;
    }
    return str;

};

// Do not edit below this line
module.exports = repeatString;
