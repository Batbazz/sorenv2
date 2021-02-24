// Detect scroll position
// let scrollPosition = Math.round(window.scrollY);

// // If we've scrolled 100px, add " bottom: 2rem;" class to the header
// if (scrollPosition > 100){
//     document.querySelector('.buttonicon').classList.add('2rem');
// }
// // If not, remove " bottom: 2rem;" class from header
// else {
//     document.querySelector('.buttonicon').classList.remove('2rem');
// }


// const initUpMailIconOnScroll = () => {
//   const buttonicon = document.querySelector('.buttonicon');
//   if (buttonicon) {
//     window.addEventListener('scroll', () => {
//       if (window.scrollY >= 100) {
//         buttonicon.classList.add('.buttonicon-down');
//       } else {
//         buttonicon.classList.remove('.buttonicon-down');
//       }
//     });
//   }
// }

// export { initUpMailIconOnScroll };

let buttonicon = document.querySelector('.buttonicon');
let sp16 = document.getElementById('page-16');

window.onscroll = function () {
  if(window.pageYOffset > 100) {
    buttonicon.style.position = "fixed";
    buttonicon.style.bottom = "2rem";
    buttonicon.style.opacity = "0.3";
    buttonicon.addEventListener("mouseenter", function(event) {
      event.target.style.opacity = "1";
    });
  //   if(window.pageYOffset > {sp16 + 200}) {
  //     console.log('YEPA !!!!!!!')
  //   // buttonicon.style.bottom = "9rem";
  //   // buttonicon.style.left = "44rem";
  //   // buttonicon.style.opacity = "1";
  // }
  } else {
    buttonicon.style.position = "fixed";
    buttonicon.style.bottom = "10rem";
    buttonicon.style.opacity = "1";
  }
}
