//Event setup using a convenience method
$( "p").click(function() {
    console.log( "You clicked on a paragraph." );
});

//Equivalent event setup using the .on() method
$( "p" ).on( "click", function() {
    console.log( "You clicked on a paragraph." );
});

// Slowly hide all headings
$( "#myDiv" ).hide("slow");

// Slowly show all headings
setTimeout(function() {
    $("#myDiv").show("ease");
}, 3000);