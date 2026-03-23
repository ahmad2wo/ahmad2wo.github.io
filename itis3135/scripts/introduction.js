const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const first = document.getElementById("firstName").value;
  const last = document.getElementById("lastName").value;
  const personal = document.getElementById("personal").value;

  document.querySelector("main").innerHTML = `
    <h2>Introduction Form</h2>
    <h3>${first} ${last}</h3>
    <p>${personal}</p>
    <a href="intro_form.html">Reset</a>
  `;
});

// CLEAR BUTTON
document.getElementById("clearBtn").addEventListener("click", () => {
  document.querySelectorAll("input, textarea").forEach(el => el.value = "");
});