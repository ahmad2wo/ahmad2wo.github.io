document.getElementById("generateJSON").addEventListener("click", () => {
  const data = {
    first_name: document.getElementById("firstName").value,
    last_name: document.getElementById("lastName").value,
    personal_statement: document.getElementById("personal").value
  };

  document.querySelector("main").innerHTML = `
    <h2>Introduction JSON</h2>

    <pre><code>${JSON.stringify(data, null, 2)}</code></pre>

    <a href="intro_form.html">Reset</a>
  `;
});