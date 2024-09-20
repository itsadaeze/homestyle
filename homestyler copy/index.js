//NAVBAR
let showMenu = false;
let isXIcon = false;

function toggleMenu() {
    showMenu = !showMenu;
    isXIcon = !isXIcon;

    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (showMenu) {
        menu.classList.add('show');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        menu.classList.remove('show');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

function closeMenu() {
    showMenu = false;
    isXIcon = false;

    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    menu.classList.remove('show');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}



//SCROLL


const cardsData = [
    { image: "/images/home/scroll1.jpg" },
    { image: "/images/home/scroll8.jpg" },
    { image: "/images/home/scroll1.jpg" },
    { image: "/images/home/scroll8.jpg" },
    { image: "/images/home/scroll1.jpg" },
    { image: "/images/home/scroll8.jpg" },
    { image: "/images/home/scroll7.jpg" },
];

let currentIndex = 0;
let cardsPerPage = 4; // Default for desktop

function updateCardsPerPage() {
    if (window.innerWidth <= 768) {
        cardsPerPage = 1; // Mobile
    } else if (window.innerWidth <= 1024) {
        cardsPerPage = 2; // Tablet
    } else {
        cardsPerPage = 4; // Desktop
    }
}

function renderCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; 

    const start = currentIndex;
    const end = Math.min(currentIndex + cardsPerPage, cardsData.length);

    for (let i = start; i < end; i++) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'scrollcard';
        
        const img = document.createElement('img');
        img.src = cardsData[i].image;
        img.alt = 'guidesimages';

        cardDiv.appendChild(img);
        cardContainer.appendChild(cardDiv);
    }
}

function handleArrowClick(direction) {
    if (direction === 'left') {
        currentIndex = Math.max(0, currentIndex - cardsPerPage);
    } else if (direction === 'right') {
        currentIndex = Math.min(cardsData.length - cardsPerPage, currentIndex + cardsPerPage);
    }
    renderCards();
}

// Initial setup
updateCardsPerPage();
renderCards();

// Listen for window resize to update cards per page
window.addEventListener('resize', () => {
    updateCardsPerPage();
    renderCards();
});


//PRODUCT
const productData = [
    {
        title: "Bedroom design",
        description: "well designed bedroom",
        image: "/images/home/bedroom2.jpeg"
    },
    {
        title: "Kitchen design",
        description: "well designed kitchen ",
        image: "/images/home/kitchen.jpeg" 
    },
    {
        title: "Living room design",
        description: "well designed living room",
        image: "/images/home/livingroom1.png"
    },
    {
        title: "Kitchen design",
        description: "well designed kitchen ",
        image: "/images/home/scroll8.jpg"
    },
    {
        title: "Bedroom design",
        description: "well designed bedroom",
        image: "/images/home/beadroom3.jpeg"
    },
    {
        title: "Living room design",
        description: "well designed living room",
        image: "/images/home/livingroom2.jpeg"
    },
  
];

const container = document.querySelector('.producthome-container');

productData.map((card) => {
    const cardHTML = `
        <div class="productcard">
            <img src="${card.image}" alt="${card.title}">
            <h2>${card.title}</h2>
            <p>${card.description}</p>
        </div>
    `;
    container.innerHTML += cardHTML;
});


const faqData = [
    {
        question: "What we do?",
        answer: "This is a website for interior designs"
    },
    {
        question: "What we do?",
        answer: "This is a website for interior designs"
    },
    {
        question: "What we do?",
        answer: "This is a website for interior designs"
    },
    {
        question: "What we do?",
        answer: "This is a website for interior designs"
    }
];

// Render FAQ items using map()
const faqAccordion = document.getElementById("faq-accordion");
faqData.map((item, index) => {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";

    const faqQuestion = document.createElement("div");
    faqQuestion.className = "faq-question";

    const questionText = document.createTextNode(item.question);
    faqQuestion.appendChild(questionText);

    const plusMinus = document.createElement("span");
    plusMinus.className = "plus-minus";
    plusMinus.textContent = "+";
    faqQuestion.appendChild(plusMinus);

    faqQuestion.onclick = () => {
        // Hide all answers
        const answers = faqAccordion.querySelectorAll(".faq-answer");
        answers.forEach((answer) => answer.classList.remove("show"));

        // Update plus-minus signs
        const plusMinuses = faqAccordion.querySelectorAll(".plus-minus");
        plusMinuses.forEach((pm) => pm.textContent = "+");

        // Show selected answer
        const answer = faqItem.querySelector(".faq-answer");
        answer.classList.add("show");
        plusMinus.textContent = "-";
    };

    const faqAnswer = document.createElement("div");
    faqAnswer.className = "faq-answer";
    faqAnswer.textContent = item.answer;

    faqItem.appendChild(faqQuestion);
    faqItem.appendChild(faqAnswer);
    faqAccordion.appendChild(faqItem);
});


//TESTIMONY
const testimonycardsData = [
    {
        title: "I've been patnering with homestyler lately and the",
        description: "Literally the only platform i make use of",
        user: "Eugene Fedorenko",
        imageurl: "avatar.svg"
    },
    {
        title: " Homestyler have been amazing",
        description: "Literally the only platform i make use of",
        user: "Eugene Fedorenko",
        imageurl: "avatar.svg"
    },
    {
        title: "I've been patnering with homestyler lately and the",
        description: "Literally the only platform i make use of",
        user: "Eugene Fedorenko",
        imageurl: "avatar.svg"
    },
    // Add more data here...
];

const testimonialItems = document.getElementById("testimonial-items");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
let currenttestimonyIndex = 0;
const testimonyPerPage = 1;

// Render testimonial items
testimonycardsData.forEach((card, index) => {
    const testimonialItem = document.createElement("div");
    testimonialItem.className = "testimonial-item";

    const testimonialText = document.createElement("h2");
    testimonialText.innerHTML = card.title + " <span style='color: #d370f1;'>good qaulity</span>";
    testimonialItem.appendChild(testimonialText);

    const testimonialDescription = document.createElement("p");
    testimonialDescription.textContent = card.description;
    testimonialItem.appendChild(testimonialDescription);

    const userInfo = document.createElement("div");
    userInfo.className = "user-info";

    const userImage = document.createElement("img");
    userImage.src = card.imageurl;
    userInfo.appendChild(userImage);

    const userName = document.createElement("p");
    userName.textContent = card.user;
    userInfo.appendChild(userName);

    testimonialItem.appendChild(userInfo);

    testimonialItems.appendChild(testimonialItem);
});

// Event listeners for arrow buttons
arrowLeft.addEventListener("click", () => {
    currenttestimonyIndex = Math.max(currenttestimonyIndex - 1, 0);
    updateTestimonials();
});

arrowRight.addEventListener("click", () => {
    currenttestimonyIndex = Math.min(currenttestimonyIndex + 1, testimonycardsData.length - testimonyPerPage);
    updateTestimonials();
});

// Update testimonials based on current index
function updateTestimonials() {
    const testimonialItemsArray = Array.from(testimonialItems.children);
    testimonialItemsArray.forEach((item, index) => {
        item.style.display = index >= currenttestimonyIndex && index < currenttestimonyIndex + testimonyPerPage ? "block" : "none";
    });
}

// Initialize testimonial display
updateTestimonials();


// Products section
// Select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// Define the filtercards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Iterate over each filterable cards
    filterableCards.forEach(card => {
        // Add "hide" class to hide the card initially
        card.classList.add("hide")
        // Check if the card matches the slected filter or "all" is selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide")
        }
    });
};

// Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards))
