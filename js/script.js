// event pada link
$('.page-scroll').on('click', function(r){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybg
	var elemenTujuan = $(tujuan);


	// pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	r.preventDefault();
});

// paralax
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	// produck
	if( wScroll > $('.produk').offset().top - 250) {
		$('.produk .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.produk .thumbnail').eq(i).addClass('muncul')
			}, 300 * (i+1));
		});
		
	};
});