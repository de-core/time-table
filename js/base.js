$(document).ready(function(){

//Slider
	var h_h = $('header').height();
	var w_h = $(window).height()
	var h = w_h - h_h;
	console.log(w_h)
	$('.swiper-container').css('max-height', h)
	var mySwiper = new Swiper ('.swiper-container',{
		direction: 'horizontal',
		loop: true,
		autoplay: 3000,
		speed: 1000,
		slideActiveClass: 'active',
		// Navigation arrows
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
	})
	$('.swiper-button-prev, .swiper-button-next').click(function(){
		mySwiper.startAutoplay();
	})

//Time and date setting
	var currentTime = new Date();
	var month = currentTime.getUTCMonth();
	month = check(month+1);
	var day = currentTime.getUTCDate();
	day = check(day);
	var year = currentTime.getUTCFullYear();
	function startTime(){
		var tm=new Date();
		var h=tm.getUTCHours();
		var m=tm.getUTCMinutes();
		var s=tm.getUTCSeconds();
		m=check(m);
		s=check(s);
		document.getElementById('time').innerHTML="UTC Time: "+h+":"+m+":"+s;
		t=setTimeout(startTime,1000);
	}
	function check(i){
		if (i<10){
			i="0" + i;
		}
		return i;
	}
	startTime()
	$('.title p').prepend('UTC Date: '+day+'.'+month+'.'+year);

//appear time-table scroll-effect
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: '80'
		})
	wow.init();

})