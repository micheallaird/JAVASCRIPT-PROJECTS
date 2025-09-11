//Concat Method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice Method
function slice_Method() {
    var Sentence = "A jack of all trades is a master of none, but often times better than a master of one.";
    var Section = Sentence.slice(0,40);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase Method
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.toUpperCase();
}

//Search Method
function search_Function() {
    var str = "The quick brown fox jumps over the lazy dog";
    var n = str.search("fox");
    document.getElementById("search").innerHTML = n;
}

//toString Method
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision Method
function precision_Method() {
    var X = 3.14159265358979323846;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//toFixed Method
function fixed_Method() {
    var X = 3.14159265358979323846;
    document.getElementById("Fixed").innerHTML = X.toFixed(2);
}

//valueOf Method
function value_Function() {
    var str = "ValueOf Method";
    var res = str.valueOf();
    document.getElementById("Value").innerHTML = res;
}