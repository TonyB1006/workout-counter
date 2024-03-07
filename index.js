let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let resetEl = document.getElementById("count-el");
let count = 0;
let set = 0;

function add() {
    count += 1;
    countEl.textContent = count;
}

function reset() {
    count = 0;
    countEl.textContent = count;
}

function save() {
    set += 1;
    let countStr = "Set " + set + ": " + count + " reps";
    saveEl.innerHTML += "<br>" + countStr;
    countEl.textContent = 0
    count = 0
}

function removeData() {
    saveEl.innerHTML = "";
    saveEl.textContent = "Previous Sets:"
    set = 0;
}



