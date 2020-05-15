import $ from 'jquery';

function main() {

    const fullWidthHero = () => {
        $(".jumbotron").css({
            height: $(window).height() + "px"
        });

        $(window).on("resize", function () {
            $(".jumbotron").css({
                height: $(window).height() + "px"
            });
        });
    }

    const triggerToastNewsLetter = () => {
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                $('#newsletter').toast({
                    'animation': true,
                    'autohide': false
                });
                $('#newsletter').toast('show')
            }
        });
    }

    $(function () {
        $("#cookie").alert();
        $('#newsletter').toast('dispose');
        fullWidthHero();
        triggerToastNewsLetter();

    })
}

export default main;