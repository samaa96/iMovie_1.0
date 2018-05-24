$(document).ready(function () {
    wireEvents();
    pic();
});

function wireEvents() {
    $('#theMatrix').click(function () {
        $('#movie').text('The Matrix');
        pic();
        location.replace('#buy');

    });
    $('#shawshankRed').click(function () {
        $('#movie').text('The Shawshank Redemption');
        pic();
        location.replace('#buy');
    });
    $('#fightClub').click(function () {
        $('#movie').text('Fight Club');
        pic();
        location.replace('#buy');
    });
}

function pic() {

    if ($('#movie').text() === 'The Matrix')
        $('#poster').prop('src', 'matrix.png');
    else if ($('#movie').text() === 'Fight Club')
        $('#poster').prop('src', "fightclub.jpg");
    else
        $('#poster').prop('src', "shawshank.jpg");
}
function update() {
    var str = "";
    var i = 0;

    $('#num').text($('#numOftic').val());
    $('#movNam').text($('#movie').text());
    $('#dDate').text($('#date').val() + ",  " + $('#hour').val());
    if ($('#pop').is(':checked')) {
        str += 'Popcorn ';
        i++;
    }
    if ($('#cola').is(':checked')) {
        str += 'Coca-Cola ';
        i++;
    }
    if ($('#snacks').is(':checked')) {
        str += 'Snickers ';
        i++;
    }
    i = i * 5 + ($('#numOftic').val()) * 10;
    $('#ex').text(str);
    $('#price').text(i + '$');
    location.replace('#order');
}