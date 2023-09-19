
$(document).ready(function(){
	// animate-on-scroll
	 AOS.init();
	// crose-button
	$('.after-button').click(function(){
		$(this).toggleClass("get");
		$(this).removeClass('crosing')
	    $('.menu-area').fadeToggle();
	});
	$('.menu ul li').click(function(){
		$('.menu ul li').removeClass('active');
		$(this).addClass('active');
	});

})
// typed js

$(function(){
	$(".typed").typed({
		strings: ["Code Blogs", "IT Blogs", "Coder It Solution Team"],
		stringsElement: null,
		typeSpeed: 30,
		startDelay: 100,
		backSpeed: 20,
		backDelay: 500,
		loop: false,
		loopCount: 5,
		showCursor: false,
		cursorChar: "|",

	});
});
