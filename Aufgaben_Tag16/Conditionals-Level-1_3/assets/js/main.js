function shisha (){

    let ageToSmoke = document.getElementById("ageInput").value;

    let ageYesSmoke = "Ja, du kannst Shisha rauchen";
    
    let ageNoSmoke = "Nein, du darfst noch nicht Shisha rauchen";


    // In den Klammern passiert das, was ich checken will
    if (ageToSmoke >= 18){
        document.querySelector("p").innerText = ageYesSmoke;
    // jetzt noch sagen, dass was reingeschrieben wird
    }else {
        document.querySelector("p").innerText = ageNoSmoke;
}
}
