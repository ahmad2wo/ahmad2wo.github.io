const form = document.getElementById("form");
const clearBtn = document.getElementById("clearBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const imageCaption = document.getElementById("imageCaption").value;
  const introParagraph = document.getElementById("personal").value;
  const personalBackground = document.getElementById("personalBackground").value;
  const professionalBackground = document.getElementById("professionalBackground").value;
  const academicBackground = document.getElementById("academicBackground").value;
  const subjectBackground = document.getElementById("subjectBackground").value;
  const primaryComputer = document.getElementById("primaryComputer").value;
  const backupComputer = document.getElementById("backupComputer").value;
  const funnyThing = document.getElementById("funnyThing").value;
  const shareMore = document.getElementById("shareMore").value;
  const quote = document.getElementById("quote").value;
  const quoteAuthor = document.getElementById("quoteAuthor").value;

  const courses = [
    document.getElementById("course1").value,
    document.getElementById("course2").value,
    document.getElementById("course3").value,
    document.getElementById("course4").value,
    document.getElementById("course5").value,
    document.getElementById("course6").value
  ];

  const imageInput = document.getElementById("image");
  let imageSrc = "images/profile.jpg";

  if (imageInput.files && imageInput.files[0]) {
    imageSrc = URL.createObjectURL(imageInput.files[0]);
  }

  document.querySelector("main").innerHTML = `
    <h2>Introduction Form</h2>

    <figure>
      <img src="${imageSrc}" alt="Photo of ${firstName} ${lastName}" width="300">
      <figcaption>${imageCaption}</figcaption>
    </figure>

    <p>
      ${introParagraph}
    </p>

    <ul>
      <li><strong>Personal Background:</strong> ${personalBackground}</li>
      <li><strong>Professional Background:</strong> ${professionalBackground}</li>
      <li><strong>Academic Background:</strong> ${academicBackground}</li>
      <li><strong>Background in Subject:</strong> ${subjectBackground}</li>
      <li><strong>Primary Work Computer &amp; Location:</strong> ${primaryComputer}</li>
      <li><strong>Backup Work Computer &amp; Location Plan:</strong> ${backupComputer}</li>
      <li><strong>Funny/Interesting Thing About Me:</strong> ${funnyThing}</li>
      <li><strong>I'd Also Like to Share:</strong> ${shareMore}</li>
    </ul>

    <h3>Current Courses</h3>
    <ol>
      <li>Spring 2026
        <ol>
          ${courses.map(course => `<li>${course}</li>`).join("")}
        </ol>
      </li>
    </ol>

    <blockquote>
      “${quote}”
      <cite>— ${quoteAuthor}</cite>
    </blockquote>

    <p>
      <a href="intro_form.html">Reset</a>
    </p>
  `;
});

clearBtn.addEventListener("click", function () {
  document.querySelectorAll("form input[type='text'], form textarea").forEach(function (field) {
    field.value = "";
  });

  document.getElementById("image").value = "";
});