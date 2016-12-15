$(window).scroll(function (e) {
	scroll = $(window).scrollTop(), scroll > 600 ? ($("#header").addClass("header_scrolled"), $("#sidebar").addClass("sidebar_scrolled"), $(".sidebar__item").addClass("sidebar__item_scrolled")) : ($("#header").removeClass("header_scrolled"), $("#sidebar").removeClass("sidebar_scrolled"), $(".sidebar__item").removeClass("sidebar__item_scrolled"))
}), $("#header").hover(function () {
	$(this).removeClass("header_scrolled")
}, function () {
	$(this).addClass("header_scrolled")
}), $(window).scroll(function (e) {
	scroll = $(window).scrollTop(), scroll > 600 ? ($("#header").addClass("header_scrolled"), $("#sidebar").addClass("sidebar_scrolled"), $("#header").hover(function () {
		$(this).removeClass("header_scrolled")
	})) : ($("#header").removeClass("header_scrolled"), $("#sidebar").removeClass("sidebar_scrolled"))
}), $('[data-roll]').on('click', function (e) {
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
