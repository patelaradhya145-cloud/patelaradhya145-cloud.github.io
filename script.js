```javascript
// Welcome message in console
console.log("Welcome to Aradhya Patel's Portfolio!");

// Smooth scrolling for navigation links
const links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const section = document.querySelector(
            link.getAttribute("href")
        );

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Contact button message
const contactButton = document.querySelector(".btn");

contactButton.addEventListener("click", function() {
    console.log("Thank you for visiting my portfolio!");
});
```
