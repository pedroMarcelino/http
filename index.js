$(function () {

    $('.item-nav').on('click', function () {
        var newId = "#";
        newId += $(this).attr('id');
        newId += 'Title';

        $('.title').attr('class', 'hidden');
        $(newId).attr('class', 'display-1 title animated bounceIn');

        $('.content').attr('class', 'hidden');

        var newClass = '#';
        newClass += $(this).attr('id');
        newClass += 'Container';

        $(newClass).attr('class', 'container content animated fadeInLeft');

    });

});