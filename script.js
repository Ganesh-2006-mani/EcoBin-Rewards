```javascript
// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// DEMO ECOPOINTS BUTTON

const demoRewardBtn = document.getElementById("demoRewardBtn");
const pointsDisplay = document.getElementById("points");

let points = 1250;

demoRewardBtn.addEventListener("click", () => {

    points += 10;

    pointsDisplay.textContent = points.toLocaleString();

    demoRewardBtn.textContent = "✓ +10 EcoPoints Added";

    setTimeout(() => {
        demoRewardBtn.textContent = "+ Add Demo EcoPoints";
    }, 2000);

});
```
