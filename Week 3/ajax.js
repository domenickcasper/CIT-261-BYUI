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

function clearCities()
{
    do {
        document.getElementById("cityOfTables").deleteRow(1);
    } while (document.getElementById("cityOfTables").rows.length > 0);
}