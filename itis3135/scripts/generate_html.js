document.getElementById("generateHTML").addEventListener("click", () => {
  const first = document.getElementById("firstName").value;
  const last = document.getElementById("lastName").value;
  const personal = document.getElementById("personal").value;

  document.querySelector("main").innerHTML = `
    <h2>Introduction HTML</h2>

    <pre><code>
&lt;h3&gt;${first} ${last}&lt;/h3&gt;
&lt;p&gt;${personal}&lt;/p&gt;
    </code></pre>

    <a href="intro_form.html">Reset</a>
  `;
});