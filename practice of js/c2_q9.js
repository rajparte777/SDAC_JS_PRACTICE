//throw

function checkAge(age) {
    if (age < 18) {
        throw "Age must be 18 or above";
    }
    console.log("Access Granted");
}

try {
    checkAge(3);
} catch (error) {
    console.log(error);
}