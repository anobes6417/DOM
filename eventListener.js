//Add an Event Listener
function myfunction(){
    alert ('Hello Sabboonaa')
}
document.getElementById("btn").addEventListener("click", myfunction)

//Add multiple Event handler 
var x=document.getElementById("btn")
x.addEventListener("click", myfunctionone)
x.addEventListener("click", myfunctiontwo)

function myfunctionone(){
    alert("God is good")
}
function myfunctiontwo(){
    alert("God is Love")
}

//You can add events of different types to the same element:
var x=document.getElementById("BTN")
var y=document.getElementById("demo")
x.addEventListener("mouseover",myfirst)
x.addEventListener("click",mysecond)
x.addEventListener("mouseout",mythird)
function myfirst(){
    y.innerHTML+="moveover!<br>"
}
function mysecond(){
    y.innerHTML+="Click!<br>"
}
function mythird(){
    y.innerHTML+="moveout!<br>"
}

//Add an event handler to window object
window.addEventListener("resize",function(){
    y.innerHTML=Math.random()
})

//Bubbling and capturing
document.getElementById("myDiv1").addEventListener(
    "click", function(){
        alert("you clicked orange")
        },false
)
document.getElementById("myDiv2").addEventListener(
    "click", function(){
        alert("you clicked orange")
    },true
)
document.getElementById("myP1").addEventListener(
    "click", function(){
        alert("you clicked white")  
    },false
)
document.getElementById("myP2").addEventListener(
    "click", function(){
        alert("you clicked white")        
    },true
)       

//Mouse Remove Event Handler
document.getElementById("myDiv").addEventListener(
    "mousemove" , myfunction
) 

function myfunction(){
    document.getElementById("myDiv").innerHTML=Math.random()
}
function removeHandler(){
    document.getElementById("myDiv").removeEventListener(
        "mousemove" , myfunction
    ) 
    }