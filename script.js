// local reviews data
const reviews = [
    {
        id: 1,
        name: "Sunita",
        job: "Baldev wife",
        img: "https://randomuser.me/api/portraits/women/94.jpg",
        text: "Outstanding fuck experience! The baldev is intuitive and the di** is beautifully organized. This site sets a high standard for modern baby design."
    },
    {
        id: 2,
        name: "Michael Chen",
        job: "Chapri",
        img: "https://randomuser.me/api/portraits/men/2.jpg",
        text: "Outstanding tik-tok experience! The interface is intuitive and the layout is beautifully organized. This site sets a high standard for modern web design."
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        job: "Naukar",
        img: "https://randomuser.me/api/portraits/women/8.jpg",
        text: "Impressive attention to detail and excellent performance. The site loads quickly even on mobile devices. Great work on creating such a seamless experience!"
    },
    {
        id: 4,
        name: "Johny",
        job: "Plumber",
        img: "https://randomuser.me/api/portraits/men/75.jpg",
        text: "Fantastic work! The design is modern, the content is well-structured, and the overall experience is smooth. This is exactly what a professional website should be."
    }
];

// select items
const pfpimg = document.getElementById("pfpimg");
const author = document.getElementById("author");
// job paragraph currently has id="work" in index.html
const job = document.getElementById("work");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prevbtn");
const nextBtn = document.querySelector(".nextbtn");

// set starting item
let currentItem = 0;

// load initial item when DOM is ready
window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
});

// show person based on current index
function showPerson(index) {
    const person = reviews[index];
    pfpimg.src = person.img;
    author.textContent = person.name;
    job.textContent = person.job;
    info.textContent = person.text;
}

// show next person
nextBtn.addEventListener("click", () => {
    currentItem = (currentItem + 1) % reviews.length;
    showPerson(currentItem);
});

// show previous person
prevBtn.addEventListener("click", () => {
    currentItem = (currentItem - 1 + reviews.length) % reviews.length;
    showPerson(currentItem);
});
