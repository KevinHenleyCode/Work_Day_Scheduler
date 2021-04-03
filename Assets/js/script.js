// class of table-secondary table-danger and future will style the times

$('tbody .nine').addClass('past');
$('tbody .ten').addClass('past');
$('tbody .eleven').addClass('present');
$('tbody .twelve').addClass('future');
$('tbody .one').addClass('future');
$('tbody .two').addClass('future');
$('tbody .three').addClass('future');
$('tbody .four').addClass('future');
$('tbody .five').addClass('future');


$('.btn9').on('click',function() {
    let text = $('.nine textarea').val();
    $('.nineEvent').html(text);
})

$('.btn10').on('click',function() {
    let text = $('.ten textarea').val();
    $('.tenEvent').html(text);
})

$('.btn11').on('click',function() {
    let text = $('.eleven textarea').val();
    $('.elevenEvent').html(text);
})

$('.btn12').on('click',function() {
    let text = $('.twelve textarea').val();
    $('.twelveEvent').html(text);
})

$('.btn1').on('click',function() {
    let text = $('.one textarea').val();
    $('.oneEvent').html(text);
})

$('.btn2').on('click',function() {
    let text = $('.two textarea').val();
    $('.twoEvent').html(text);
})

$('.btn3').on('click',function() {
    let text = $('.three textarea').val();
    $('.threeEvent').html(text);
})

$('.btn4').on('click',function() {
    let text = $('.four textarea').val();
    $('.fourEvent').html(text);
})

$('.btn5').on('click',function() {
    let text = $('.five textarea').val();
    $('.fiveEvent').html(text);
})