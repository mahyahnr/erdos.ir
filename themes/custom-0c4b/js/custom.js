$(document).ready(function() {
    //Top Header
    var menu = $('.site-header');
    var menuHeight = menu.outerHeight();

    if ($(this).scrollTop() > 100) {
        $('.site-header').addClass('fixed');
        console.log('init init');
        //$('body').css({"padding-top": menuHeight});

    }

    if ($('.index-header-container').length > 0) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.site-header').addClass('fixed');
                //$('body').css({"padding-top": menuHeight});

            } else {
                $('.site-header').removeClass('fixed');
                //$('body').css({"padding-top": "0"});
            }
        });
    } else {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 20) {
                $('.site-header').addClass('fixed');
                //$('body').css({"padding-top": menuHeight});

            } else {
                $('.site-header').removeClass('fixed');
                //$('body').css({"padding-top": "0"}); 
            }
        });
    }

    setTimeout(function() {
        $('.home-hero-slogan').addClass('animated fadeInDown')
    }, 0); //300
    setTimeout(function() {
        $('.home-hero-description').addClass('animated fadeInUp')
    }, 0); //500
    // setTimeout(function () { $('.newsletter-section').addClass('animated fadeInUp') }, 0); //1000

    if ($('.class-table-section-days-tabs')) {
        $('.nav.nav-tabs li:first-child .nav-link').addClass('active');
        $('.class-table-section-tabcontent .tab-content .tab-pane').eq(0).addClass('active show');
    }

    function homeHero() {
        var subscriptionHeight = $('.newsletter-section').outerHeight();
        $('.home-hero-typo').css({
            "padding-bottom": subscriptionHeight + 70
        });
    }
    $(document).ready(homeHero);
    $(window).resize(homeHero);
});