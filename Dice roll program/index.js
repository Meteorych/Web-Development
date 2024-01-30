let inputDices = document.getElementById("inputDicesNum");
let result = document.getElementById("result");
let imagesResult = document.getElementById("images");
let button = document.getElementById("submitButton");

function rollDice()
{
    const numOfDices = Number(inputDices.value);
    const values = [];
    const images = [];

    for (i=0; i < numOfDices; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src = "Images/Dice-${value}.png"</img>`);
    }
    
    result.textContent = `Dice's result: ${values.join(", ")}`;
    imagesResult.innerHTML = images.join(" ");
   
    
}