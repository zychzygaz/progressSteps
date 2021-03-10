const bar = document.getElementById("bar");
const steps = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > steps.length) {
        currentActive = steps.length;
    }
    console.log(currentActive);

    update();
});

prev.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }
    console.log(currentActive);

    update();
});

function update() {
    steps.forEach((step, idx) => {
        if (idx < currentActive) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
        switch (currentActive) {
            case 1:
                bar.style.width = 0 + "%";
                break;

            case 2:
                bar.style.width = 33 + "%";
                break;

            case 3:
                bar.style.width = 66 + "%";
                break;

            case 4:
                bar.style.width = 100 + "%";
                break;
        }
    });
    console.log(currentActive);
    if (currentActive == 1) {
        prev.disabled = true;
    } else if (currentActive === steps.length) {
        next.disabled = true;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }
}
console.log(currentActive);
