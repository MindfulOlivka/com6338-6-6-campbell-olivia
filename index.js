// When the button.hamburger-btn element is clicked on smaller screens, the hamburger menu should open/close. Again, toggling the show-menu class on the .hamburger-menu element should show/hide the menu.

//Clicking outside of .hamburger-menu should close the menu if it is open.

//Clicking inside of .hamburger-menu should NOT close the menu.

//Pressing the Escape key when the menu is open should close the menu and focus button.hamburger-btn.

//Under all circumstances, when the menu is open, aria-expanded should be set to true on button.hamburger-btn, and set to false when the menu is closed.


var hamburgerBtn = document.querySelector('button.hamburger-btn')
var hamburgerMenu = document.querySelector('.hamburger-menu')

function openMenu(e) {
    e.stopPropagation()
    hamburgerMenu.classList.toggle('show-menu')
    hamburgerBtn.setAttribute('aria-expanded', true)
    if (hamburgerMenu.classList.contains('show-menu')) {
        hamburgerBtn.setAttribute('aria-expanded', true)
    } else {
        hamburgerBtn.setAttribute('aria-expanded', false)
    }
    hamburgerBtn.focus()
}
hamburgerBtn.onclick = openMenu

function closeMenu(e) {
    e.stopPropagation()
    hamburgerMenu.classList.remove('show-menu')
    hamburgerBtn.setAttribute('aria-expanded', false)
    hamburgerBtn.focus()
}

document.onkeyup = function(e) {
    if (e.key === 'Escape') {
        closeMenu(e)
    } 
}

document.body.onclick = function(e) {
    if (!hamburgerMenu.contains(e.target)){
        closeMenu(e)
    }
}




/* form.onclick = function(e) {

hamburgerBtn.addEventListener ('click', function(e)) {
if (hamburgerMenu = clicked) {
    open.hamburgerMenu
}
else if {

}
 else {
    close.hamburgerMenu
 }
 }} */
