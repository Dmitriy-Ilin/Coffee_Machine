let input = require('sync-input');

let start = {
  water: 400,
  milk: 540,
  beans: 120,
  cups: 9,
  money: 550,
    sugar: 200
}

writeAction();

function writeAction() {
    console.log("Write action (buy, fill, take, remaining, exit): ");
    switch (input()) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "remaining":
            remaining();
            break;
        case "exit":
            return;
    }
}

function remaining() {
    console.log(`The coffee machine has:
${start.water} ml of water
${start.milk} ml of milk
${start.beans} g of coffee beans
${start.cups} disposable cups
$${start.money} of money`)
    writeAction();
}

function buy() {
    console.log(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: `);
    switch (input()) {
        case "1":
            if (start.water < 250) {
                console.log("Sorry, not enough water");
            } else if (start.beans < 16) {
                console.log("Sorry, not enough beans");
            } else if (start.cups < 1) {
                console.log("Sorry, not enough cups");
            } else if (start.sugar < 20) {
                console.log("Sorry, not enough sugar");
            }
            else {
                start.water -= 250;
                start.beans -= 16;
                start.cups -= 1;
                start.money += 4;
                start.sugar -= 20;
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        case "2":
            if (start.water < 350) {
                console.log("Sorry, not enough water");
            } else if (start.milk < 75) {
                console.log("Sorry, not enough milk");
            } else if (start.beans < 20) {
                console.log("Sorry, not enough beans");
            } else if (start.cups < 1) {
                console.log("Sorry, not enough cups");
            } else {
                start.water -= 350;
                start.milk -= 75;
                start.beans -= 20;
                start.cups -= 1;
                start.money += 7;
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        case "3":
            if (start.water < 200) {
                console.log("Sorry, not enough water");
            } else if (start.milk < 100) {
                console.log("Sorry, not enough milk");
            } else if (start.beans < 12) {
                console.log("Sorry, not enough beans");
            } else if (start.cups < 1) {
                console.log("Sorry, not enough cups");
            } else {
                start.water -= 200;
                start.milk -= 100;
                start.beans -= 12;
                start.cups -= 1;
                start.money += 6;
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        case "back":
            break;
    }
    writeAction();
}

function fill() {
    console.log(`Write how many ml of water you want to add: `);
    let inputWater = Number(input());
    start.water += inputWater;
    console.log(`Write how many ml of milk you want to add: `);
    let inputMilk = Number(input());
    start.milk += inputMilk;
    console.log(`Write how many grams of coffee beans you want to add: `);
    let inputBeans = Number(input());
    start.beans += inputBeans;
    console.log(`Write how many disposable cups of coffee you want to add: `);
    let inputCups = Number(input());
    start.cups += inputCups;
    writeAction();
}

function take() {
    console.log(`I gave you $${start.money}`);
    start.money -= start.money;
    writeAction();
}