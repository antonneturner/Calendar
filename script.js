$('.form-control').each(function () {
    console.log($(this))

})

// time 

$(document).ready(function () {
    var today = moment();
    $("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm a"));
})