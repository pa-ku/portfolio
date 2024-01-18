console.log('%c ESTA WEB FUE CREADA CON', 'color:#84acfd; font-size:2rem' );
console.log('%c JS | HTML | CSS 🚀', 'color:#fb8bd0; font-size:1.9rem' );

/* Modal */

let htmlTAG = document.querySelector(".html")

/*-------------------------
          Flybondi
--------------------------*/
let modalFlybondi = document.querySelector(".modal-flybondi")
let openModalFlybondi = document.querySelector(".info-flybondi")
openModalFlybondi.addEventListener("click", () => {
  showModal(modalFlybondi)
})

let modalCloseFlybondi = document.querySelector(".modal-close-flybondi")
modalCloseFlybondi.addEventListener("click", () => {
  closeModal(modalFlybondi)
})
/*-------------------------
          Gptyping
--------------------------*/
let modalGpt = document.querySelector(".modal-gpt")
let openModalGpt = document.querySelector(".info-gpt")
openModalGpt.addEventListener("click", () => {
  showModal(modalGpt)
})

let modalCloseGpt = document.querySelector(".modal-close-gpt")
modalCloseGpt.addEventListener("click", () => {
  closeModal(modalGpt)
})



/*-------------------------
          Huinganco
--------------------------*/
let modalHuinganco = document.querySelector(".modal-huinganco")
let openModalHuinganco = document.querySelector(".info-huinganco")
openModalHuinganco.addEventListener("click", () => {
  showModal(modalHuinganco)
})

let modalCloseHuinganco = document.querySelector(".modal-close-huinganco")
modalCloseHuinganco.addEventListener("click", () => {
  closeModal(modalHuinganco)
})





function showModal(modal) {
  modal.style.visibility = "visible";
  modal.style.opacity = "1";

  /*   plane.style.display="none"; */
  htmlTAG.style.overflowY = "hidden";
  htmlTAG.style.margin = "0px 4.5px 0px 0px";

}

function closeModal(modal2) {

  modal2.style.visibility = "hidden";
  modal2.style.opacity = "0";
  htmlTAG.style.overflowY = "auto";
  htmlTAG.style.margin = "0px 0px 0px 0px";
  /*  plane.style.display="flex"; */
}

/*-------------------------
  Plane Landing animation
--------------------------*/

let plane = document.querySelector(".flybondi-plane")/* desactivar plane para evitar overflow */
let planeTrigger = document.querySelector(".tower-btn")

planeTrigger.addEventListener('click', takeoff)

let clearMsj = document.querySelector(".tooltip-msj")



function takeoff() {
  plane.style.display = "flex"
  clearMsj.style.display = "inline"
  planeTrigger.style.filter = "grayscale(0)brightness(0.9)";
  planeTrigger.style.cursor = "default";
}


/*-------------------------
     Focus  modals
--------------------------*/
// add all the elements inside modal which you want to make focusable
const focusableElements =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const modal = document.querySelector('#modalFLy'); // select the modal by it's id

const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
const focusableContent = modal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


document.addEventListener('keydown', function (e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();


//Footer copy
let copyBtn = document.querySelector(".footer-btn-mail")
let copyMsj = document.querySelector(".tooltip-msj-copy")

copyBtn.addEventListener('click', () => {
  var texto = copyBtn.innerText;
  navigator.clipboard.writeText(texto);

  copyMsj.style.animation = "none"; // elimina la copyMsj anterior
  void copyMsj.offsetWidth; // reinicia la animación
  copyMsj.style.animation = "clear 2s";

})



//JAVASCRIPT OBSERVER


const OBSERVER = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    }
    else {

    }
  })
})

const HIDDEN_ELEMENTS = document.querySelectorAll('.hidden')
HIDDEN_ELEMENTS.forEach((element) => OBSERVER.observe(element))

/*-------------------------
          
--------------------------*/
const CARD_OBSERVER = new IntersectionObserver((e) => {
  e.forEach((en) => {

    if (en.isIntersecting) {
      en.target.classList.add('popuptrue')
    }
    else {

    }
  })
})

const CARD_ELEMENTS = document.querySelectorAll('.popup')
CARD_ELEMENTS.forEach((element) => CARD_OBSERVER.observe(element))



//THEMES
const colorTheme = document.getElementById('theme-btn')


const storeTheme = theme => localStorage.setItem("dark", theme)
const removeTheme = theme => localStorage.removeItem("dark", theme)


const loadTheme = function () {
  const activeTheme = localStorage.getItem("theme")

}


colorTheme.addEventListener('change', (theme) => {
  if (colorTheme.checked) {
    storeTheme(theme.id)
    console.log("Light Theme 💡");
  } else {
    removeTheme(theme.id)
    console.log("DarkTheme 🌑");
  }
}
)

document.onload = loadTheme()
