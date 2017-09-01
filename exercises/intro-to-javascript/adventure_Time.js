let stuff = null;
const name = prompt("What is you name ?");
console.log(`${name}, you wake up in a dungeon with no memory of how you got there!`);
console.log("Probably drank to much!")
const dungeonLook = prompt("Would you like to look aroung? Y/N");
if (dungeonLook.toUpperCase() === "Y") {
    console.log("You look around the dungeon is pretty gross. However you manage to find a Sword, a Rope, and some armour");
    stuff = 1;

} else {
    const SecChance = prompt("Really, are you sure you don't want to Look Around!");
    if (SecChance.toUpperCase() === "Y") {
        console.log(`Ok ${name}, be an idiot!`);
    } else {
        console.log("You look around the dungeon it is pretty gross. However you manage to find a Sword, a Rope, and some armour");
        stuff = 1;
    }
}
const leaveDungeon = prompt("Would you like to leave?")
if (leaveDungeon.toUpperCase() === "Y") {
    if (stuff === 1) {
        console.log("You exit out of the dungeon and find yourself outside of a dark and sinister Castle. Upon looking around you see off in the distance some places to travel. There is a Mountain, a Village, a Dragon, a Lake a Forrest, a castle where the King lives and finally there is the Dungeon you came from.");
        const place = prompt("Where would you like to go? Type: (M)outain, (V)illage, (D)ragon, (L)ake, (F)orrest, (K)ing, (G)o Back");
        //this is where the switch statment will go!
    } else {
        console.log("As you walk towards the door, because you didn't look around you trip on a sword and impale yourself! Who wishes they looked around now.");
    }
} else {
    console.log("Why wouldn't you leave a dungeon! YOU STARVE IN THE DUNGEON AND DIE!")
}