function age(fage_1, fage_2 = 18, fage_3 = 60) {
    if (Number.isInteger(fage_1) && Number.isInteger(fage_2) && Number.isInteger(fage_3)) {
        if (fage_1 < fage_2) {
            console.log("You don’t have access cause your age is " + fage_1 + ". " + "It’s less then" + " " + fage_2)
        } else if (fage_1 >= fage_2 && fage_1 < fage_3) {
            console.log("Welcome!")
        } else if (fage_1 > fage_3) {
            console.log("Keep calm and look Culture channel.")
        } else {
            console.log("Technical work")
        }
    }
    else { console.error("Error! Type a number!") }
}

age("17")
age(18)
age(61)