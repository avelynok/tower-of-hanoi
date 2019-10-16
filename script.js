let tower1 = document.getElementById("tower1");
let tower2 = document.getElementById("tower2");
let tower3 = document.getElementById("tower3");

let pickUpMode = "Pickup";
let holdDisk;

let pickUpDisk = function (pickUpDisk) {
    let disk = pickUpDisk.childElementCount;
    if (disk !== 0) {
        holdDisk = pickUpDisk.lastElementChild;
        pickUpMode = "drop";
    }
};

let pickedUpDisk = function (event) {
    if (pickUpMode === "Pickup") {
        pickUpDisk(event.currentTarget);
    } else if (pickUpMode === "drop") {
        dropedDisk(event.currentTarget);
    }
};
let dropedDisk = function (dropDisk) {
    let lastDisk = dropDisk.lastElementChild;
    if (!lastDisk) {
        dropDisk.appendChild(holdDisk);
        pickUpMode = "Pickup";
    } else {
        let currentPickedDiskWidth = lastDisk.clientWidth;
        let lastPickedDiskWidth = holdDisk.clientWidth;
        if (currentPickedDiskWidth <= lastPickedDiskWidth) {
            alert("You can't put a disc on top of a smaller disk");
            pickUpMode = "Pickup";
        } else {
            dropDisk.appendChild(holdDisk);
            pickUpMode = "Pickup";
        }
    }
    win();
};

let win = function () {
    if (tower1.childElementCount === 0 && tower3.childElementCount === 4) {
        let node = document.getElementById("message");
        let resultnode = document.createTextNode(
            "Congratulation Genius, You beat the game!"
        );
        node.appendChild(resultnode);
    }
};
let towerEventListener = function () {
    tower1.addEventListener("click", pickedUpDisk);
    tower2.addEventListener("click", pickedUpDisk);
    tower3.addEventListener("click", pickedUpDisk);
};
towerEventListener();

var button = document.getElementById("count"),
    count = 0;
button.onclick = function () {
    count += 1;
    button.innerHTML = count;
};

function reset() {
    window.location.reload();
}