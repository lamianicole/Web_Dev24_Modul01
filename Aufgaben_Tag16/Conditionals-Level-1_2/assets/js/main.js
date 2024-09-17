function weather(){
    const weatherQuality = parseInt(document.querySelector("#degrees").value);

    const result = document.querySelector("p");

    // Code springt weiter, bis passende Zahl angesprochen wird, von oben nach unten beginnend bei 8 und kleiner werdend
    if (weatherQuality >= 8) {
        result.innerText = "Wetter ist super"

    }else if (weatherQuality >= 6){
        result.innerText = "Wetter ist gut"
        
    }else if (weatherQuality >= 3){
    result.innerText = "Wetter ist okay"

    }else if (weatherQuality >= 0){
    result.innerText = "Wetter ist schlecht"
    }
}
