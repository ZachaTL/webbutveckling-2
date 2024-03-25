function submitInformation() {

    
    var summonerName = document.getElementById("name").value;
    var reason = document.getElementById("reasons").value;
    var explanation = document.getElementById("reason_text").value;

    if (summonerName && reason && explanation) {
        localStorage.setItem("summonerName", summonerName);
        localStorage.setItem("reason", reason);
        localStorage.setItem("explanation", explanation);
    } else {
        alert("Please fill in all fields.");
        event.preventDefault();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var summonerName = localStorage.getItem("summonerName");
    var reason = localStorage.getItem("reason");
    var explanation = localStorage.getItem("explanation");

    document.getElementById("summonerName").innerText = summonerName;
    document.getElementById("reason").innerText = reason;
    document.getElementById("explanation").innerText = explanation;

    localStorage.clear();
});
