import geometry from './geometry.js';

const box = document.querySelector('.box');

let count = 0;
let timeline;
document.addEventListener('click', () => {

  const {viewport_center_x, viewport_center_y, x0, y0, x1, y1, w, h} = geometry(box);

  const shift_x = viewport_center_x - x0;
  const shift_y = viewport_center_y - y0;

  if (count === 0) {
    timeline = gsap.timeline();
    timeline.to(box, {x: shift_x, y: shift_y});
  } else {
    timeline.reverse();
  }

  count = (count + 1) % 2;
});