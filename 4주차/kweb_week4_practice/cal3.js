exports.add = function(a,b){
    return a+b;
}

exports.sub = function(a,b){
    return a-b;
}

exports.mul = function(a,b){
    return a*b;
}

exports.div = function(a,b){
    if(b==0){
        return new Error('zero divider error.');
    }
    return a/b;
}

exports.mod = function(a,b){
    if(b==0){
        return new Error('zero divider error.');
    }
    return a%b;
}

exports.getE = function(){
    return Math.E;
}