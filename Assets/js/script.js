$('tbody .nine').addClass('past');
$('tbody .ten').addClass('past');
$('tbody .eleven').addClass('present');
$('tbody .twelve').addClass('future');
$('tbody .one').addClass('future');
$('tbody .two').addClass('future');
$('tbody .three').addClass('future');
$('tbody .four').addClass('future');
$('tbody .five').addClass('future');

var currentHour = moment().format('h')

function currentDate() {    
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss A')
    $('#currentDay').html(currentTime)    
}

currentDate()
setInterval(currentDate, 1000);


var getNine = localStorage.getItem('nine')
$('.nine textarea').html(getNine)

var getTen = localStorage.getItem('ten')
$('.ten textarea').html(getTen)

var getEleven = localStorage.getItem('eleven')
$('.eleven textarea').html(getEleven)

var getTwelve = localStorage.getItem('twelve')
$('.twelve textarea').html(getTwelve)

var getOne = localStorage.getItem('one')
$('.one textarea').html(getOne)

var getTwo = localStorage.getItem('two')
$('.two textarea').html(getTwo)

var getThree = localStorage.getItem('three')
$('.three textarea').html(getThree)

var getFour = localStorage.getItem('four')
$('.four textarea').html(getFour)

var getFive = localStorage.getItem('five')
$('.five textarea').html(getFive)


$('.btn9').on('click',function() {
    let text = $('.nine textarea').val();
    localStorage.setItem('nine', text)
})

$('.btn10').on('click',function() {
    let text = $('.ten textarea').val();
    localStorage.setItem('ten', text)
})

$('.btn11').on('click',function() {
    let text = $('.eleven textarea').val();
    localStorage.setItem('eleven', text)
})

$('.btn12').on('click',function() {
    let text = $('.twelve textarea').val();
    localStorage.setItem('twelve', text)
})

$('.btn1').on('click',function() {
    let text = $('.one textarea').val();
    localStorage.setItem('one', text)
})

$('.btn2').on('click',function() {
    let text = $('.two textarea').val();
    localStorage.setItem('two', text)
})

$('.btn3').on('click',function() {
    let text = $('.three textarea').val();
    localStorage.setItem('three', text)
})

$('.btn4').on('click',function() {
    let text = $('.four textarea').val();
    localStorage.setItem('four', text)
})

$('.btn5').on('click',function() {
    let text = $('.five textarea').val();
    localStorage.setItem('five', text)
})