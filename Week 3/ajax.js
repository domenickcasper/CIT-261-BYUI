function getCities()
{
    // create the XMLHttpRequest
    var xhrCountry
    if (window.XMLHttpRequest) {
       xhrCountry = new XMLHttpRequest();
    } else {
        xhrCountry = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    // register the receiver function as the handler
    xhrCountry.onreadystatechange = function ()
        {
            // needs to meet BOTH of these requirements 
            if (this.readyState == 4 && this.status == 200)
                {
                    document.getElementById("cityOfTables").innerHTML = this.responseText;
                }
        };
    var choiceCountry = Number(document.getElementById('favoriteCountry').value);
    var theCity = 0;
    switch (choiceCountry) {
        case 1:
            theCity = "usa.txt";
            break;
        case 2:
            theCity = "canada.txt";
            break;
        case 3:
            theCity = "mexico.txt";
            break;
        case 4:
            theCity = "russia.txt";
            break;
    }
    xhrCountry.open("GET", theCity, true);
    xhrCountry.send(null);
}

function getJsonFromServer() {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("demoo").innerHTML = obj.name;
            document.getElementById("demo1").innerHTML = JSON.stringify(obj.sodas);

            var x;
            for (x =0; x < obj.sodas.length; x++) {
                document.getElementById("demo2").innerHTML += obj.sodas[x].brand + " makes " + obj.sodas[x].name + "<br>";
                
        }
        }
    };
    xmlhttp.open("GET", "https://domenickcasper.github.io/CIT-261-BYUI/Week%203/domenick.txt", true);
    xmlhttp.send();
}
