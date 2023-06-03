window.onload = function () {
    let form = document.querySelector("form");
    form.reset();
    form.onsubmit = function (event) {
        event.preventDefault();
        //Local Variables for Elements.
        let Platform = document.getElementById("platform").value;
        let Beginner = document.getElementById("beginner").value;
        let FrontBack = document.getElementById("frontBack").value;
        let BusFun = document.getElementById("busFun").value;
        let LogicUI = document.getElementById("logicUI").value;
        let Python = 0;
        let Javascript = 0;
        let Swift = 0;
        let Proper = 0;
        //Dropdown branches (Business)
        if (Platform === "Desktop") {
            Python += 1;
            Javascript += 1;
            Swift -= 5;
            Proper += 1;
            document.getElementById("platform").style.color = "green";
        } else if (Platform === "Mobile") {
            Python -= 5;
            Javascript += 0;
            Swift += 7;
            Proper += 1;
            document.getElementById("platform").style.color = "green";
        } else {
            document.getElementById("platform").style.color = "red";
        }
        if (Beginner === "Yes") {
            Python += 1;
            Javascript -= 2;
            Swift += 1;
            Proper += 1;
            document.getElementById("beginner").style.color = "green";
        } else if (Beginner === "No") {
            Python += 0;
            Javascript += 0;
            Swift += 0;
            Proper += 1;
            document.getElementById("beginner").style.color = "green";
        } else {
            document.getElementById("beginner").style.color = "red";
        }
        if (FrontBack === "Front") {
            Python -= 1;
            Javascript += 5;
            Swift += 1;
            Proper += 1;
            document.getElementById("frontBack").style.color = "green";
        } else if (FrontBack === "Back") {
            Python += 5;
            Javascript -= 0;
            Swift += 3;
            Proper += 1;
            document.getElementById("frontBack").style.color = "green";
        } else {
            document.getElementById("frontBack").style.color = "red";
        }
        if (BusFun === "Fun") {
            Python += 1;
            Javascript += 1;
            Swift -= 1;
            Proper += 1;
            document.getElementById("busFun").style.color = "green";
        } else if (BusFun === "Business") {
            Python += 0;
            Javascript += 0;
            Swift += 0;
            Proper += 1;
            document.getElementById("busFun").style.color = "green";
        } else {
            document.getElementById("busFun").style.color = "red";
        }
        if (LogicUI === "Logic") {
            Python += 3;
            Javascript -= 1;
            Swift += 3;
            Proper += 1;
            document.getElementById("logicUI").style.color = "green";
        } else if (LogicUI === "UI") {
            Python -= 3;
            Javascript += 6;
            Swift += 2;
            Proper += 1;
            document.getElementById("logicUI").style.color = "green";
        } else {
            document.getElementById("logicUI").style.color = "red";
        }



        //Program chooser & UI branch.
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

