function play(str) {

    if (str === "q" || str === "Q") {
        document.getElementById('display').innerHTML = "Gong Gamelan"
    } else if (str === "w" || str === "W") {
        document.getElementById('display').innerHTML = "Metal Gong"
    } else if (str === "e" || str === "E") {
        document.getElementById('display').innerHTML = "Tom Strike"
    } else if (str === "a" || str === "A") {
        document.getElementById('display').innerHTML = "Tom Plastic Strike"
    } else if (str === "s" || str === "S") {
        document.getElementById('display').innerHTML = "Tibetan Hit"
    } else if (str === "d" || str === "D") {
        document.getElementById('display').innerHTML = "Bonang Gamelan Soft"
    } else if (str === "z" || str === "Z") {
        document.getElementById('display').innerHTML = "Gong Gamelan"
    } else if (str === "x" || str === "X") {
        document.getElementById('display').innerHTML = "Gamelan Hit"
    } else if (str === "c" || str === "C") {
        document.getElementById('display').innerHTML = "Tom Strike Mid"
    } 

    let audio = document.getElementById(str);
    audio.play();
}

window.document.onkeyup = function(event) { 
    let keystroke = event.key
    if (keystroke === "q" || keystroke === "Q") {
        play("Q")
    } else if (keystroke === "w" || keystroke === "W") {
        play("W")
    } else if (keystroke === "e" || keystroke === "E") {
        play("E")
    } else if (keystroke === "a" || keystroke === "A") {
        play("A")
    } else if (keystroke === "s" || keystroke === "S") {
        play("S")
    } else if (keystroke === "d" || keystroke === "D") {
        play("D")
    } else if (keystroke === "z" || keystroke === "Z") {
        play("Z")
    } else if (keystroke === "x" || keystroke === "X") {
        play("X")
    } else if (keystroke === "c" || keystroke === "C") {
        play("C")
    } 
    // console.log(event.key)
}