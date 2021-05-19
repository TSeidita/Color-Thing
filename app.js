//Gradient: RBG code. Two of them. Maybe one button for up
//One button for down. 12 keys total. Cycles through RGB codes
//to make gradients

//Start at two numbers
//if total below 150 switch text to white

let leftBodyOne = 0;
let leftBodyTwo = 255;
let leftBodyThree = 84;


let rightBodyOne = 251;
let rightBodyTwo = 148;
let rightBodyThree = 35;


// function colorChanger() {
//     document.body.style.backgroundColor = `rgb(${leftBodyOne}, ${leftBodyTwo}, ${leftBodyThree})`;
//     let leftText = document.getElementById("leftRGB");
//     leftRGB.innerHTML = `The is RGB(${leftBodyOne}, ${leftBodyTwo}, ${leftBodyThree})`;
// }

function colorChanger() {
    let lefty = `rgb(${leftBodyOne}, ${leftBodyTwo}, ${leftBodyThree})`;
    let righty = `rgb(${rightBodyOne}, ${rightBodyTwo}, ${rightBodyThree})`;
    document.body.style.backgroundImage = `linear-gradient(to right, ${lefty}, ${righty})`;
    let leftText = document.getElementById("leftRGB");
    leftRGB.innerHTML = `The is the left RGB value(${leftBodyOne}, ${leftBodyTwo}, ${leftBodyThree})`;
    let rightText = document.getElementById("rightRGB");
    rightRGB.innerHTML = `The is the right RGB value(${rightBodyOne}, ${rightBodyTwo}, ${rightBodyThree})`;
    if (leftBodyOne + leftBodyTwo + leftBodyThree + rightBodyOne + rightBodyTwo + rightBodyThree <= 200) {
        document.body.style.color = "white";
    } else {
        document.body.style.color = "black";
    }
}


colorChanger();
//Left color changer
document.addEventListener('keydown', function (event) {
    if (event.key === 'w' && leftBodyOne < 255) {
        leftBodyOne += 1;
    }
    if (event.key === 's' && leftBodyOne > 0) {
        leftBodyOne -= 1;
    }
    colorChanger();
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'e' && leftBodyTwo < 255) {
        leftBodyTwo += 1;
    }
    if (event.key === 'd' && leftBodyTwo > 0) {
        leftBodyTwo -= 1;
    }
    colorChanger();
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'r' && leftBodyThree < 255) {
        leftBodyThree += 1;
    }
    if (event.key === 'f' && leftBodyThree > 0) {
        leftBodyThree -= 1;
    }
    colorChanger();
}); ''


//right color changer
document.addEventListener('keydown', function (event) {
    if (event.key === 'u' && rightBodyOne < 255) {
        rightBodyOne += 1;
    }
    if (event.key === 'j' && rightBodyOne > 0) {
        rightBodyOne -= 1;
    }
    colorChanger();
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'i' && rightBodyTwo < 255) {
        rightBodyTwo += 1;
    }
    if (event.key === 'k' && rightBodyTwo > 0) {
        rightBodyTwo -= 1;
    }
    colorChanger();
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'o' && rightBodyThree < 255) {
        rightBodyThree += 1;
    }
    if (event.key === 'l' && rightBodyThree > 0) {
        rightBodyThree -= 1;
    }
    colorChanger();
});