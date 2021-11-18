$(function () {
	//авто-закрытие мобильного меню
	$(".burger, .menu__item a").on("click", function () {
		if (window.innerWidth <= 768) {
			$(".header__menu").toggleClass("header__menu--active"),
				$(".burger").toggleClass("burger--active");
		} else {
			//не выполнять
		}
	});

	//input
	$(".dealer__btn").on("click", function () {
		var re = /^\d[\d\(\)\ -]{4,14}\d$/;
		var myPhone = document.getElementById("phone").value;
		var valid = re.test(myPhone);
		if (valid) output = "Номер телефона введен правильно!";
		else output = "Номер телефона введен неправильно!";
		document.getElementById("message").innerHTML =
			document.getElementById("message").innerHTML + "<br />" + output;
		return valid;
	});
});
