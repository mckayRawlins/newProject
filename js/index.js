
function business() {
const bussinessnames = ["Fitzgerald ManBat", "Hamlin Chuck", "William Esquire","T'Jared Juckson", "D'marcus Williums", "Tyroil Smoochie-wallace", "D'squarius Green Jr.", "Quandale Dingle", "Walter White"]

let namegen = Math.floor(Math.random() * bussinessnames.length)

let name = bussinessnames[namegen]

document.getElementById("name").innerHTML = name;

const bussinessjob = [{ job: "Crypto Scammer", money: 150  },
   { job: "Web Developer" , money: 25 },
    {job: "Professional Jerk", money: 10  },
    {job:"Lawyer", money:30 },
    {job: "Tax Guy", money: 50 },
    {job: "Beach", money: 1 },
    {job: "Manager", money: 75},
   {job: "CEO", money:100 },
   { job: "Bezos", money:250}]

let jobgen = Math.floor(Math.random() * bussinessjob.length)

let job = bussinessjob.job[jobgen]

let money = bussinessjob.money[jobgen];

document.getElementById("money") = money;

document.getElementById("job").innerHTML = job;

const bussinesshobbies = ["Loves Long walks by the office", "Loves looking at himself in the mirror", "Loves too lift his gold bars to get gains", "Loves Mangos", "Loves drinking (family friendly) Alchohol", "Loves making indie horror games", "Loves Starwars but like more than he should", "He thinks he could be the next president", "Can't make eggs", "He is a little stinky"]

let hobbygen = Math.floor(Math.random() * bussinesshobbies.length)

let hobbies = bussinesshobbies[hobbygen]


document.getElementById("hobbies").innerHTML = hobbies;

const bussinesspictures = ["https://i.pinimg.com/736x/64/4c/26/644c268d39e55223bc8e4605a19c2679.jpg",
"https://i.pinimg.com/736x/c6/86/12/c68612646261196f9f51effbddf667f3.jpg", 
"https://i.pinimg.com/736x/44/33/ff/4433ffcdd07abf0c4a39e412241b4223.jpg",
"https://i.pinimg.com/736x/cf/b0/2b/cfb02b1b9e7e89410d70263d69920cb8.jpg", 
 "https://i.pinimg.com/736x/d7/4f/f7/d74ff7ddecdac94f57c6d908c8f75411.jpg", 
"https://i.pinimg.com/736x/a3/f5/ca/a3f5ca54f089c09b2e85b7e40500aecd.jpg", 
 "https://i.pinimg.com/736x/64/b9/1b/64b91bb83db91c2cfe8a412dbf81e42d.jpg",
 "https://i.pinimg.com/736x/57/f6/7d/57f67d43f04f039a95fb9a9b42d4318d.jpg"]

let picturegen = Math.floor(Math.random() * bussinesspictures.length)

let picture = bussinesspictures[picturegen]

document.getElementById("portrait").src = picture;



}

let xp = 0;

let inventory = ["stick"];
const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.getElementById("xp") = xp;
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },

{
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },

{
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;"
  },
  {
    name: "win",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
  }
];
// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}
function goTown() {
  update(locations[0]);
}
function goStore() {
  update(locations[1]);
}
function goCave() {
  update(locations[2]);
}
function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}
function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}
function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}
function fightSlime() {
  fighting = 0;
  goFight();
}
function fightBeast() {
  fighting = 1;
  goFight();
}
function fightDragon() {
  fighting = 2;
  goFight();
}
function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}
function lose() {
  update(locations[5]);
}
function winGame() {
  update(locations[6]);
}
function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}
function easterEgg() {
  update(locations[7]);
}
function pickTwo() {
  pick(2);
}
function pickEight() {
  pick(8);
}
function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}

window.setInterval(function(){  
    }, 1000);