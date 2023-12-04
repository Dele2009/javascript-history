function plus() {
    let a = +document.getElementById('inp1').value;
    let b = +document.getElementById('inp2').value;
    let c = a + b
    document.getElementById('symbol').innerHTML = `+`
    if (isNaN(a) || isNaN(b)) {
        document.getElementById('answer').innerHTML = `invalid value(s) ❌`

        document.getElementById('answer').style.color = 'red'

    }
    else if (!a || !b) {
        document.getElementById('answer').innerHTML = `NULL ( Input value(s) ) ✏`

        document.getElementById('answer').style.color = 'orange'
    }
    else {
        // let a = +document.getElementById('inp1').value;
        // let b = +document.getElementById('inp2').value;


        document.getElementById('answer').innerHTML = `${c}`
        document.getElementById('answer').style.color = 'black'
    }

}
function minus() {
    let a = document.getElementById('inp1').value;
    let b = document.getElementById('inp2').value;
    let c = a - b
    document.getElementById('symbol').innerHTML = `-`
    if (isNaN(a) || isNaN(b)) {
        document.getElementById('answer').innerHTML = `invalid value(s) ❌`

        document.getElementById('answer').style.color = 'red'

    }
    else if (!a || !b) {
        document.getElementById('answer').innerHTML = `NULL ( Input value(s) ) ✏`

        document.getElementById('answer').style.color = 'orange'
    }
    else {
        // let a = +document.getElementById('inp1').value;
        // let b = +document.getElementById('inp2').value;


        document.getElementById('answer').innerHTML = `${c}`
        document.getElementById('answer').style.color = 'black'
    }

}
function divide() {
    let a = document.getElementById('inp1').value;
    let b = document.getElementById('inp2').value;
    let c = a / b
    document.getElementById('symbol').innerHTML = `/`
    if (isNaN(a) || isNaN(b)) {
        document.getElementById('answer').innerHTML = `invalid value(s) ❌`

        document.getElementById('answer').style.color = 'red'

    }
    else if (!a || !b) {
        document.getElementById('answer').innerHTML = `NULL ( Input value(s) ) ✏`

        document.getElementById('answer').style.color = 'orange'
    }
    else {
        // let a = +document.getElementById('inp1').value;
        // let b = +document.getElementById('inp2').value;


        document.getElementById('answer').innerHTML = `${c}`
        document.getElementById('answer').style.color = 'black'
    }

}
function multiply() {
    let a = document.getElementById('inp1').value;
    let b = document.getElementById('inp2').value;
    let c = a * b
    document.getElementById('symbol').innerHTML = `*`
    if (isNaN(a) || isNaN(b)) {
        document.getElementById('answer').innerHTML = `invalid value(s) ❌`

        document.getElementById('answer').style.color = 'red'

    }
    else if (!a || !b) {
        document.getElementById('answer').innerHTML = `NULL ( Input value(s) ) ✏`

        document.getElementById('answer').style.color = 'orange'
    }
    else {
        // let a = +document.getElementById('inp1').value;
        // let b = +document.getElementById('inp2').value;


        document.getElementById('answer').innerHTML = `${c}`
        document.getElementById('answer').style.color = 'black'
    }

}