//Alert the user when they attempt to submit the form with an empty field
document.getElementById("myForm").addEventListener("submit", function(event) {
    var inputField = document.getElementById("myInput").value;
    if (!inputField) {
        event.preventDefault();
        alert("Please fill out all fields.");
    }
});
