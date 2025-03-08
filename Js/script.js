const ul = document.getElementById("todoList");
const input = document.getElementById("item");
const addButton = document.getElementById("addItem");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("searchBtn");
const darkModeToggle = document.getElementById("darkModeToggle");

const searchCard = document.getElementById("searchCard");
const searchImage = document.getElementById("searchImage");
const searchName = document.getElementById("searchName");
const searchDesc = document.getElementById("searchDesc");

// Hamburger Menu Elements
const menuIcon = document.getElementById("menuIcon");
const menuSidebar = document.getElementById("menuSidebar");
const closeBtn = document.querySelector(".close-btn");

// Font Size Controls
const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");
const resetFont = document.getElementById("resetFont");

// Current font size (percentage of base size)
let currentFontSize = 100;

// Array of searchable names
const people = [
    { name: "boss", image: "/to-do-list-/assets/afiya.jpeg", desc: "A true leader and the gangstar!" },
    { name: "afiya", image: "/to-do-list-/assets/afia.jpeg", desc: "A beautiful soul with a kind heart!" },
    { name: "zihad", image: "/to-do-list-/assets/zihad.jpeg", desc: "Ami osho hai amake keo adopt koro!" },
    { name: "arbind", image: "/to-do-list-/assets/arbind.jpeg", desc: "mai garib hu. koi bhi kam ho bas call lagao 100 rupiya mai sab kar dungga khana pakana bartan dhona !" },
    { name: "piyush", image: "/to-do-list-/assets/piyush .jpeg", desc: "mai kho geya hu muje koi ghar le jao !" },
    { name: "shihab", image: "/to-do-list-/assets/shihab.jpeg", desc: "ami akta valo shale keo pem korta chaile call dao !" },
    { name: "afiya malek", image: "/to-do-list-/assets/afia.jpeg", desc: "A beautiful soul with a kind heart!" },
    { name: "aafiya", image: "/to-do-list-/assets/aafiya.jpeg", desc: "A beautiful soul with a kind heart!" },
];

// Add Item to To-Do List
addButton.addEventListener("click", () => {
    let currentVal = input.value.trim();
    if (currentVal === "") return;
    input.value = "";

    let li = document.createElement("li");
    let span = document.createElement("span");
    let delButton = document.createElement("button");

    span.textContent = currentVal;
    delButton.textContent = "Delete";
    delButton.addEventListener("click", () => {
        ul.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(delButton);
    ul.appendChild(li);
});

// Search Function
searchButton.addEventListener("click", () => {
    let query = searchInput.value.trim().toLowerCase();
    searchCard.style.display = "none";

    let person = people.find(p => p.name.toLowerCase() === query);
    
    if (person) {
        showSearchCard(person.image, person.name, person.desc);
    }
});

function showSearchCard(imgSrc, name, desc) {
    searchImage.src = imgSrc;
    searchName.textContent = name;
    searchDesc.textContent = desc;
    searchCard.style.display = "block";
}

// Dark Mode Toggle
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Hamburger Menu Toggle
menuIcon.addEventListener("click", () => {
    menuSidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menuSidebar.classList.remove("active");
});

// Font Size Functions
function updateFontSize() {
    document.documentElement.style.setProperty('--font-size-base', `${16 * (currentFontSize/100)}px`);
}

increaseFont.addEventListener("click", () => {
    if (currentFontSize < 150) {
        currentFontSize += 10;
        updateFontSize();
    }
});

decreaseFont.addEventListener("click", () => {
    if (currentFontSize > 70) {
        currentFontSize -= 10;
        updateFontSize();
    }
});

resetFont.addEventListener("click", () => {
    currentFontSize = 100;
    updateFontSize();
});
document.addEventListener("DOMContentLoaded", function () {
    const searchImage = document.getElementById("searchImage");

    searchImage.addEventListener("click", function () {
        searchImage.classList.toggle("active");
    });
});
// Search Function
searchButton.addEventListener("click", () => {
    let query = searchInput.value.trim().toLowerCase();
    
    // Hide search card when input is empty
    if (query === "") {
        searchCard.style.display = "none";
        return;
    }

    let person = people.find(p => p.name.toLowerCase() === query);
    
    if (person) {
        showSearchCard(person.image, person.name, person.desc);
    } else {
        searchCard.style.display = "none"; // Hide card if no match
    }
});

// Also hide search card when input is cleared manually
searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() === "") {
        searchCard.style.display = "none";
    }
});
// Open Sidebar
menuIcon.addEventListener("click", () => {
    menuSidebar.classList.add("active");
});

// Close Sidebar with "X" Button
closeBtn.addEventListener("click", () => {
    menuSidebar.classList.remove("active");
});

// Close Sidebar When Clicking Outside
document.addEventListener("click", (event) => {
    if (!menuSidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        menuSidebar.classList.remove("active");
    }
});
