$('ul li').on('click','a',function(e){
	e.preventDefault();
	var hrefid=$(this).attr('href');
	$(this).addClass('hover').siblings('.hover').removeClass('hover');
	$(hrefid).addClass('hide').siblings('.hide').removeClass('hide');
})