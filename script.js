$('.form-control').each(function () {
    console.log($(this))

})

// time 



var militaryHour = [9, 10, 11, 12, 13, 14, 15, 16, 17]

$(document).ready(function () {
    var today = moment();
    var currentHour = moment().hour()
    $("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm a"));

    for (var i = 0; i < militaryHour.length; i++) {
        if (militaryHour[i] === currentHour) {
            $("#" + i).addClass("present")
        }
        if (militaryHour[i] > currentHour) {
            $("#" + i).addClass("future")

        }
        if (militaryHour[i] < currentHour) {
            $("#" + i).addClass("past")

        }
    }
})




