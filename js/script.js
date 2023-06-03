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
        if (Platform === "Desktop") {
            Python += 1;
            Javascript += 1;
            Swift -= 1;
            document.getElementById("Platform").style.color = "green";
        } else if (Platform === "Mobile") {
            Python -= 1;
            Javascript += 0;
            Swift += 4;
            document.getElementById("Platform").style.color = "green";
        } else {
            document.getElementById("Platform").style.color = "red";
        }
        if (Beginner === "Yes") {
            Python += 1;
            Javascript += 0;
            Swift += 1;
            document.getElementById("Beginner").style.color = "green";
        } else if (Beginner === "No") {
            Python += 0;
            Javascript += 0;
            Swift += 0;
            document.getElementById("Beginner").style.color = "green";
        } else {
            document.getElementById("Beginner").style.color = "red";
        }
        if (FrontBack === "Front") {
            Python -= 1;
            Javascript += 3;
            Swift += 1;
            document.getElementById("FrontBack").style.color = "green";
        } else if (FrontBack === "Back") {
            Python += 3;
            Javascript += 0;
            Swift += 2;
            document.getElementById("FrontBack").style.color = "green";
        } else {
            document.getElementById("FrontBack").style.color = "red";
        }
        if (BusFun === "Fun") {
            Python += 1;
            Javascript += 1;
            Swift -= 1;
            document.getElementById("BusFun").style.color = "green";
        } else if (BusFun === "Business") {
            Python += 0;
            Javascript += 0;
            Swift += 0;
            document.getElementById("BusFun").style.color = "green";
        } else {
            document.getElementById("BusFun").style.color = "red";
        }
        if (LogicUI === "Logic") {
            Python += 2;
            Javascript -= 1;
            Swift += 2;
            document.getElementById("LogicUI").style.color = "green";
        } else if (LogicUI === "UI") {
            Python -= 1;
            Javascript += 3;
            Swift += 2;
            document.getElementById("LogicUI").style.color = "green";
        } else {
            document.getElementById("LogicUI").style.color = "red";
        }
        console.log(Python,Swift,Javascript)
    } 

}

