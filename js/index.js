
let uncomfortableness = 0

function uncomfy(number) {
 uncomfortableness = uncomfortableness + number;
 document.getElementById("noclick").innerHTML = stardust.toFixed(1);
}

document.getElementById("uncomfycounter").innerHTML = uncomfortableness; 

window.setInterval(function(){
    document.getElementById("uncomfycounter").innerHTML = uncomfortableness;    
    }, 1000);