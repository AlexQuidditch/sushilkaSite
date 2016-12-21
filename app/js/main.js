$(document).ready(function () {

	Waves.init();
	Waves.attach('[ripple-dark]', ['waves-dark']);
	Waves.attach('[ripple-light]', ['waves-light']);

	$('#slider').flickity({
		arrowShape: {
			x0: 10,
			x1: 60,
			y1: 50,
			x2: 65,
			y2: 45,
			x3: 50
		},
		autoPlay: "3500",
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
