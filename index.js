function expandCompress() {
    $('ul').on('click', '.compress', function(event) {
        toggleNavElements();
    });
};

function toggleNavElements() {
    $('.expanded').toggleClass("hidden");
};

expandCompress();



