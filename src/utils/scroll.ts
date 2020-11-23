export const elements = ['history', 'gallery', 'location', 'contact'];

export function getScrollElPositions(): Array<number[]> {
  const topOfPage = getCurrentYPos();
  let positions = elements.map((elId, idx) => {
    return [document.getElementById(elId).offsetTop - topOfPage, idx];
  });
  positions = positions.filter(el => el[0] > 20);
  return positions;
}

// function onResize() {
//   const positions = getScrollElPositions();
//   const pageArrow = document.getElementById('page-arrow');
//   if (atBottom() || positions.length === 0) {
//     pageArrow.classList.remove('fa-angle-down');
//     pageArrow.classList.add('fa-angle-up');
//   } else {
//     pageArrow.classList.remove('fa-angle-up');
//     pageArrow.classList.add('fa-angle-down');
//   }
// }

export function atBottom(): boolean {
  return (window.innerHeight + window.scrollY) >= document.body.offsetHeight
}

export function scrollToElement(elId: string) {
  const currentTop = getCurrentYPos();
  const targetTop = document.getElementById(elId).offsetTop - 20;
  smoothScroll(currentTop, targetTop);
}

export function scrollToPos(pos: number) {
  const currentTop = getCurrentYPos();
  smoothScroll(currentTop, pos);
}

function getCurrentYPos(): number {
  // Firefox, Chrome, Opera, Safari
  if (window.pageYOffset) return window.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function smoothScroll(startY: number, stopY: number) {
  const distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY); return;
  }
  let speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  const step = Math.round(distance / 25);
  const leapY = stopY > startY ? startY + step : startY - step;
  stepper(leapY, step, speed);

  function stepper(leapY: number, step: number, speed:  number) {
    if (stopY > startY)
      leapY > stopY ? leapY = stopY : leapY += step;
    else
      leapY < stopY ? leapY = stopY : leapY -= step;

    window.scrollTo(0, leapY);

    if (stopY > startY && leapY > stopY) {
      window.scrollTo(0, stopY);
      return;
    } else if (stopY < startY && leapY < stopY) {
      window.scrollTo(0, stopY);
      return;
    }
    setTimeout(() => stepper(leapY, step, speed), speed);
  }
}
