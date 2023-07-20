document.getElementById("generate-btn").addEventListener("click", function() {
    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
    var bgColor = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
    document.body.style.background = bgColor;
    document.getElementById("copy-text").textContent = "background-image: " + bgColor;
});

document.getElementById("copy-text").addEventListener("click", function() {
    var text = document.getElementById("copy-text").textContent;
    var tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Copied to clipboard!");
});

