const calc = {};

calc.add = function(a,b){
    return a+b;
}

calc.sub = function(a,b){
    return a-b;
}

calc.mul = function(a,b){
    return a*b;
}

calc.div = function(a,b){
    if(b==0){
        return new Error('zero divider error.');
    }
    return a/b;
}

calc.mod = function(a,b){
    return a%b;
}

calc.getE = function(){
    return Math.E;
}

module.exports = calc;