const btn = document.querySelector(".active");
let number = 1;
let activeNumber = 1;
const addElement = function () {

    const div = document.createElement("div");
    div.textContent = number;

    if (activeNumber == 5) {
        activeNumber = 0;
        div.classList.add("circle")
    }

    document.body.appendChild(div);
    number++; //incrementation
    activeNumber++;

}

btn.addEventListener("click", addElement)