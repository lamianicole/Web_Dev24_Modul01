function ageCalculator(){

    const input = document.getElementById("ageInput").value;

    const ageCalculator = 2024 - parseInt(input);
    document.getElementById("result").innerText = ageCalculator;
}