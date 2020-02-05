//Turns input into variable
var table = $(".container")
// On click appending all the data to the table
$(document).on("click","#submit", function(event){
    var frequency = $("#frequency").val().trim()

    var firstTime = $("#firstTime").val().trim()

    var destination = $("#destination").val().trim()

    var name = $("#trainName").val().trim()

    var newCell1 = $("<td>")

    newCell1.append(name)

    var newCell2 =  $("<td>")

    newCell2.append(destination) 

    var newCell3 = $("<td>")


    newCell3.append(firstTime)

    var newCell4 = $("<td>")
    newCell4.append(frequency)

    
    var newRow = $("<tr>")
    newRow.append(newCell1)
    newRow.append(newCell2)
    newRow.append(newCell3)
    newRow.append(newCell4)
    table.append(newRow)
    $("#trainName").val("")
    $("#frequency").val("")
    $("#firstTime").val("")
    $("#destination").val("")


//This is where I am emptying the input so it can have more information added.

})