const body = document.body;
const burgerButton = document.querySelector(".burger-menu-button");
const burgerCrossButton = document.querySelector(".burger-menu__cross-button");
const burgerMenu = document.querySelector(".burger-menu");

burgerButton.onclick = () => {
    burgerMenu.classList.add("open");
    body.style.overflowY = "hidden";
}

burgerCrossButton.onclick = () => {
    burgerMenu.classList.remove("open");
    body.style.overflowY = "";
}

/* ================================================================== */

function moveElement() {
    const heroParent = document.querySelector(".hero__info");
    const heroImg = document.querySelector(".hero__inner>img");
    const heroAdvantages = document.querySelector(".hero__advantages-list");

    if (window.innerWidth < 1024) {
        heroParent.insertBefore(heroImg, heroAdvantages);
        heroParent.insertAdjacentElement("afterend", heroAdvantages);
    }
}

moveElement();

window.addEventListener('resize', moveElement);

/* ================================================================== */

const headerButton = document.querySelector(".services__calculate-header");
const bodyButton = document.querySelector(".services__calculate-cost-button");

headerButton.onclick = () => {
    headerButton.classList.toggle("open");
    bodyButton.classList.toggle("open");
}

/* ================================================================== */

document.addEventListener("click", (e) => {
    const servicesItem = e.target.closest(".services__item");
    const servicesHead = e.target.closest(".services__service-title");

    if (!servicesItem) return;

    if (!servicesItem.classList.contains("open")) {
        servicesItem.classList.add("open");
        return;
    }

    if (!servicesHead) return;

    servicesItem.classList.remove("open");
})

/* ================================================================== */

const slider = document.querySelector(".successes__list");
const slides = document.querySelectorAll(".successes__item");
const backButton = document.querySelector(".back-button");
const aheadButton = document.querySelector(".ahead-button");
const pages = document.querySelectorAll(".successes__num");

let counter = 0;
let turn = 0;
let ables = 0;

aheadButton.onclick = () => {
    if (slides.length < 4) return;

    if (counter == Math.floor(slides.length / 3)) return;

    turn -= 105;
    slider.style.transform = `translate(${turn}%)`;

    const activePage = document.querySelector(".successes__num.active");
    activePage.classList.remove("active");
    pages[counter + 1].classList.add("active");

    counter++;

    backButton.removeAttribute("disabled");

    if (counter == Math.floor(slides.length / 3))
        aheadButton.setAttribute("disabled", "");
}

backButton.onclick = () => {
    if (counter < 1) return;

    turn += 105;
    slider.style.transform = `translate(${turn}%)`;

    const activePage = document.querySelector(".successes__num.active");
    activePage.classList.remove("active");
    pages[counter - 1].classList.add("active");

    counter--;

    aheadButton.removeAttribute("disabled");

    if (counter == 0)
        backButton.setAttribute("disabled", "");
}

if (slides.length < 4) {
    backButton.setAttribute("disabled", "");
    aheadButton.setAttribute("disabled", "");
}

const reviewsSlider = document.querySelector(".reviews__list");
const reviewsSlides = document.querySelectorAll(".reviews__item");
const reviewsBackButton = document.querySelector(".reviews__arrow-button.back-button");
const reviewsAheadButton = document.querySelector(".reviews__arrow-button.ahead-button");
const reviewsPages = document.querySelectorAll(".reviews__num");

let reviewsCounter = 0;
let reviewsTurn = 0;
let reviewsAbles = 0;

reviewsAheadButton.onclick = () => {
    if (reviewsSlides.length < 4) return;

    if (reviewsCounter == Math.floor(reviewsSlides.length / 3)) return;

    reviewsTurn -= 105;
    reviewsSlider.style.transform = `translate(${reviewsTurn}%)`;

    const activePage = document.querySelector(".reviews__num.active");
    activePage.classList.remove("active");
    reviewsPages[reviewsCounter + 1].classList.add("active");

    reviewsCounter++;

    reviewsBackButton.removeAttribute("disabled");

    if (reviewsCounter == Math.floor(reviewsSlides.length / 3))
        reviewsAheadButton.setAttribute("disabled", "");
}

reviewsBackButton.onclick = () => {
    if (reviewsCounter < 1) return;

    reviewsTurn += 105;
    reviewsSlider.style.transform = `translate(${reviewsTurn}%)`;

    const activePage = document.querySelector(".reviews__num.active");
    activePage.classList.remove("active");
    reviewsPages[reviewsCounter - 1].classList.add("active");

    reviewsCounter--;

    reviewsAheadButton.removeAttribute("disabled");

    if (reviewsCounter == 0)
        reviewsBackButton.setAttribute("disabled", "");
}

if (reviewsSlides.length < 4) {
    reviewsBackButton.setAttribute("disabled", "");
    reviewsAheadButton.setAttribute("disabled", "");
}

document.addEventListener("click", (e) => {
    const faqItem = e.target.closest(".faq__item")
    if (!faqItem) return;

    faqItem.classList.toggle("full");
})

const upButton = document.querySelector("#up-button");

upButton.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};

const popUpFirst = document.querySelector("#first.pop-up");
const popUpSecond = document.querySelector("#second.pop-up");
const popUpCrossButton = document.querySelector(".pop-up__cross-button");
const secondPopUpCrossButton = document.querySelector("#second.pop-up .pop-up__cross-button");

const openPopUp = (button) => {
    switch (button.dataset.popUpStep) {
        case "1":
          popUpFirst.classList.add("open");
          break;

        case "2":
          popUpSecond.classList.add("open")
          break;
    }

    body.classList.add("closed");
};

const closePopUp = (popUp) => {
    popUp.classList.remove("open");
    body.classList.remove("closed");
}

document.addEventListener("click", (e) => {
    const popUpOpenButton = e.target.closest("[data-pop-up-step]");

    if (!popUpOpenButton) return;
    
    openPopUp(popUpOpenButton);    
})

document.addEventListener("click", (e) => {
    const crossButton = e.target.closest(".pop-up__cross-button");
    const popUp = e.target.closest(".pop-up");

    if (!crossButton || !popUp) return;
    
    closePopUp(popUp);    
})

// .document.addEventListener("click", (e) => {
//     const popUp = e.target.closest(".pop-up");
//     const popUpSubmitButton = e.target.closest(".pop-up__button");

//     if (!popUp) return;
//     if (!popUpSubmitButton) return;

    
// })

const firstPopUpSubmitButton = document.querySelector("#first.pop-up .pop-up__button");
const secondPopUpSubmitButton = document.querySelector("#second.pop-up .pop-up__button");
const successPopUp = document.querySelector(".success-pop-up");

firstPopUpSubmitButton.onclick = (event) => {
    const name = document.querySelector("#first .pop-up__form-name");
    const phone = document.querySelector("#first .pop-up__form-phone");

    if (name.value.trim() && phone.value.trim()) {
        name.style.borderBottom = "1px solid #d1d4d1";
        phone.style.borderBottom = "1px solid #d1d4d1";
    }

    if (name.value.trim()) {
        name.style.borderBottom = "1px solid #d1d4d1";
    }

    if (phone.value.trim()) {
        phone.style.borderBottom = "1px solid #d1d4d1";
    }

    if (!name.value.trim() && !phone.value.trim()) {
        name.style.borderBottom = "1px solid red";
        phone.style.borderBottom = "1px solid red";
        return;
    }

    if (!name.value.trim()) {
        name.style.borderBottom = "1px solid red";
        return;
    }

    if (!phone.value.trim()) {
        phone.style.borderBottom = "1px solid red";
        return;
    }

    popUpFirst.classList.remove("open");
    successPopUp.classList.add("open");
}

secondPopUpSubmitButton.onclick = (event) => {
    const name = document.querySelector("#second .pop-up__form-name");
    const phone = document.querySelector("#second .pop-up__form-phone");

    if (name.value.trim() && phone.value.trim()) {
        name.style.borderBottom = "1px solid #d1d4d1";
        phone.style.borderBottom = "1px solid #d1d4d1";
    }

    if (name.value.trim()) {
        name.style.borderBottom = "1px solid #d1d4d1";
    }

    if (phone.value.trim()) {
        phone.style.borderBottom = "1px solid #d1d4d1";
    }

    if (!name.value.trim() && !phone.value.trim()) {
        name.style.borderBottom = "1px solid red";
        phone.style.borderBottom = "1px solid red";
        return;
    }

    if (!name.value.trim()) {
        name.style.borderBottom = "1px solid red";
        return;
    }

    if (!phone.value.trim()) {
        phone.style.borderBottom = "1px solid red";
        return;
    }

    popUpSecond.classList.remove("open");
    successPopUp.classList.add("open");
}

const successCrossButton = document.querySelector(".success-pop-up__cross-button");

successCrossButton.onclick = () => {
    successPopUp.classList.remove("open");
    body.classList.remove("closed");
    body.style.overflowY = "";
}