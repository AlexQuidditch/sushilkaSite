$(document).ready(function () {

	Waves.init();
	Waves.attach('[ripple-dark]', ['waves-dark']),
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

	//	Catalogue

	var catalogue = {

		'1': [
//			Item Name
			'',
//			Image link
			'',
//			Description
			'',
//			ItemID
			1],

		'2': [
//			Item Name
			'',
//			Image link
			'',
//			Description
			'',
//			ItemID
			2],

		'3': [
//			Item Name
			'',
//			Image link
			'',
//			Description
			"",
//			ItemID
			3],

		'4': [
//			Item Name
			'',
//			Image link
			'',
//			Description
			"",
//			ItemID
			4],

		'5': [
//			Item Name
			'',
//			Image link
			'',
//			Description
			"",
//			ItemID
			5],

		'6': [
//			Item Name
			'',
//			Image link
			'',
//			Description
			"",
//			ItemID
			6]
	}

	var $catalogue = $('#catalogue__container');

	for (var catalogue__item in catalogue) {
		var catalogueName = catalogue[catalogue__item][0],
			catalogueImage = catalogue[catalogue__item][1],
			catalogueDescription = catalogue[catalogue__item][2],
			catalogueLink = catalogue[catalogue__item][3],
			cataloguePrice = catalogue[catalogue__item][4],
			catalogueID = catalogue[catalogue__item][5],
			$catalogue__Template = $($('#catalogue__Template').html());

		$catalogue__Template.find('.catalogue__title').text(catalogueName);
		$catalogue__Template.find('.catalogue__img').attr('src', catalogueImage);
		$catalogue__Template.find('.catalogue__text').text(catalogueDescription);
		//		$catalogue__Template.find('.catalogue__link').attr('href', catalogueLink);
		//		$catalogue__Template.find('.catalogue__price').text(cataloguePrice + ' руб.');

		$catalogue__Template.data('id', catalogueID);
		$catalogue__Template.data('name', catalogueName);

		$catalogue.append($catalogue__Template);
	}

});
