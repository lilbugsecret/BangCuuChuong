let text = "";
let display = document.getElementById("display");
text += "<table border = '1'>";
for (let j = 1; j <= 10; j++) {
  text += "<tr>";

  for (let i = 2; i < 10; i++) {
    text += "<td>" + i + " x " + j + " = " + i * j + "</td>";
  }
  text += "</tr>";
}
text += "</table>";

display.innerHTML = text;
