/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
/*
+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();
*/

document.addEventListener('DOMContentLoaded', function () {

  const navButton = document.getElementById('nav-button');
  const navMenu = document.getElementById('nav-menu');
  const openIcon = document.getElementById('open-icon');
  const closeIcon = document.getElementById('close-icon');
  const header = document.querySelector('header');

  function navPosition() {
    if (window.innerWidth >= 768) {
      if (!header.contains(navMenu)) {
        header.appendChild(navMenu);
        navMenu.classList.remove('hidden');
      }
    } else {
      if (header.contains(navMenu)) {
        header.parentElement.insertBefore(navMenu, header.nextSibling);
        navMenu.classList.add('hidden');
      }
    }
  }
  navPosition();

  window.addEventListener('resize', navPosition);

  navButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Active menu option
  const path = window.location.pathname;
  const options = document.querySelectorAll('#nav-menu a');

  options.forEach(function (option) {

    if ("/" + option.getAttribute('href') === path) {
      option.classList.add('font-bold');
      option.classList.add('text-blue');
    }

  });

});
