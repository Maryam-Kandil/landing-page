/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
// nav && sec global var
let loopSec = document.querySelectorAll("section");
let sec = Array.from(loopSec);
let nav = document.getElementById("navbar__list");
let addLi;

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
// generate dynamic list 
// method for generate dynamic list 
//to get the num of sections
let listnum = sec.length;
addLi = "";

function navMethod(listnum) {
    //looping on list items
    for (let i = 1; i <= listnum; i++) {
        //get every section id
        let section = ("section" + i);
        // get  data for every nav list
        let navData = ("Section " + i);
        // just for testing
        console.log(section);
        console.log(navData);
        // append list elements to html 
        addLi += `<li>
        <a class="menu__link" href="#${section}">${navData}</a>
        </li>`;
    }
    // add elements to navbar
    nav.innerHTML = addLi;
}
// calling nav builder method
// Add class 'active' to section when near top of viewport
navMethod(listnum);

function getSec(viewSEC) {
    let activeSec = (viewSEC.getBoundingClientRect());
    if (activeSec.top >= -170 && activeSec.top <= 170) {
        return (activeSec);
    }
}
// dactivate && ativate the class
function deactiveAactive() {
    loopSec.forEach(section => {
        if (getSec(section)) {
            section.classList.add('your-active-class');
            section.style.cssText = 'background-color:purple';
        } else {
            section.classList.remove('your-active-class');
            section.style.cssText =
                "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%," +
                "rgba(255,255,255,.2) 100%)";
        }
    });
}
// function to add and remove active while scrolling 
function scrollMethod() {
    addEventListener('scroll', deactiveAactive);
}
//calling  scrolling function
scrollMethod();
/**
 * End Main Functions
 * Begin Events
 * 
 */
// local var for links in the navbar after pre create it 
let loopAnchor = document.querySelectorAll(".menu__link");
//method for smooth scrolling

function smoothScroll() {
    loopAnchor.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: "smooth"
            });

        });
    });

}
smoothScroll();


// Build menu 

// Scroll to section on link click

// Set sections as active