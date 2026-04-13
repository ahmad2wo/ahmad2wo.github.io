document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav    = document.getElementById('site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    var isOpen = nav.classList.contains('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  var links = nav.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });
});