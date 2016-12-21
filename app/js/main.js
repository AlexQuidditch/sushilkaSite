$(document).ready(function () {

	Waves.init();
	Waves.attach('[ripple-dark]', ['waves-dark']);
	Waves.attach('[ripple-light]', ['waves-light']);

	$('#flickity').flickity({
		autoPlay: 7500,
		pageDots: true,
		arrowShape: false,
		lazyLoad: true,
		wrapAround: true
	});

});

var circle = document.querySelector('#menuButton'),
	sidebar = document.querySelector('#sidebar__list');
circle.addEventListener('click', function (e) {
	e.preventDefault(),
		circle.classList.toggle('is-active'),
		sidebar.classList.toggle('is-active')
});
