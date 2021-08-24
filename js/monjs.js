var btnclear = document.getElementById('btnc');
var btntotal = document.getElementById('btntot');
var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var btnneg = document.getElementById('btn+-');
var btndecimal = document.getElementById('btn.');
var btndiv = document.getElementById('btndiv');
var btnmul = document.getElementById('btnm');
var btnsous = document.getElementById('btns');
var btnadd = document.getElementById('btnadd');
var changeSigne = document.getElementById('btn+-');
var total = 0;
var signe = "-";
var resultats = document.getElementById('resultats');
var calcul = document.getElementById('calculs');

btnclear.onclick = function() {
    total = 0;
    calcul.innerHTML = ""; // efface le resultat
    resultats.innerHTML = "";

}
btn0.onclick = function() {
    calcul.innerHTML += "0";

}
btn1.onclick = function() {
    calcul.innerHTML += "1";

}
btn2.onclick = function() {
    calcul.innerHTML += "2";

}
btn3.onclick = function() {
    calcul.innerHTML += "3";

}
btn4.onclick = function() {
    calcul.innerHTML += "4";

}
btn5.onclick = function() {
    calcul.innerHTML += "5";

}
btn6.onclick = function() {
    calcul.innerHTML += "6";

}
btn7.onclick = function() {
    calcul.innerHTML += "7";

}
btn8.onclick = function() {
    calcul.innerHTML += "8";

}
btn9.onclick = function() {
    calcul.innerHTML += "9";
}
btndecimal.onclick = function() {
    calcul.innerHTML += ".";
}
btnneg.onclick = function() {}

btndiv.onclick = function() {
    calcul.innerHTML += "/";
}

btnmul.onclick = function() {
    calcul.innerHTML += "*";
}
btnsous.onclik = function() {
    calcul.innerHTML += "-";
}
btnadd.onclick = function() {
    calcul.innerHTML += "+";
}

// resultat
btntot.onclick = function() {
    total = eval(calcul.innerHTML)
    total = total.toFixed(2);
    resultats.innerHTML = total;
    overflow();
}

changeSigne.onclick = function() {
    total = inter + "(" + eval(calcul.innerHTML) + ")";
}

function overflow() {
    if (resultats.innerHTML.length > 12) {
        document.getElementById("resultats").innerHTML = "overflow";
    }
}