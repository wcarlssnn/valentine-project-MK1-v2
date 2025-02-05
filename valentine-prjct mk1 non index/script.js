document.addEventListener("DOMContentLoaded", function () {
    let noButton = document.getElementById("no");
    let yesButton = document.getElementById("yes");

    noButton.addEventListener("mouseover", function () {
        let x = Math.random() * (window.innerWidth - noButton.clientWidth);
        let y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener("click", function () {
        alert("Yay! Aku senang kamu bilang Yes! ❤️");
    });
});
