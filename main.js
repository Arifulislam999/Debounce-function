let btn = document.querySelector("button");

function debounce(fn, deley) {
    let timeOutId;
    return function() {
        if (timeOutId) {
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(() => {
            fn();
        }, deley);
    };
}

btn.addEventListener(
    "click",
    debounce(() => {
        console.log("Clicked.");
    }, 500)
);