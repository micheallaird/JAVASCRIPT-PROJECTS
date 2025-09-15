//Switch Statement
function Corvette_Function() {
    var Corvette_Output;
    var Corvettes = document.getElementById("Corvette_Input").value;
    var Corvette_String = " is a great Corvette!";
    var Corvette_String1 = " is wrongo bucko!";
    switch (Corvettes) {
        case "C1":
            Corvette_Output = "C1" + Corvette_String1;
            break;
        case "C2":
            Corvette_Output = "C2" + Corvette_String1;
            break;
        case "C3":
            Corvette_Output = "C3" + Corvette_String;
            break;
        case "C4":
            Corvette_Output = "C4" + Corvette_String1;
            break;
        case "C5":
            Corvette_Output = "C5" + Corvette_String;
            break;
        case "C6":
            Corvette_Output = "C6" + Corvette_String;
            break;
        case "C7":
            Corvette_Output = "C7" + Corvette_String;
            break;
        case "C8":
            Corvette_Output = "C8" + Corvette_String1;
            break;
        default:
            Corvette_Output = "Please enter a Corvette exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Corvette_Output;
}

//Window Object Properties
//Window Closed Object Property
let myWindow;

function openWin() {
    myWindow = window.open("", "myWindow", "width=400,height=200");
}

function closeWin() {
    if (myWindow) {
        myWindow.close();
    }
}

function checkWin() {
    let text = "";
    if (!myWindow) {
        text = "It has never been opened!";
    } else {
        if (myWindow.closed) {
            text = "It is closed.";
        } else {
            text = "It is open.";
        }
    }
    document.getElementById("window_closed").innerHTML = text;
}

//pageXOffset and pageYOffset Object Property
function myFunction() {
    window.scrollBy(100, 100);
    alert("pageXOffset: " + window.pageXOffset + ", pageYOffset: " + window.pageYOffset);
}

//Window Object Methods
//Alert() Method Object
function myFunction1() {
    alert("Hello! I am an alert box!");
}

//open() Method
function myFunction2() {
    window.open("https://www.learncodinganywhere.com");
}

//getElementsByClassName
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

function Hello_World_Function1() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "This text can change too if you set the variable correctly"
}

//HTML Canvas  Element
function myCanvas_Function() {
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
if (ctx) {
    ctx.fillRect(20, 20, 150, 100);
    }
}

//createLinearGradient() Method
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("myCanvas1");
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");

        // Create a Gradient
        const grd = ctx.createLinearGradient(0, 0, 170, 0);
        grd.addColorStop(0, "black");
        grd.addColorStop(1, "white");

        // Draw a filled Rectangle
        ctx.fillStyle = grd;
        ctx.fillRect(20, 20, 150, 100);
    }
});
