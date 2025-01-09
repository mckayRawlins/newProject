let businessname = 0 
let businessjob = 0
let businessdescription = 0
let businesspicture = 0 


function business() {
const bussinessnames = ["Fitzgerald ManBat", "Hamlin Chuck", "William Esquire","Juckson", "D'marcus Williums", "Tyroil Smoochie-wallace", "D'squarius Green Jr.", "Quandale Dingle", "Walter White"]

let namegen = Math.floor(Math.random() * bussinessnames.length)

let name = bussinessnames[namegen]

document.getElementById("name").innerHTML = name;
}


