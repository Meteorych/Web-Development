let submitButton = document.getElementById("submitButton");

submitButton.onclick = () => {
    let checkProperty =  document.getElementById("myCheckBox");
    if(checkProperty.checked)
    {
        window.alert("You are subscribed!")
    }
    else 
    {
        window.alert("You are not subscribed!")
    }
};
