function doubleNumber() {
    const input = document.getElementById('numberInput').value;

    const doubled = parseInt(input) * 2;

    document.getElementById('result').innerHTML = doubled;
}

// Muss in Zeile 17 innerHTML oder innerText?