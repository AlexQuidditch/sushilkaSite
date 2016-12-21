$(document).ready(function () {

	$('#slider').flickity({
		cellAlign: 'center',
		contain: true
	});

	$('[data-roll]').on('click', function (e) {
		e.preventDefault();
		var
			$this = $(this),
			target = $this.data('roll'),
			anchor = $('[id="' + target + '"]');
		anchor.velocity("scroll", {
			easing: 'easeInOut',
			duration: 1250
		})
	});
});
