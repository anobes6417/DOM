//Animation
function mymotion(){
    var pos=0
    var elem=document.getElementById('container')
    var id=setInterval(frame,2)
    function frame(){
    if(pos==648){
        clearInterval(id)
    }
    else{
        pos++
        elem.style.top=pos+'px'
        elem.style.left=pos+'px'
    }
}
}

//Date Event
function displayDate(){
    document.getElementById('date').innerHTML=Date()
}

//Onload
function checkCoockie(){
    var text=""
    if(navigator.cookieEnabled==true){
        text='cookie is Enabled'}
    else{
        text='cookie is not Enabled'}
    document.getElementById('cookie').innerHTML=text
    }

//OnChange Event
function myfunction(){
    var x=document.getElementById('fname')
    x.value=x.value.toUpperCase()
}

//Mouse Over and Mouse Out Event
function mout(obj){
    obj.style.background='red'
    obj.innerHTML='mouse out'
}

function mover(obj){
    obj.style.background='gray'
    obj.innerHTML='mouse over'
}

//mouse down mouse up
function mup(obj){
    obj.style.background='yellow'
    obj.innerHTML='mouse up'
}

function mdown(obj){
    obj.style.background='black'
    obj.innerHTML='mouse down'
}