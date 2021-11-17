const pictureHover = document.querySelector("#picture");
const figcaption = document.querySelector("#description");

pictureHover.addEventListener("click", event => {

    if (figcaption.style.display === "none") {
        figcaption.style.display = "block";
    } else {
        figcaption.style.display = "none";
    }
});