let myslide = $(".myslide");
let counter = 1;
let timer = 0;
$(function(){
	slidefun(counter);
	timer = setInterval(autoSlide, 8000);
});

function autoSlide() {
	counter++;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	$(".myslide").hide();
	$(".dot").removeClass("active");
	if(n > myslide.length){
	   counter = 1;
	}
	if(n < 1){
	   counter = myslide.length;
	}
	$(".img").eq(counter - 1).fadeTo("show",1);
	myslide.eq(counter - 1).show();
	$(".dot").eq(counter - 1).addClass("active");
}