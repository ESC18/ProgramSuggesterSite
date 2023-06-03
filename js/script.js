window.onload = function () {
    let form = document.querySelector("form");
    console.log('this works 0')
    form.reset();
    form.onsubmit = function (event) {
        console.log('this works 1')
        event.preventDefault();
        let Platform = document.getElementById("Platform").value;
        let Beginner = document.getElementById("Beginner").value;
        let FrontBack = document.getElementById("FrontBack").value;
        let BusFun = document.getElementById("BusFun").value;
        let LogicUI = document.getElementById("LogicUI").value;
        let Python = 0;
        let Javascript = 0;
        let Swift = 0;
        let Proper = 0;
        if (Platform === "Desktop") {
            Python += 1;
            Javascript += 1;
            Swift -= 5;
            Proper += 1;
            document.getElementById("Platform").style.color = "green";
        } else if (Platform === "Mobile") {
            Python -= 5;
            Javascript += 0;
            Swift += 5;
            Proper += 1;
            document.getElementById("Platform").style.color = "green";
        } else {
            document.getElementById("Platform").style.color = "red";
        }
        if (Beginner === "Yes") {
            Python += 1;
            Javascript -= 2;
            Swift += 1;
            Proper += 1;
            document.getElementById("Beginner").style.color = "green";
        } else if (Beginner === "No") {
            Python += 0;
            Javascript += 0;
            Swift += 0;
            Proper += 1;
            document.getElementById("Beginner").style.color = "green";
        } else {
            document.getElementById("Beginner").style.color = "red";
        }
        if (FrontBack === "Front") {
            Python -= 1;
            Javascript += 5;
            Swift += 1;
            Proper += 1;
            document.getElementById("FrontBack").style.color = "green";
        } else if (FrontBack === "Back") {
            Python += 5;
            Javascript -= 0;
            Swift += 3;
            Proper += 1;
            document.getElementById("FrontBack").style.color = "green";
        } else {
            document.getElementById("FrontBack").style.color = "red";
        }
        if (BusFun === "Fun") {
            Python += 1;
            Javascript += 1;
            Swift -= 1;
            Proper += 1;
            document.getElementById("BusFun").style.color = "green";
        } else if (BusFun === "Business") {
            Python += 0;
            Javascript += 0;
            Swift += 0;
            Proper += 1;
            document.getElementById("BusFun").style.color = "green";
        } else {
            document.getElementById("BusFun").style.color = "red";
        }
        if (LogicUI === "Logic") {
            Python += 3;
            Javascript -= 1;
            Swift += 3;
            Proper += 1;
            document.getElementById("LogicUI").style.color = "green";
        } else if (LogicUI === "UI") {
            Python -= 2;
            Javascript += 4;
            Swift += 2;
            Proper += 1;
            document.getElementById("LogicUI").style.color = "green";
        } else {
            document.getElementById("LogicUI").style.color = "red";
        }




        if (Proper === 5) {
            if (Python > Swift && Python > Javascript) {
                console.log('Python is the language for you!');
            } else if (Swift > Python && Swift > Javascript) {
                console.log('Swift is the language for you!');
            } else if (Javascript > Swift && Javascript > Python) {
                console.log('Javascript is the language for you!');
            } else {
                console.log("Something ain't addin up - try a different selection");
            }
        } else {
            console.log("Something ain't addin up - try a different selection");
        }
        console.log(Python,Swift,Javascript)
    } 

}

