const display = document.querySelector('.display-screen');

document
    .querySelector(".parent")
    .addEventListener("click", function (event) {
        const target = event.target;
        if (target.matches("button")) {
            if (target.textContent === "=") {
                try {
                    display.innerHTML = eval(display.innerHTML);
                } catch (error) {
                    display.innerHTML = "Error";
                }
            } else if (target.textContent === "C") {
                display.innerHTML = 0;
            } else if (target.textContent === "←") {
                display.innerHTML = display.innerHTML.slice(0, -1);
            } else {
                if (display.innerHTML === "0") {
                    display.innerHTML = '';
                }
                if (target.textContent === "÷") {
                    display.innerHTML += "/";
                } else if (target.textContent === "x") {
                    display.innerHTML += "*";
                } else {
                    display.innerHTML += target.textContent;
                }
            }
        }
    });