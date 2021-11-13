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
});
