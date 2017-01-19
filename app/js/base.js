$(document).ready(function () {

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