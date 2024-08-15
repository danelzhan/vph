const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((element) => observer.observe(element));

//scroll
var clickCount = 0;
function pageScroll() {
    if (clickCount < 2) {
        window.scrollBy(0,5);
        scrolldelay = setTimeout(pageScroll,1);
    } else if (clickCount == 2) {
        clickCount = 0;
    }
    document.onclick = function() {
        clickCount++;
    }
}

// buttons
const registerButton = document.getElementById('volunteer_button');
registerButton.addEventListener("click", function() {
    window.location.href = 'volunteer_form.html';
});

const donateButton = document.getElementById('donate_button');
registerButton.addEventListener("click", function() {
    console.log('donated');
    window.location.href = 'volunteer_form.html';
});