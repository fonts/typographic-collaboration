var $container = $('#container');
// initialize
$container.masonry({
    columnWidth: 100,
    itemSelector: '.case'
});

// GALLERY-BUTTON
// cf http://jsfiddle.net/lfurter/QJftM/
$('.next').click(function () {
    var $current = $(this).parent().parent().find('.image-gallery:not(.hidden)');
    var $next = $current.next();
    if ($next.hasClass("hidden")) {
        $current.addClass("hidden");
        $next.removeClass("hidden");
    }
});
$('.previous').click(function () {
    var $current = $(this).parent().parent().find('.image-gallery:not(.hidden)');
    var $previous = $current.prev();
    if ($previous.hasClass("hidden")) {
        $current.addClass("hidden");
        $previous.removeClass("hidden");
    }
});
