// adds the currentTime to the currentDay id innerHTML
function currentDate() {    
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss A')
    $('#currentDay').html(currentTime)    
}

// calls the function as soon as the page loads and updates every second
currentDate()
setInterval(currentDate, 1000);


// sets the textarea html to the localstorage values
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


// adds event listners to each of the buttons that then stores the value to localStorage
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


// gets the value of the name attributes
var nineTime = $('.nine textarea').attr('name')
var tenTime = $('.ten textarea').attr('name')
var elevenTime = $('.eleven textarea').attr('name')
var twelveTime = $('.twelve textarea').attr('name')
var oneTime = $('.one textarea').attr('name')
var twoTime = $('.two textarea').attr('name')
var threeTime = $('.three textarea').attr('name')
var fourTime = $('.four textarea').attr('name')
var fiveTime = $('.five textarea').attr('name')


// gets the value of the current hour
var currentHour = moment().hour()

/* checks to see if the name attribute value is 
    equal, more or less than the current hour */
if (currentHour == nineTime) {
    $('.nine').addClass('present');
} else if (currentHour < nineTime) {
    $('.nine').addClass('future');
} else {
    $('.nine').addClass('past');
}

if (currentHour == tenTime) {
    $('.ten').addClass('present');
} else if (currentHour < tenTime) {
    $('.ten').addClass('future');
} else {
    $('.ten').addClass('past');
}

if (currentHour == elevenTime) {
    $('.eleven').addClass('present');
} else if (currentHour < elevenTime) {
    $('.eleven').addClass('future');
} else {
    $('.eleven').addClass('past');
}

if (currentHour == twelveTime) {
    $('.twelve').addClass('present');
} else if (currentHour < twelveTime) {
    $('.twelve').addClass('future');
} else {
    $('.twelve').addClass('past');
}

if (currentHour == oneTime) {
    $('.one').addClass('present');
} else if (currentHour < oneTime) {
    $('.one').addClass('future');
} else {
    $('.one').addClass('past');
}

if (currentHour == twoTime) {
    $('.two').addClass('present');
} else if (currentHour < twoTime) {
    $('.two').addClass('future');
} else {
    $('.two').addClass('past');
}

if (currentHour == threeTime) {
    $('.three').addClass('present');
} else if (currentHour < threeTime) {
    $('.three').addClass('future');
} else {
    $('.three').addClass('past');
}

if (currentHour == fourTime) {
    $('.four').addClass('present');
} else if (currentHour < fourTime) {
    $('.four').addClass('future');
} else {
    $('.four').addClass('past');
}

if (currentHour == fiveTime) {
    $('.five').addClass('present');
} else if (currentHour < fiveTime) {
    $('.five').addClass('future');
} else {
    $('.five').addClass('past');
}
