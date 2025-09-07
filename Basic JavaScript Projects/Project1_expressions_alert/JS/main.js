// This is a JavaScript alert popup
window.alert("Hello, World!");
// This will write "Hello, World!" in the HTML document
document.write("Hello, World!");
// Defining variables and writing them to the HTML document
var X = "Hello, World!";
document.write(X);
var A = "This is a string";
document.write(A);
// Using escape characters to include quotes in a string
document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell Dad!\"<br>\"Eat my shorts!\" Bart responded.");
document.write(`\"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.\"-Dr. Seuss`);
// More variable definitions and simple arithmetic
var Family = "The Lairds", Dad = "Micheal", Mom = "Sonya", Daughter = "Virginia", Son = "Austin";
document.write(Dad);
document.write(5 + 6);
//Defining a function and naming it
function My_First_Function() {
    //Defining a variable and giving it a value
    var str = "This is the button text!";
    //Putting the value of the variable into the HTML element with "Button_Text" id
    document.getElementById("Button_Text").innerHTML = str;
}