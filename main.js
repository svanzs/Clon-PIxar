let paralax=document.querySelector('.imagenFondo');
let imagen=document.querySelector('.imagen');

function scrollParallax(){
	let scrollTop=document.documentElement.scrollTop;
	paralax.style.transform='translateY(' + scrollTop*-0.2 + 'px)';
	imagen.style.transform='translateY(' + scrollTop*- 0.8 + 'px)';


}

window.addEventListener('scroll',scrollParallax);