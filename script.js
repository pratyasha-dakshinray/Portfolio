document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    const backToTop = document.getElementById("backToTop");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });

    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    
    const profilePic = document.querySelector(".profile-pic");
    if (profilePic) {
        profilePic.style.width = "150px";
        profilePic.style.height = "150px";
        profilePic.style.borderRadius = "50%";
        profilePic.style.border = "5px solid white";
        profilePic.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
        profilePic.style.objectFit = "cover";
    }
});
