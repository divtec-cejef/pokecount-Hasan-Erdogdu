const sauvegardeEl = document.getElementById("sauvegarde-el");
const compteurEl = document.getElementById("compteur-el");
const capturerBtn = document.getElementById("capturer-btn");
const sauvegarderBtn = document.getElementById("sauvegarder-btn");
const resetBtn = document.getElementById("reset-btn");

capturerBtn.addEventListener("click", capturer);
sauvegarderBtn.addEventListener("click", sauvegarder);
resetBtn.addEventListener("click", reset);

let compteur = 0

window.addEventListener("load", () => {
    sauvegardeEl.innerHTML = localStorage.getItem("captures") || "";
});

function capturer() {
    compteur++
    compteurEl.textContent = compteur
    if (compteur < 5) {
        compteurEl.style.color = "green"
    } else if (compteur < 10) {
        compteurEl.style.color = "yellow"
    } else {
        compteurEl.style.color = "red"
    }
}

function sauvegarder() {
    let compteurStr = "<li>" + compteur + " Pokemons </li>"
    sauvegardeEl.innerHTML += compteurStr
    localStorage.setItem("captures", sauvegardeEl.innerHTML);
    compteur = 0
    compteurEl.textContent = compteur
    compteurEl.style.color = "black"
}

function reset() {
    sauvegardeEl.innerHTML = "";
    compteur = 0
    localStorage.removeItem("captures");
    compteurEl.textContent = "0";
    compteurEl.style.color = "black"
}