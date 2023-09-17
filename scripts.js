var ao = createAjaxObject(); //ao is global variable
function createAjaxObject() {
    var ao = null;
    try {
        ao = new XMLHttpRequest(); //for modern browsers
    } catch (e) {
        try { //for new IE
            ao = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try { //for old browsers
                ao = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("AJAX is not supported by your browser!")
                return false;
            }
        }
    }
    console.log(ao);
    return ao;
}

function Process(id) {
    if (ao.readyState == 4 || ao.readyState == 0) {
        name = document.getElementById(id).value;
        ao.open("POST", "handler.php", true);
        ao.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        console.log(ao.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))
        ao.onreadystatechange = getData;
        ao.send(id+"=" + name);
    }
}

function getData() {

    if (ao.readyState == 4 && ao.status == 200) {
        resp = ao.responseText;
        document.getElementById("result").innerHTML = resp;
    }
}