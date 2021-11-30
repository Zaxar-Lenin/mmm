/*$(document).ready(function() {
	$.each($('.checkbox'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
	}
	});
	$(document).on('click', '.checkbox', function(event) {
		if($(this).hasClass('active')){
			$(this).find('input').prop('checked',false);
		}else{
			$(this).find('input').prop('checked',true);
		}
		$(this).toggleClass('active');
		return: false;
	});
});
*/



$('.filter__item').click(function(event){
		var i = $(this).data('filter');
	if (i==1){
		$('.portfolio__column').show();
	}else{
		$('.portfolio__column').hide();
		$('.portfolio__column.f_' + i).show();
	}
	$('.filter__item').removeClass('active');
		$(this).addClass('active');

		return false;
});



/*$(window).scroll(function(event){
		var s = 0-$(this).scrollTop()/2;
	$('.mainblock').css('transform','translate3d(0, '+s+'px, 0)');
});*/