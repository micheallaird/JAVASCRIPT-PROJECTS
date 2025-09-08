// Coercion in JavaScript
document.write("10" + 5 + "<br>"); // 105
// Typeof operator
document.write(typeof "Word"); // string
document.write("<br>" + typeof 3); // number
// Demonstrates NaN, Infinity, and Boolean logic
function my_function() {
    document.getElementById("Test").innerHTML = 0/0;
}
function my_function1() {
document.getElementById("Test1").innerHTML = isNaN('This is a string');
}
function my_function2() {
document.getElementById("Test2").innerHTML = isNaN('007');
}
function infinity_function3() {
    document.getElementById("Test3").innerHTML = 2E310;
}
function infinity_function4() {
    document.getElementById("Test4").innerHTML = -3E310;
}
function boolean_function5() {
    document.getElementById("Test5").innerHTML = [6 > 3 && 22 <= 23];
}
function boolean_function6() {
    document.getElementById("Test6").innerHTML = [6 > 3 && 22 > 23];
}
// Examples of double equal signs
function double_equal_signs() {
    document.getElementById("Test7").innerHTML = (10 == 10);
}
function double_equal_signs1() {
    document.getElementById("Test8").innerHTML = (3 == 11);
}
// Examples of triple equal signs
function triple_equal_signs() {
    var x = 10;
    var y = 10;
    document.getElementById("Test9").innerHTML = (x === y);
}
function triple_equal_signs1() {
    var x = 82;
    var y = "82";
    document.getElementById("Test10").innerHTML = (x === y);
}
function triple_equal_signs2() {
    var A = "Magnus";
    var B = "Magnus";
    document.getElementById("Test11").innerHTML = (A === B);
}
// Examples of logical OR operator
function or_function() {
    document.getElementById("Test12").innerHTML = (5 > 10 || 10 > 4);
}
function or_function1() {
    document.getElementById("Test13").innerHTML = (5 > 10 || 10 > 20);
}
// Examples of logical NOT operator
function not_function() {
    document.getElementById("Test14").innerHTML = !(20 > 10);
}
function not_function1() {
    document.getElementById("Test15").innerHTML = !(5 > 10);
}
// Example of console log
console.log(2 + 2);
// Example of console log with false boolean
console.log(5 > 10);