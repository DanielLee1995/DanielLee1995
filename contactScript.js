(function () {
    /** Add any JavaScript you need to this file. */

    function displayNumberBox() {
        var numberBox = document.getElementById("orderNumber");
        orderProblem = document.getElementById("reason-3");
        if (orderProblem != null && orderProblem.checked) {
            numberBox.style.display = "block";
        }
        else if (orderProblem != null){
            numberBox.style.display = "none";
        }
    }

    function startup() {
        displayNumberBox();

        var radio = document.getElementsByClassName("reason");
        for (var i = 0; i < radio.length; i++) {
            radio[i].addEventListener("click", function() {
                    displayNumberBox();
                }
            );
        }
    }

    window.onload = startup();
})();
