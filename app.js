
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}



const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

// adding a click event listner to generate button
const generate = document.getElementById("generateBtn");
generate.addEventListener("click", () => {
    const passlength = document.getElementById("Passwordlength").value;
    const hasUpper = document.getElementById("uppercase").checked;
    const hasLower = document.getElementById("lowercase").checked;
    const hasNumber = document.getElementById("numbers").checked;
    const hasSymbol = document.getElementById("symbols").checked;
    const result = document.getElementById("Password-Result");
    result.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        passlength
    );
});

//function generate 

function generatePassword(lower, upper, number, symbol, passlength) {
    let generatedPassword = '';
    const typecount = lower + upper + number + symbol;

    //filter unchecked

    const typeArray = [{ lower }, { upper }, { number }, { symbol }].filter
        (
            (item) => Object.values(item)[0]
        );

    // for loop generator function for each type

    for (let i = 0; i < passlength; i += typecount) {
        typeArray.forEach((type) => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    // slice password from 0 to length
    const finalPassword = generatedPassword.slice(0, passlength);
    return finalPassword;

}

// copy to clipboard

let button = document.getElementById("clipboardBtn");

// add event listener 
button.addEventListener("click", (e) => {
    e.preventDefault();

    document.execCommand(
        "copy",
        false,
        document.getElementById("Password-Result").select()
    );
});
