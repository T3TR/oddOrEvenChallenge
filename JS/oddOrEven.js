function input(){
    let num = prompt("Enter your number:");
    if ( num/2 % 1 != 0 ) {
        document.getElementById("output").innerHTML = "Your number was ODD!"
    }
    else if ( num/2 % 1 == 0 ) {
        document.getElementById("output").innerHTML = "Your number was EVEN!"
    }
}

// document.getElementById("output").innerHTML = "Invalid input, please enter a whole number!"