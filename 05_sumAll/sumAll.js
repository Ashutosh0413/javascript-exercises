const sumAll = function(num1,num2) {
// should do swap of num1,num2 for more better soln
    finalSum = 0
    if (num1<num2 && num1 > 0 && num2 > 0 && typeof num1 === 'number' && typeof num2 === 'number'){
        for(i=num1;i<=num2;i++){
            finalSum += i
        }
    }else if(num1 > num2 && num1 > 0 && num2 > 0 && typeof num1 === 'number' && typeof num2 === 'number'){
        for(i=num1;i>=num2;i--){
            finalSum += i
        }
    }else{
        return 'ERROR'
    }
    return finalSum;



};

// Do not edit below this line
module.exports = sumAll;
