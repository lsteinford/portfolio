const cyclopsContainer = document.querySelector(".cyclops-container");
const cyclopsEye = document.querySelector(".cyclops-eye");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (scrollPosition + viewportHeight >= scrollHeight) {
        cyclopsContainer.classList.add("cyclops-scrolled");
    } else {
        cyclopsContainer.classList.remove("cyclops-scrolled");
    }
});

document.addEventListener("mousemove", (e) => {
    const cyclopsEyeRect = cyclopsEye.getBoundingClientRect();

    const cyclopsEyeCenterX = cyclopsEyeRect.left + cyclopsEyeRect.width / 2;
    const cyclopsEyeCenterY = cyclopsEyeRect.top + cyclopsEyeRect.height / 2;

    const deltaX = e.clientX - cyclopsEyeCenterX;
    const deltaY = e.clientY - cyclopsEyeCenterY;

    const maxDistance = 6;
    const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), maxDistance);

    const angle = Math.atan2(deltaY, deltaX);
    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;

    cyclopsEye.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
});