document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav    = document.getElementById('site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { nav.classList.remove('open'); });
  });
});