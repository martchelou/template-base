const aside = document.querySelector('body aside');
const asideOpen = () => aside.classList.toggle('open');
const asideClose = () => aside.classList.remove('open');

document.getElementById('menu').onclick = asideOpen;
document.getElementById('close').onclick = asideClose;

export { asideOpen, asideClose };