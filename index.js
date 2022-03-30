var screen = document.getElementById("screen");
var digit = document.getElementById("one");
var allClear = document.getElementById("all-clear");


//numbers

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var point = document.getElementById("point");

//operands
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var divide = document.getElementById("divide");
var times =  document.getElementById("times");


// functions

one.addEventListener(
    "click",

    function(){
        screen.innerHTML += one.innerHTML;
    }
)

two.addEventListener(
    "click",

    function(){
        screen.innerHTML += two.innerHTML;
    }
)

three.addEventListener(
    "click",

    function(){
        screen.innerHTML += three.innerHTML
    }
)

four.addEventListener(
    "click",

    function(){
        screen.innerHTML += four.innerHTML
    }
)

five.addEventListener(
    "click",

    function(){
        screen.innerHTML += five.innerHTML
    }
)

six.addEventListener(
    "click",

    function(){
        screen.innerHTML += six.innerHTML
    }
)

seven.addEventListener(
    "click",

    function(){
        screen.innerHTML += seven.innerHTML
    }
)

eight.addEventListener(
    "click",

    function(){
        screen.innerHTML += eight.innerHTML
    }
)

nine.addEventListener(
    "click",

    function(){
        screen.innerHTML += nine.innerHTML
    }
)

zero.addEventListener(
    "click",

    function(){
        screen.innerHTML += zero.innerHTML
    }
)

point.addEventListener(
    "click",

    function(){
        screen.innerHTML += point.innerHTML
    }
)

//functions for operands

plus.addEventListener(
    "click",

    function(){
        screen.innerHTML += plus.innerHTML
    }
)

minus.addEventListener(
    "click",

    function(){
        screen.innerHTML += minus.innerHTML
    }
)

divide.addEventListener(
    "click",

    function(){
        screen.innerHTML += divide.innerHTML
    }
)

times.addEventListener(
    "click",

    function(){
        screen.innerHTML += times.innerHTML
    }
)

equals.addEventListener(
    "click",

    function(){
        
     if(screen.innerHTML =="Akeju Oluwanifemi"){

            alert("Hit the AC (All Clear Button)");
        }

        else{

        screen.innerHTML =  + eval(screen.innerHTML);

        }
    

       





    }
)


//all-clear feature

allClear.addEventListener(
    "click",

   function(){
       
       screen.innerHTML = "";
   }
)




