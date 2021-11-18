document.getElementById("veld1").addEventListener("click", click1)
document.getElementById("veld2").addEventListener("click", click2)
document.getElementById("veld3").addEventListener("click", click3)
document.getElementById("veld4").addEventListener("click", click4)
document.getElementById("veld5").addEventListener("click", click5)
document.getElementById("veld6").addEventListener("click", click6)
document.getElementById("veld7").addEventListener("click", click7)
document.getElementById("veld8").addEventListener("click", click8)
document.getElementById("veld9").addEventListener("click", click9)

const speler1 = 'url("kruis.svg")'
const speler2 = 'url("cirkel.svg")'

const veld1 = document.getElementById("veld1")
const veld2 = document.getElementById("veld2")
const veld3 = document.getElementById("veld3")
const veld4 = document.getElementById("veld4")
const veld5 = document.getElementById("veld5")
const veld6 = document.getElementById("veld6")
const veld7 = document.getElementById("veld7")
const veld8 = document.getElementById("veld8")
const veld9 = document.getElementById("veld9")

let turn = 0

function click1() {
    if (veld1.style.backgroundImage == "") {
        turn++;
        if (turn % 2 == 0) {
            veld1.style.backgroundImage = speler2
        }
        else {
            veld1.style.backgroundImage = speler1
        }
        check()
    }
}

function click2() {
    if (veld2.style.backgroundImage == "") {
        turn++;
        if (turn % 2 == 0) { veld2.style.backgroundImage = speler2 }
        else { veld2.style.backgroundImage = speler1 }
        check()
    }
}

function click3() {
    if (veld3.style.backgroundImage == "") {
        turn++;
        if (turn % 2 == 0) { veld3.style.backgroundImage = speler2 }
        else { veld3.style.backgroundImage = speler1 }
        check()
    }
}

function click4() {
    if (veld4.style.backgroundImage == "") {
        turn++;
        if (turn % 2 == 0) { veld4.style.backgroundImage = speler2 }
        else { veld4.style.backgroundImage = speler1 }
        check()
    }
}

function click5() {
    if (veld5.style.backgroundImage == "") {
        turn++;
        if (turn % 2 == 0) { veld5.style.backgroundImage = speler2 }
        else { veld5.style.backgroundImage = speler1 }
        check()
    }
}

function click6() {
    if (veld6.style.backgroundImage == "") {
        turn++;
        if (turn % 2 == 0) { veld6.style.backgroundImage = speler2 }
        else { veld6.style.backgroundImage = speler1 }
        check()
    }
}

function click7() {
    if (veld7.style.backgroundImage == "") {
        turn++;
        if (turn % 2 == 0) { veld7.style.backgroundImage = speler2 }
        else { veld7.style.backgroundImage = speler1 }
        check()
    }
}

function click8() {
    if (veld8.style.backgroundImage == "") {
        turn++;
        if (turn % 2 == 0) { veld8.style.backgroundImage = speler2 }
        else { veld8.style.backgroundImage = speler1 }
        check()
    }
}

function click9() {
    if (veld9.style.backgroundImage == "") {
        turn++;
        if (turn % 2 == 0) { veld9.style.backgroundImage = speler2 }
        else { veld9.style.backgroundImage = speler1 }
        check()
    }
}

function check() {

    if (veld1.style.backgroundImage == veld2.style.backgroundImage && veld2.style.backgroundImage  == veld3.style.backgroundImage && veld1.style.backgroundImage != "") {
        win()
    }
     else if (veld4.style.backgroundImage == veld5.style.backgroundImage && veld5.style.backgroundImage  == veld6.style.backgroundImage && veld4.style.backgroundImage != "") {
        win()
    } else if (veld7.style.backgroundImage == veld8.style.backgroundImage && veld8.style.backgroundImage == veld9.style.backgroundImage && veld7.style.backgroundImage != "") {
        win()
    } else if (veld1.style.backgroundImage == veld4.style.backgroundImage && veld4.style.backgroundImage == veld7.style.backgroundImage && veld1.style.backgroundImage != "") {
        win()
    } else if (veld2.style.backgroundImage == veld5.style.backgroundImage && veld5.style.backgroundImage == veld8.style.backgroundImage && veld2.style.backgroundImage != "") {
        win()
    } else if (veld3.style.backgroundImage == veld6.style.backgroundImage && veld6.style.backgroundImage == veld9.style.backgroundImage && veld3.style.backgroundImage != "") {
        win()
    } else if (veld1.style.backgroundImage == veld5.style.backgroundImage && veld5.style.backgroundImage == veld9.style.backgroundImage && veld1.style.backgroundImage != "") {
        win()
    } else if (veld3.style.backgroundImage == veld5.style.backgroundImage && veld5.style.backgroundImage == veld7.style.backgroundImage && veld3.style.backgroundImage != "") {
        win()
    } else if (turn == 9) {
        gelijkspel()
    }
}

function win(){
    if(turn % 2 == 0) {
        document.getElementById("veldContainer").innerHTML += "<p>speler 2 wint!</p>" + "<br> <button onclick='opnieuw()'> Opnieuw </button>"
    }
    else {
        document.getElementById("veldContainer").innerHTML += "<p>speler 1 wint!</p>" + "<br> <button onclick='opnieuw()'> Opnieuw </button>"
    }
}

function gelijkspel() {
    document.getElementById("veldContainer").innerHTML += "<p>Gelijkspel!</p>" + "<br> <button onclick='opnieuw()'> Opnieuw </button>"
}

function opnieuw() {
    location.reload()
}