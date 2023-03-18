// "english" || "maths" || "chem" || "bio"
let subject = "bio"

switch (subject) {
    case "english":
        printSubject("english")
        break
    case "maths":
        printSubject("maths")
        break
    case "chem":
        printSubject("chem")
        break
    default:
        console.log("You did not select a valid subject")
        break
}

function printSubject(value) {
    console.log(`The user selected ${value}`)
}