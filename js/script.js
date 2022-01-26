// efek scroll
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var href = $(this).attr('href');
    // tangakp elemen
    var elemenhref = $(href);
    
    $('html,body').animate({
        scrollTop: elemenhref.offset().top -50
    }, 1000, 'easeInOutBack');

    e.preventDefault();
    
  

});

// paralax efect

// about
$(window).on('load', function(){
    $('.pkiri').addClass('pmuncul')
    $('.pkanan').addClass('pmuncul')
});






$(window).scroll(function(){

    var Wscroll = $(this).scrollTop();
    $('.jumbotron img').css({
        
        'transform' : 'translate(0px, '+ Wscroll/4 +'%)'
    });

    $('.jumbotron h1').css({

        'transform' : 'translate(0px, '+ Wscroll/2 +'%)'
    });

    $('.jumbotron p').css({

        'transform' : 'translate(0px, '+ Wscroll/1.2+'%)'
    });
    // portfolio

    if( Wscroll > $('.portfolio').offset().top -250){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');

            }, 500 * i+1);

        });
        
        
    }

});