import geometry from './geometry.js';

const boxes = gsap.utils.toArray('.box');
console.log(boxes);

let count = 0;
let timeline;
document.addEventListener('click', () => {

  const {viewport_center_x, viewport_center_y, x0: x0_0, y0: y0_0} = geometry(boxes[0]);
  const {x0: x0_1, y0: y0_1} = geometry(boxes[1]);
  const {x0: x0_2, y0: y0_2} = geometry(boxes[2]);
  const {x0: x0_3, y0: y0_3} = geometry(boxes[3]);

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

  let {shift_x: shift_x_0, shift_y: shift_y_0} = get_shifts(viewport_center_x, viewport_center_y, x0_0, y0_0);
  let {shift_x: shift_x_1, shift_y: shift_y_1} = get_shifts(viewport_center_x, viewport_center_y, x0_1, y0_1);
  let {shift_x: shift_x_2, shift_y: shift_y_2} = get_shifts(viewport_center_x, viewport_center_y, x0_2, y0_2);
  let {shift_x: shift_x_3, shift_y: shift_y_3} = get_shifts(viewport_center_x, viewport_center_y, x0_3, y0_3);

  if (count === 0) {
    timeline = gsap.timeline();
    timeline.to(boxes[0], {x: shift_x_0, y: shift_y_0});
    timeline.to(boxes[1], {x: shift_x_1, y: shift_y_1}, '<');
    timeline.to(boxes[2], {x: shift_x_2, y: shift_y_2}, '<');
    timeline.to(boxes[3], {x: shift_x_3, y: shift_y_3}, '<');
  } else {
    timeline.reverse();
  }

  count = (count + 1) % 2;
});