import 'bootstrap'
import { initUpMailIconOnScroll } from './mailicon.js';
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Anim scroll
$(function() {
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

// Anim Mail Icon
// document.addEventListener('turbolinks:load', () => {
//   initUpMailIconOnScroll();
// });
