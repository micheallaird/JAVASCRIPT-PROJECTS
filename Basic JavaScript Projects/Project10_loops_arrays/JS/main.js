// Example of string length property
let exampleText = "This is a string length property example.";
let length = exampleText.length;
function string_length() {
    document.getElementById("string_length").innerHTML = length;
}

// Example of for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Example of arrays and objects
function dog_pics() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "barking";
    Dog_Picture[3] = "eating";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " + Dog_Picture[2] + ".";
}

// Example of constant keyword
function constant_function() {
    const Vehicle = { type: "Chevy", brand: "Corvette", color: "black" };
    Vehicle.color = "red";
    Vehicle.price = "$60,000";
    document.getElementById("Constant").innerHTML = `The cost of the ${Vehicle.brand} was ${Vehicle.price}`;
}

// Example of let keyword
function let_function() {
    let X = 82;
    document.getElementById("Let").innerHTML = X;
}

// Example of return statement
let name = "Micheal";
function return_function() {
    return "Hello " + name;
}

// Example of object with method
function car_object() {
    const Car = {
        make: "Dodge ",
        model: "Viper RT/10 ",
        year: "2004 ",
        color: "red ",
        description: function () {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = Car.description();
}

// Example of break statement
function break_function() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("Break").innerHTML = text;
}
// Example of continue statement
function continue_function() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
    }   
    document.getElementById("Continue").innerHTML = text;
}