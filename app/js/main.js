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

	scroll;
	$(".scroll").click(function (event) {
		console.log(11111);
		event.preventDefault();
		$("body").animate({ scrollTop: 0 }, 1500);
	});

	$(".menu a, header a").on("click", function (e) {
		e.preventDefault();
		const id = $(this).attr("href"),
			top = $(id).offset().top;
		$("body,html").animate({ scrollTop: top }, 1500);
	});

	//input
});
