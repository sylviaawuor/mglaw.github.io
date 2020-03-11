$(document).ready(function(){

    $('.slider1').bxSlider({
        arrows: true,
        slideWidth: 480,
        minSlides: 3,
        maxSlides: 4,
        slideMargin: 0,
        mode: 'horizontal'
    });


    $(".mobile-menu-icon.fa-bars").click(function(){
        $(".mobile-menu").slideToggle();
    });

    $(".mobile-menu-icon.fa-times").click(function(){
        $(".mobile-menu").slideToggle();
    });


});

function buttonUp(){
    var valux = $('.sb-search-input').val();
    valux = $.trim(valux).length;
    if(valux !== 0){
        $('.sb-search-submit').css('z-index','99');
    } else{
        $('.sb-search-input').val('');
        $('.sb-search-submit').css('z-index','-999');
    }
}

$(document).ready(function(){
    var submitIcon = $('.sb-icon-search');
    var submitInput = $('.sb-search-input');
    var searchBox = $('.sb-search');
    var isOpen = false;

    $(document).mouseup(function(){
        if(isOpen == true){
            submitInput.val('');
            $('.sb-search-submit').css('z-index','-999');
            submitIcon.click();
        }
    });

    submitIcon.mouseup(function(){
        return false;
    });

    searchBox.mouseup(function(){
        return false;
    });

    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('sb-search-open');
            isOpen = true;
        } else {
            searchBox.removeClass('sb-search-open');
            isOpen = false;
        }
    });

});

$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});