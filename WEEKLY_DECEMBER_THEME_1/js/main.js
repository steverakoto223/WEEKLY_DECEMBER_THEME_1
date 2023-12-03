$("#panel").hide()
$("#apotra").hide()
$(document).ready(function () {
    $("#flip").click(function () {

        $("#panel").slideToggle()
        $("#afenina").hide()
        $("#apotra").show()
    })
})

$("#bx").text("Read Now")