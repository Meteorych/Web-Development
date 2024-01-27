const min = 0;
const max = 100;
const answer = Math.floor((Math.random() * max - min + 1) + min);

let attemps = 0;


while(true){
    let guessAnswer = window.prompt("Enter the number between 0 and 100:");
    if (guessAnswer == answer)
    {
        window.alert(`Hooray! Yo've guessed the number ${answer}! You've used ${attemps} attemps.`)
        break;
    }
    else if (isNaN(guessAnswer) || guessAnswer < min || guessAnswer > 100)
    {
        window.alert("Please, enter the valid number!");
        attemps++;
    }
    else
    {
        window.alert("Try again!");
        attemps++;
    }
}
