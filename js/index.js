
let uncomfortableness = 0

function uncomfy(number) {
 uncomfortableness = uncomfortableness + number;
 document.getElementById("uncomfycounter").innerHTML = uncomfortableness; 
}

window.setInterval(function(){
    document.getElementById("uncomfycounter").innerHTML = uncomfortableness;    
    }, 1000);