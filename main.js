$(document).ready(function () {

    // au clic sur hamburger, afficher ou masquer le menu (en responsive)
    $('#hamburger').on('click', function () {
        if ($('#navigationLinks').css('display') == 'none') {
            $('#navigationLinks').css('display', 'block');
            $('#navigationLinks').css('display', 'grid');
        }
        else {
            $('#navigationLinks').css('display', 'none');
        }
    });

    // afficher le menu quand on passe en taille desktop (même s'il est masqué)
    window.addEventListener('resize', () => {
        let width = window.innerWidth;
        if (width > 1080) {
            $('#navigationLinks').css('display', 'block');
            $('#navigationLinks').css('display', 'grid');
        }
    });
})