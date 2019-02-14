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

function resetFile() {
    document.getElementById("pJSON").value = "json.txt";
}

function getFile()
{
    var xhrStudent = new XMLHttpRequest ();
    xhrStudent.onreadystatechange = function ()
    {
        // needs to meet BOTH of these
        if (this.readyState == 4 && this.status == 200)
        {
            var sParse = JSON.parse(this.responseText);
            var id = document.getElementById("tablesOfStudents");
            var s = 1;

            for (var i = 0; i < sParse.students.length; ++i)
            {
                // Making sure each cell has one of the items in it correctly
                let row = id.insertRow(s);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                cell1.innerHTML = sParse.students[i].first;
                cell2.innerHTML = sParse.students[i].last;
                cell3.innerHTML = sParse.students[i].address.city +  " " +
                                  sParse.students[i].address.state + " " +
                                  sParse.students[i].address.zip;
                cell4.innerHTML = sParse.students[i].major;
                cell5.innerHTML = sParse.students[i].gpa;
                ++s;
            }
        }
    };

    var student = document.getElementById("pJSON").value;
    var student2 = "../" + student;
    xhrStudent.open("GET", student2, true);
    xhrStudent.send(null);
}

function clearFile() {
    do {
        document.getElementById("tablesOfStudents").deleteRow(1);
    } while (document.getElementById("tablesOfStudents").rows.length > 0);
}