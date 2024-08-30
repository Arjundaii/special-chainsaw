
function rollDice() {

    const numDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const images = [];

    for (let i = 0; i < numDice; i++) {
        const random = Math.floor(Math.random() * 6) + 1;
        values.push(random);
        images.push(`<img src = "Dice-Images/${random}.png" alt ="Dice ${random}">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImage.innerHTML = images.join(' ');
}