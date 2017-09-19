$(() => {
    function changeColor() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        $('body').css('background-color', `rgb(${r}, ${g}, ${b})`);
    };

    $('main').on('click', function() {
        changeColor();
    });

    $(".button-collapse").sideNav();
});