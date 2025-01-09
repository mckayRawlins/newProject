
function business() {
const bussinessnames = ["Fitzgerald ManBat", "Hamlin Chuck", "William Esquire","T'Jared Juckson", "D'marcus Williums", "Tyroil Smoochie-wallace", "D'squarius Green Jr.", "Quandale Dingle", "Walter White"]

let namegen = Math.floor(Math.random() * bussinessnames.length)

let name = bussinessnames[namegen]

document.getElementById("name").innerHTML = name;

const bussinessjob = ["Crypto Scammer" , "Web Developer", "Professional Jerk", "Lawyer", "Tax Guy", "Beach", "Manager", "CEO", "Bezos"]

let jobgen = Math.floor(Math.random() * bussinessnames.length)

let job = bussinessjob[jobgen]

document.getElementById("job").innerHTML = job;

const bussinesshobbies = ["Loves Long walks by the office", "Loves looking at himself in the mirror", "Loves too lift his gold bars to get gains", "Loves Mangos", "Loves drinking (family friendly) Alchohol", "Loves making indie horror games", "Loves Starwars but like more than he should", "He thinks he could be the next president", "Can't make eggs", "He is a little stinky"]

let hobbygen = Math.floor(Math.random() * bussinesshobbies.length)

let hobbies = bussinesshobbies[hobbygen]

document.getElementById("hobbies").innerHTML = hobbies;

const bussinesspictures = ["https://i.pinimg.com/736x/64/4c/26/644c268d39e55223bc8e4605a19c2679.jpg","https://i.pinimg.com/736x/c6/86/12/c68612646261196f9f51effbddf667f3.jpg", "https://i.pinimg.com/736x/44/33/ff/4433ffcdd07abf0c4a39e412241b4223.jpg","https://i.pinimg.com/736x/cf/b0/2b/cfb02b1b9e7e89410d70263d69920cb8.jpg", "https://i.pinimg.com/736x/d7/4f/f7/d74ff7ddecdac94f57c6d908c8f75411.jpg", "https://i.pinimg.com/736x/a3/f5/ca/a3f5ca54f089c09b2e85b7e40500aecd.jpg", "https://i.pinimg.com/736x/41/08/b6/4108b69195fcdd0ade5203bdeff3d0a7.jpg"]

let picturegen = Math.floor(Math.random() * bussinesspictures.length)

let picture = bussinesspictures[picturegen]

document.getElementById("portrait").src = picture;

}



