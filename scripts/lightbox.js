document.addEventListener("DOMContentLoaded",() => {
    const images = document.querySelectorAll(".lightbox img");
    const overlay = document.createElement("div");
    overlay.classList.add("lightbox-overlay");
    document.body.appendChild(overlay);

    images.forEach((img) => {
        img.addEventListener("click", () => {
            const enlargedImg = document.createElement("img");
            enlargedImg.src = img.src;
            overlay.innerHTML = "";
            overlay.appendChild(enlargedImg);
            overlay.classList.add("active");
        });
    });

    overlay.addEventListener("click", () => {
        overlay.classList.remove("active");
    });
});