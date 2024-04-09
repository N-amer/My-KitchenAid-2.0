const input = document.getElementById("invoer");
const startUnit = document.getElementById("startEenheid");
const convertUnit = document.getElementById("convertEenheid");
const h3 = document.querySelector("h3");

const units = {
    ml: 0,
    cl: 1,
    dl: 2,
    l: 3,
};

function convertFunc() {
    const start = units[startUnit.value];
    const convert = units[convertUnit.value];
    const inputValue = parseFloat(input.value);

    if (start === convert) {
        h3.innerHTML = inputValue;
    } else if (start < convert) {
        h3.innerHTML = inputValue / 10 ** (convert - start);
    } else {
        h3.innerHTML = inputValue * 10 ** (start - convert);
    }
}

document.addEventListener("keydown", event => {
    switch (event.code) {
        case "ArrowUp":
            input.value = parseFloat(input.value) + 10;
            break;
        case "ArrowDown":
            input.value = parseFloat(input.value) - 10;
            break;
        case "ArrowRight":
            input.value = parseFloat(input.value) + 1;
            break;
        case "ArrowLeft":
            input.value = parseFloat(input.value) - 1;
            break;
        case "KeyQ":
            startUnit.value = "ml";
            break;
        case "KeyW":
            startUnit.value = "cl";
            break;
        case "KeyE":
            startUnit.value = "dl";
            break;
        case "KeyR":
            startUnit.value = "l";
            break;
        case "KeyA":
            convertUnit.value = "ml";
            break;
        case "KeyS":
            convertUnit.value = "cl";
            break;
        case "KeyD":
            convertUnit.value = "dl";
            break;
        case "KeyF":
            convertUnit.value = "l";
            break;
        default:
            break;
    }
    convertFunc();
});

startUnit.addEventListener("change", convertFunc);
convertUnit.addEventListener("change", convertFunc);
input.addEventListener("input", convertFunc);
