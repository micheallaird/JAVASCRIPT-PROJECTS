// JavaScript Document
// Dictionary Function
function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Chocolate",
        Breed: "Lab",
        Age: 1,
        Sound: "Bark!"
    };
    // Deleted the Sound property from the Animal object
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}