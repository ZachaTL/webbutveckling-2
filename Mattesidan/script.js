function calculatePQ() {
    let pInput = parseFloat(document.getElementById("pInput").value);
    let qInput = parseFloat(document.getElementById("qInput").value);

    let PQresult1 = - pInput / 2 + Math.sqrt((pInput / 2) ** 2 - qInput);
    let PQresult2 = - pInput / 2 - Math.sqrt((pInput / 2) ** 2 - qInput);

    document.getElementById("PQresult1").textContent = "x1 = " + PQresult1;
    document.getElementById("PQresult2").textContent = "x2 = " + PQresult2;
}
function cCalculate() {
    let aInput_c = parseFloat(document.getElementById("aInput_c").value) ** 2;
    let bInput_c = parseFloat(document.getElementById("bInput_c").value) ** 2;

    let cResult_sqrt = aInput_c + bInput_c;
    let cResult = Math.sqrt(cResult_sqrt);

    document.getElementById("cResult").textContent = cResult;
}
function aCalculate() {
    let bInput_a = parseFloat(document.getElementById("bInput_a").value) ** 2;
    let cInput_a = parseFloat(document.getElementById("cInput_a").value) ** 2;

    let aResult_sqrt = cInput_a - bInput_a;
    let aResult = Math.sqrt(aResult_sqrt);

    document.getElementById("aResult").textContent = aResult;
}
function bCalculate() {
    let aInput_b = parseFloat(document.getElementById("aInput_b").value) ** 2;
    let cInput_b = parseFloat(document.getElementById("cInput_b").value) ** 2;

    let bResult_sqrt = cInput_b - aInput_b;
    let bResult = Math.sqrt(bResult_sqrt);

    document.getElementById("bResult").textContent = bResult;
}
function kmCalculate() {
    let x1Input = parseFloat(document.getElementById("x1Input").value)
    let x2Input = parseFloat(document.getElementById("x2Input").value)
    let y1Input = parseFloat(document.getElementById("y1Input").value)
    let y2Input = parseFloat(document.getElementById("y2Input").value)

    let deltaY = y2Input - y1Input
    let deltaX = x2Input - x1Input

    let kResult = deltaY / deltaX
    let mResult = y1Input - kResult * x1Input

    document.getElementById("kResult").textContent = kResult;
    document.getElementById("mResult").textContent = mResult;
}