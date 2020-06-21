function expandCompress() {
    $('ul').on('click', '.compress', function(event) {
        addNavElements();
    });
};

function addNavElements() {
    $('h2').insertAfter("<h3>TEST</h3>");
};

expandCompress();






<div class="expanded">
        <div>
            <a class="nav-toggle" href="#abt">About</a>
        </div>
        <div>
            <a class="nav-toggle" href="#poo">Portfolio</a>
        </div>
        <div>
            <a class="nav-toggle" href="#cot">Contact</a>
        </div>
    </div>

