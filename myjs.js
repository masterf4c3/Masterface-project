let r = 0;
let g = 0;
let b = 0;
let rand = 0;

let check1 = false;
let check2 = false;
let check3 = false;


function randomize(){
    rr = Math.trunc(Math.random() * 256); 
    gg = Math.trunc(Math.random() * 256);
    bb = Math.trunc(Math.random() * 256);
    rand++;
    resetList();
    fill(rr,gg,bb);
}

function fill(rr, gg, bb) {
    document.getElementById("red").value = rr;
    document.getElementById("green").value = gg;
    document.getElementById("blue").value = bb;
}

function spanerr(spanid, msg){
    document.getElementById(spanid).innerHTML = msg;
}

function rgbfill(){
    var rr = 0;
    var gg = 0;
    var bb = 0;

    var val = document.getElementById("drop").value;

    if (val == "brown"){
        rr = 88;
        gg = 57;
        bb = 39;
    }
    if (val == "orange"){
        rr = 255;
        gg = 165;
        bb = 0;
    }
    if (val == "purple"){
        rr = 128;
        gg = 0;
        bb = 128;
    }
    if (val == "yellow"){
        rr = 255;
        gg = 255;
        bb = 0;
    }

    fill(rr, gg, bb);
}

function resetList() {
    document.getElementById("drop").value = "empty";
}

function validate() {
    var noerr = true;
    var c1 = document.getElementById("check1").checked;
    var c2 = document.getElementById("check2").checked;
    var c3 = document.getElementById("check3").checked;
    var rr = document.getElementById("red").value;
    var gg = document.getElementById("green").value;
    var bb = document.getElementById("blue").value;


    if (c1 == false && c2 == false && c3 == false) {
        spanerr("checkerr1", "at least one checkbox must be checked");
        spanerr("checkerr2", "at least one checkbox must be checked");
        spanerr("checkerr3", "at least one checkbox must be checked");
        noerr = false;
    }
    else{
        spanerr("checkerr1", "");
        spanerr("checkerr2", "");
        spanerr("checkerr3", "");
    }

    if (rr == '') {
        document.getElementById("red").style.backgroundColor = "red";
        spanerr("rederr", "empty or invalid input");
        noerr = false;
    }
    else if (rr < 0 || rr > 255) {
        
        document.getElementById("red").style.backgroundColor = "red";
        spanerr("rederr", "value must be between 0 and 255");
        noerr = false;
    }
    else{
        document.getElementById("red").style.backgroundColor = "white";
        spanerr("rederr", "");
    }

    
    if (gg == '') {
        document.getElementById("green").style.backgroundColor = "red";
        spanerr("greenerr", "empty or invalid input");
        noerr = false;
    }
    else if (gg < 0 || gg > 255) {
        document.getElementById("green").style.backgroundColor = "red";
        spanerr("greenerr", "value must be between 0 and 255");
        noerr = false;
    }
    else{
        document.getElementById("green").style.backgroundColor = "white";
        spanerr("greenerr", "");
    }


    if (bb == '') {
        document.getElementById("blue").style.backgroundColor = "red";
        spanerr("blueerr", "empty or invalid input");
        noerr = false;
    }
    else if (bb < 0 || bb > 255) {
        document.getElementById("blue").style.backgroundColor = "red";
        spanerr("blueerr", "value must be between 0 and 255");
        noerr = false;
    }
    else {
        document.getElementById("blue").style.backgroundColor = "white";
        spanerr("blueerr", "");
    }

    return noerr;
}

function rgbToHex(rr, gg, bb) {
 
    let red = rr.toString(16).padStart(2, '0'); 
    let green = gg.toString(16).padStart(2, '0'); 
    let blue = bb.toString(16).padStart(2, '0'); 
   
    return '#' + red + green + blue; 
}

function mix(){
    if (validate()){
        var noerr = true;
        check1 = document.getElementById("check1").checked;
        check2 = document.getElementById("check2").checked;
        check3 = document.getElementById("check3").checked;
        r = document.getElementById("red").value;
        g = document.getElementById("green").value;
        b = document.getElementById("blue").value;
        drop = document.getElementById("drop").value;
        


        

        var result = "rgb: ("+ r + ", " + g + ", " + b + ")\n";

        if (check1 == false){
            result += "hid red, ";
            r = 0;
        }
        else {
            result += "shown red, ";
        }

        if (check2 == false){
            result += "hid green, ";
            g = 0;
        }
        else {
            result += "shown green, ";
        }

        if (check3 == false){
            result += "hid blue\n";
            b = 0;
        }
        else {
            result += "shown blue\n";
        }

        if (drop != "empty"){
            result+= "you chose "+ drop + " from the drop-down list.\n"
        }

        result += "randomize pressed "+ rand + " times.\n";
        rand = 0;

        result += "===> rgb to hex: " + rgbToHex(parseInt(r), parseInt(g), parseInt(b)) + "\n";

        document.getElementById("result").innerHTML = result;
        document.getElementById("color").style.backgroundColor =rgbToHex(parseInt(r), parseInt(g), parseInt(b));
    }
}

