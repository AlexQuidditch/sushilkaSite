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

	$(document).keyup(function (event) {
		if (event.which == '27') {
			formOverlay.removeClass('overlay--visible'),
				formModal.removeClass('modal__window--visible')
		}
	});

	function modal_close(e) {
		e.preventDefault();
		formOverlay.removeClass('overlay--visible'),
			formModal.removeClass('modal__window--visible')
	};

	function modal_opened(e) {
		e.preventDefault();
		formOverlay.toggleClass('overlay--visible'),
			formModal.toggleClass('modal__window--visible')
	};

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
							formOverlay.removeClass('overlay--visible'),
							formModal.removeClass('modal__window--visible')
					} else {
						swal(error)
					}
				}
			});
		return false;
	};

});
