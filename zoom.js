import {viewport_geometry, element_geometry, get_center_shifts} from './geometry.js';

const boxes = gsap.utils.toArray('.box');



let count = 0;
let timeline;
document.addEventListener('click', () => {

  const {viewport_center_x, viewport_center_y} = viewport_geometry();

  if (count === 0) {
    
    timeline = gsap.timeline();

    boxes.forEach((box, idx) => {
      const {x0, y0} = element_geometry(boxes[idx]);
      const {shift_x, shift_y} = get_center_shifts(viewport_center_x, viewport_center_y, x0, y0);
      timeline.to(boxes[idx], {x: shift_x, y: shift_y}, '<');
    });
  } 
  else {
    timeline.reverse();
  }

  count = (count + 1) % 2;
});