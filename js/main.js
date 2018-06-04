/*    main.js JAVASCRIPT FILE
 ***   AUTHOR: KUSI MUSAH HUSSEIN
 ***   SCHOOL: HACETTEPE UNIVERSITY
 ***   CLASS: 3
 ***   SUBJECT: ÇOKLU ORTAM TASARIMI VE ÜRETİMİ

COPYRIGHT(C) 2018 ALL RIGHT RESERVED
 */



// GET HAMBURGER MENU FROM PAGES
var hamburgerMenu = document.getElementById("hamburgerMenu");
// GET HAMBURGER BTN FROM PAGE
var menuBtn = document.getElementById("menuBtn");

// CHECK AVAILABILITY OF THE MENU
if (menuBtn) {
  // ON CLICK CHANGE THE IMAGE AND DISPLAY THE CONTENTS
  menuBtn.addEventListener('click', function () {
    var hamMenu = document.getElementById("hamburgerMenu").src;
    var hamMenuLink = hamMenu.substring(hamMenu.indexOf("images"));
    var hamMenuStart = hamMenu.substring(0, hamMenu.indexOf("images"));

    if (hamMenuLink == 'images/graphics/hamburger.png') {
      setTimeout(function () {
        document.getElementById("hamburgerMenu").src = hamMenuStart + 'images/graphics/cancel.png';
      }, 200);
      document.querySelector(".hiddenMenu").style.maxHeight = '500px';
      document.querySelector(".hiddenMenu").style.transition = 'max-height 0.5s ease-in';
    } else if (hamMenuLink == 'images/graphics/cancel.png') {
      setTimeout(function () {
        document.getElementById("hamburgerMenu").src = hamMenuStart + 'images/graphics/hamburger.png';
      }, 200);
      document.querySelector(".hiddenMenu").style.maxHeight = '0px';
      document.querySelector(".hiddenMenu").style.transition = 'max-height 0.5s ease-out';
    }
  });
}