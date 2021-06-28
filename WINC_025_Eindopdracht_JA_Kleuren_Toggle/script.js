// Variables

const menuicon = document.getElementById('icon-menu')
const colourlist = document.querySelector('.list')
const options = document.querySelectorAll(".openmenu")
const colorbackground = document.getElementById('screencolor')


// Show and hide menu by using the toggle functionality

const togglemenuon = function () {
    menuicon.addEventListener('mouseover', function () {
        colourlist.classList.toggle('close-menu')
    })
}

const togglemenuoff = function () {
    menuicon.addEventListener('mouseleave', function () {
        colourlist.classList.toggle('close-menu')
    })
}

// Adjusting the background colour

const setcolor = function () {
    options.forEach(function (a) {
        a.addEventListener('click', function (b) {
            colorbackground.removeAttribute("class")
            colorbackground.classList.add(b.target.classList[1])
            colourlist.classList.add('close-menu')
        })
    })
}

// Applying the functions
togglemenuon();
togglemenuoff();
setcolor();