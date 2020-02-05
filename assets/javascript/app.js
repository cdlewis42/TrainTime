//Turns input into variable
var table = $(".container")
// On click appending all the data to the table
$("#submit").on("click", function(event){
    var frequency = $("#frequency").val().trim()

    var firstTime = $("#firstTime").val().trim()

    var destination = $("#destination").val().trim()

    var name = $("#trainName").val().trim()

    event.preventDefault();

    var newCell1 = $("<td>")

    newCell1.append(name)

    var newCell2 =  $("<td>")

    newCell2.append(destination) 

    var newCell3 = $("<td>")


    newCell3.append(firstTime)

    var newCell4 = $("<td>")
    newCell4.append(frequency)

    
    var newRow = $("<tr>")
    newCell1.append(newRow)
    newCell2.append(newRow)
    newCell3.append(newRow)
    newCell4.append(newRow)
    newRow.append(table)
//This is where I am emptying the input so it can have more information added.
    frequency.empty()
    firstTime.empty()
    destination.empty()
    name.empty()

})