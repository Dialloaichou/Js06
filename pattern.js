module.exports = pattern;

function pattern(){
    var etoile="";
    for (var i=0; i<5; i++){
        for(var j=0; j<=i; j++){
            etoile +="* ";
        }
        etoile +="\n";
    }  
    console.log(etoile);
}
pattern();