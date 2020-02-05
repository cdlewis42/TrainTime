
var firebaseConfig = {
    apiKey: "AIzaSyB-8tuPS9QHNHwv0NcyI1m9Wmod9PSx7Ac",
    authDomain: "traintime-f3e2a.firebaseapp.com",
    databaseURL: "https://traintime-f3e2a.firebaseio.com",
    projectId: "traintime-f3e2a",
    storageBucket: "traintime-f3e2a.appspot.com",
    messagingSenderId: "633716697636",
    appId: "1:633716697636:web:9153ee3148df1eb93306b1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();







//Turns input into variable
var table = $(".container")
// On click appending all the data to the table
$(document).on("click", "#submit", function (event) {
    var frequency = $("#frequency").val().trim()

    var firstTime = $("#firstTime").val().trim()

    var destination = $("#destination").val().trim()

    var name = $("#trainName").val().trim()

    var newCell1 = $("<td>")

    newCell1.append(name)

    var newCell2 = $("<td>")

    newCell2.append(destination)

    var newCell3 = $("<td>")


    newCell3.append(frequency)


    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);


    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % frequency;
    console.log(tRemainder);

    // Minute Until Train
    var minutesAway = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + minutesAway);

    // Next Train
    var nextTrain = moment().add(minutesAway, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"))

    var newCell4 = $("<td>")
    newCell4.append(nextTrain)

    var newCell5 = $("<td>")
    newCell5.append(minutesAway)

    var newRow = $("<tr>")
    newRow.append(newCell1)
    newRow.append(newCell2)
    newRow.append(newCell3)
    newRow.append(newCell4)
    newRow.append(newCell5)
    table.append(newRow)
    $("#trainName").val("")
    $("#frequency").val("")
    $("#firstTime").val("")
    $("#destination").val("")
    database.ref().push({
        trainName:name,
        Frequency:frequency,
        MinutesAway:minutesAway,
        Destination:destination

      });

      database.ref().on("value",function(snapshot){
          console.log(snapshot.val().name)
          console.log(snapshot.val().frequency)
          console.log(snapshot.val().minutesAway)
          console.log(snapshot.val().destination)

      })

    //This is where I am emptying the input so it can have more information added.

})