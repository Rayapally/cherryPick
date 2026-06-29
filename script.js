function changeText() {
    document.getElementById("message").innerHTML =
    "🎉 Congratulations! JavaScript is Working.";
}
function changeText() {

    let name = prompt("Enter your name:");

    if(name == "" || name == null){
        document.getElementById("message").innerHTML =
        "Please enter your name!";
    }
    else{
        document.getElementById("message").innerHTML =
        "Welcome, " + name + " 😊";
    }

}
