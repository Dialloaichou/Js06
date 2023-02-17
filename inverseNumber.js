module.exports = inverseNumber;

function inverseNumber(num){
    
    if (num===0){
        return  "0 n’a pas d’inverse";
    }else{
        return 1/num;
    }
}
console.log(inverseNumber(4)) ;
console.log(inverseNumber(0)) ;