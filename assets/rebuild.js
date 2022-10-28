const doc = document.documentElement
doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

// const setVh = () => {
//   const vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// };

// window.addEventListener('load', setVh);
// window.addEventListener('resize', setVh);