$(document).ready(function () {

	var formCall = $('#call'),
		formModal = $('#modal'),
		formOverlay = $('#overlay'),
		formSend = $('#send'),
		posName = $('#posName'),
		posPhone = $('#posPhone'),
		confirm = {
			title: 'Секундочку!',
			text: 'Отправляем данные...',
			type: 'info',
			showConfirmButton: false,
			allowOutsideClick: false
		},
		success = {
			title: 'Отлично!',
			text: 'Мы скоро с Вами свяжемся!',
			type: 'success',
			showCloseButton: true
		},
		error = {
			title: 'Упс...',
			text: 'Что-то пошло не так! Проверьте правильность данных!',
			type: 'error',
			showCloseButton: true
		};

	formCall.on('click', modal_opened);

	formOverlay.on('click', modal_close);

	formSend.on('click', modal_send);

	function modal_send() {
		swal(confirm),
			$.ajax({
				type: 'POST',
				url: '../../send.php',
				data: {
					'posName': posName.val(),
					'posPhone': posPhone.val()
				},
				cache: false,
				success: function (response) {
					if (response == 1) {
						swal(success),
							posName.val(''),
							posPhone.val(''),
					} else {
						swal(error)
					}
				}
			});
		return false;
	};

});
