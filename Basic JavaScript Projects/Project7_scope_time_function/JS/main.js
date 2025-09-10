// Global variable
var X=10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

// Local variable
function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100); 
}
Add_numbers_1();
Add_numbers_2();

// Date object and If statement
function get_Date() {
    if (new Date().getHours() < 21) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// If...Else statement
function Age_Function() {
    Age = document.getElementById("Age").value; 
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }   
    else {
        Vote = "You are not old enough to vote!";
    }   
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

// Else If statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}