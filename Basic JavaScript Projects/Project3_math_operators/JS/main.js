// JavaScript Document
// Addition, Subtraction, Multiplication, Division
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("add").innerHTML = "2 + 2 = " + addition;
}
function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("subtract").innerHTML = "5 - 2 = " + subtraction;
}
function multiplication_Function() {
    var multiplication = 6 * 8;
    document.getElementById("multiply").innerHTML = "6 x 8 = " + multiplication;
}
function division_Function() {
    var division = 48 / 6;
    document.getElementById("divide").innerHTML = "48 / 6 = " + division;
}
// More Math Operators
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("more").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}
// Modulus, Negation, Increment, Decrement, Random, Pi
function modulus_Operator() {
    var modulus = 25 % 6;
    document.getElementById("modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;
}
function negation_Operator() {
    var x = 10;
    document.getElementById("negation").innerHTML = -x;
}
function increment_Operator() {
    var X = 5;
    X++;
    document.getElementById("increment").innerHTML = "5 incremented by 1 is: " + X;
}
function decrement_Operator() {
    var Y = 5.25;
    Y--;
    document.getElementById("decrement").innerHTML = "5.25 decremented by 1 is: " + Y;
}
function random_Number() {
    var random = Math.random();
    document.getElementById("random").innerHTML = "Here is a random number between 0 and 1: " + random;
}
function pi_Function() {
    var pi = Math.PI;
    document.getElementById("pi").innerHTML = "The value of PI is: " + pi;
}