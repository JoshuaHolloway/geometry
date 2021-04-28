import geometry from './geometry.js';

const box_1 = document.querySelector('.box-1');
const box_2 = document.querySelector('.box-2');

let count = 0;
let timeline;
document.addEventListener('click', () => {

  const {viewport_center_x, viewport_center_y, x0: x0_1, y0: y0_1} = geometry(box_1);
  const {x0: x0_2, y0: y0_2, x1_2, y1_2} = geometry(box_2);

  const get_shifts = (viewport_center_x, viewport_center_y, x0, y0) => {
    let shift_x, shift_y;
    
    if (viewport_center_x > x0)
      shift_x = viewport_center_x - x0;
    else
      shift_x = -(x0 - viewport_center_x);

    if (viewport_center_y > y0)
      shift_y = viewport_center_y - y0;
    else
      shift_y = -(y0 - viewport_center_y);

    return {shift_x, shift_y};
  };

  let {shift_x: shift_x_1, shift_y: shift_y_1} = get_shifts(viewport_center_x, viewport_center_y, x0_1, y0_1);
  let {shift_x: shift_x_2, shift_y: shift_y_2} = get_shifts(viewport_center_x, viewport_center_y, x0_2, y0_2);

  if (count === 0) {
    timeline = gsap.timeline();
    timeline.to(box_1, {x: shift_x_1, y: shift_y_1});
    timeline.to(box_2, {x: shift_x_2, y: shift_y_2}, '<');
  } else {
    timeline.reverse();
  }

  count = (count + 1) % 2;
});