with (Math) {
    var arcsin=eval("(function(x){return asin(x);})");
    var arccos=eval("(function(x){return acos(x);})");
    var arctan=eval("(function(x){return atan(x);})");
}

function display( a ){
    let answer = document.getElementById("DISPLAY").value ;
    answer += a ;
    document.getElementById("DISPLAY").value = answer ;
    document.getElementById("DISPLAY").placeholder = answer ;
}

function calculate( ){
    with(Math){
        let answer = document.getElementById("DISPLAY").value ;
        document.getElementById("DISPLAY").value = "MathError" ;
        document.getElementById("DISPLAY").value = "MathError" ;
        answer = eval(answer) ;
        document.getElementById("DISPLAY").value = answer ;
        document.getElementById("DISPLAY").placeholder = answer ;
        if(isNaN(answer)){
            document.getElementById("DISPLAY").value = "MathError" ;
            document.getElementById("DISPLAY").placeholder = "MathError" ;

        }
    }
}

function AC( ){
    document.getElementById("DISPLAY").value = "" ;
    document.getElementById("DISPLAY").placeholder = "" ;
}

function del( ){
    let answer = document.getElementById("DISPLAY").value ;
    flag = answer.length ;
    answer = answer.slice(0,flag-1) ;
    document.getElementById("DISPLAY").value = answer ;
    document.getElementById("DISPLAY").placeholder = answer ;
}

