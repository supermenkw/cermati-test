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

    const hideToastNewsLetter = () => {

    }

    const triggerToastNewsLetter = (status) => {
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() == $(document).height() && status === 'enable') {
                status = 'disable';

                $('#newsletter').toast({
                    'animation': true,
                    'autohide': false
                });
                $('#newsletter').toast('show');
            }
        });
    }

    $(function () {
        const enable = 'enable';
        const disable = 'disable';
        let status = enable;

        $("#cookie").alert();
        fullWidthHero();

        triggerToastNewsLetter(status);

        $('.close-newsletter').click(function () {
            $("#newsletter").toast('hide');
            status = disable;
            setTimeout(function () {
                status = enable;
                triggerToastNewsLetter(status);
            }, 600000)
        })
    })
}

export default main;