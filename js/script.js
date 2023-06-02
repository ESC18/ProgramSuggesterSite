window.onload = function () {
    let form = document.querySelector("form");
    console.log('this works 0')
    form.onsubmit = function (event) {
        event.preventDefault();
        console.log('this works 1')

        console.log('this works 2')
    }

}

