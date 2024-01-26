let sideA, sideB, sideC;
let submitButton = document.getElementById("submitButton");

submitButton.onclick = function(){
    sideA = Number(document.getElementById("sideA").value);
    sideB = Number(document.getElementById("sideB").value);
    sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    document.getElementById("sideC").innerHTML = "Side C: " + sideC; 
};
