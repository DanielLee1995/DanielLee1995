(function () {
    /** Add any JavaScript you need to this file. */

    var beds = []
    var seating = [];
    var surfaces = [];
    var bedImages = ["bed.jpg", "bed2.jpg", "bed3.jpg", "bed4.jpg"];
    var seatingImages = ["bench.jpg", "chair.jpg", "chair2.jpg", "sofa.jpg"];
    var surfacesImages = ["coffeetable.jpg", "Dresser.jpg", "dresser2.jpg", "mediaconsole.jpg", "mediaconsole2.jpg", "nighstand.jpg", "sideboard.jpg", "sideboard2.jpg", "tvstand.jpg"];

    function createCategories() {
        for (var i = 0; i < bedImages.length; i++) {
            beds.push(createImage(bedImages[i]));
        }
        addText(beds[0], "Hunter", "Queen-sized bed. Platform style. Made with walnut veneer.", "Bed", "$1499");
        addText(beds[1], "Harper", "Queen-sized bed. Platform style. Linen fabric.", "Bed", "$1399");
        addText(beds[2], "Mikkel", "Queen-sized bed. Mid-century. Made with elm veneer.", "Bed", "$1499");
        addText(beds[3], "Charlotte", "Queen-sized bed. Storage. Made with walnut veneer and leather.", "Bed", "$1719");
        for (var i = 0; i < seatingImages.length; i++) {
            seating.push(createImage(seatingImages[i]));
        }
        addText(seating[0], "Nelson", "48\" wide bench. Made with maple hardwood.", "Seating", "$559");
        addText(seating[1], "PK31", "Armchair. Made with Palermo Caramel leather.", "Seating", "$1239");
        addText(seating[2], "Luca", "Armchair. Made with Palermo Black lather.", "Seating", "$1079");
        addText(seating[3], "Dresden", "Sectional Sofa. Left-hand facing. Made with leather.", "Seating", "$3299");
        for (var i = 0; i < surfacesImages.length; i++) {
            surfaces.push(createImage(surfacesImages[i]));
        }
        addText(surfaces[0], "Truman", "Hidden Storage. Made with walnut veneer and frosted glass.", "Surfaces", "$749");
        addText(surfaces[1], "Asher", "Wide Dresser. Made with walnut veneer.", "Surfaces", "$1399");
        addText(surfaces[2], "Xander", "Wide Dresser. Made with walnut veneer.", "Surfaces", "$1199");
        addText(surfaces[3], "Bennett", "83\" Long Media Console. Made with walnut veneer.", "Surfaces", "$1151");
        addText(surfaces[4], "Winston", "TV Stand. made with walnut veneer. White Laquer finish.", "Surfaces", "$999");
        addText(surfaces[5], "Margot", "Nightstand. Walnut legs. White Laquer finish.", "Surfaces", "$319");
        addText(surfaces[6], "Andrej", "Sideboard. Made with walnut veneer. White laquer doors", "Surfaces", "$1299");
        addText(surfaces[7], "Augustus", "Sideboard. Made with walnut veneer. Grey laquer doors. White ceramic top.", "Surfaces", "$1449");
        addText(surfaces[8], "Truman", "Media Console. Made with walnut veneer. White Laquer finish.", "Surfaces", "$1199");
    }

    function addText(div, title, desc, cat, price) {
        var p, text;
        var strings = [title, desc, cat, price];

        for (var i = 0; i < strings.length; i++) {
            p = document.createElement("p");
            if (i == 0) {
                p.id = "itemTitle";
            }
            text = document.createTextNode(strings[i]);
            p.appendChild(text);
            div.appendChild(p);
        }
    }

    function createImage(fileName) {
        var div = document.createElement("div");
        div.id = "item";
        var image = document.createElement("img");
        image.align = "left";
        image.src = "images/" + fileName;
        div.appendChild(image);

        return div;
    }

    function showBeds(body) {
        for (var i = 0; i < beds.length; i++)
            body.appendChild(beds[i]);
    }

    function showSeats(body) {
        for (var i = 0; i < seating.length; i++)
            body.appendChild(seating[i]);
    }

    function showSurfaces(body) {
        for (var i = 0; i < surfaces.length; i++)
            body.appendChild(surfaces[i]);
    }

    function showAll() {
        var body = document.getElementById("mainBody");
        showBeds(body);
        showSeats(body);
        showSurfaces(body);
    }

    function startup() {
        createCategories();
        showAll();

        var buttons = document.getElementsByClassName('all');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                var body = document.getElementById("mainBody");
                document.getElementById("subtitle").innerHTML = "All"
                body.innerHTML = "";
                showAll(body);
            });
        }
        var buttons = document.getElementsByClassName('seating');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                var body = document.getElementById("mainBody");
                document.getElementById("subtitle").innerHTML = "Seating"
                body.innerHTML = "";
                showSeats(body);
            });
        }
        var buttons = document.getElementsByClassName('beds');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                var body = document.getElementById("mainBody");
                document.getElementById("subtitle").innerHTML = "Beds"
                body.innerHTML = "";
                showBeds(body);
            });
        }
        var buttons = document.getElementsByClassName('tables');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                var body = document.getElementById("mainBody");
                document.getElementById("subtitle").innerHTML = "Surfaces"
                body.innerHTML = "";
                showSurfaces(body);
            });
        }

    }

    window.onload = startup();
})();
