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
        let Sw = document.getElementById("Sw");
        let Js = document.getElementById("Js");
        let Py = document.getElementById("Py");
        let H1 = document.getElementById("ResultHead")
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
                Py.style.opacity = "100";
                Js.style.opacity = "0"
                Sw.style.opacity = "0"
                H1.innerHTML = "Python is the Language for you!";

            } else if (Swift > Python && Swift > Javascript) {
                Sw.style.opacity = "100"
                Js.style.opacity = "0"
                Py.style.opacity = "0"
                H1.innerHTML = "Swift is the Language for you!";
                console.log('Swift is the language for you!');
            } else if (Javascript > Swift && Javascript > Python) {
                Js.style.opacity = "100"
                Py.style.opacity = "0"
                Sw.style.opacity = "0"
                H1.innerHTML = "Javascript is the Language for you!";

            } else {
                H1.innerHTML = "There's an issue with your selection - Look for read selections or try a different combo of options";
            }
        } else {
            H1.innerHTML = "There's an issue with your selection - Look for Red selections or try a different combo of options";
        }
        console.log(Python,Swift,Javascript)
        form.reset();
    } 

}

