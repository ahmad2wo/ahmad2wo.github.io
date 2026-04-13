document.addEventListener('DOMContentLoaded', function () {

  var lightbox    = document.getElementById('lightbox');
  var lbImg       = document.getElementById('lightbox-img');
  var lbCaption   = document.getElementById('lightbox-caption');
  var lbCounter   = document.getElementById('lightbox-counter');
  var lbClose     = document.getElementById('lightbox-close');
  var lbPrev      = document.getElementById('lb-prev');
  var lbNext      = document.getElementById('lb-next');

  var visibleItems = [];
  var currentIndex = 0;

  function buildVisibleItems() {
    visibleItems = Array.from(
      document.querySelectorAll('#gallery-grid .gallery-item:not([style*="display: none"])')
    );
  }

  function openLightbox(index) {
    buildVisibleItems();
    if (visibleItems.length === 0) return;
    currentIndex = index;
    var item = visibleItems[currentIndex];
    var img = item.querySelector('img');
    var caption = item.getAttribute('data-caption') || '';

    if (lbImg && img) { lbImg.src = img.src; lbImg.alt = caption; }
    if (lbCaption) lbCaption.textContent = caption;
    if (lbCounter) lbCounter.textContent = (currentIndex + 1) + ' / ' + visibleItems.length;
    if (lightbox) lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (lightbox) lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function prevItem() {
    buildVisibleItems();
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    openLightbox(currentIndex);
  }

  function nextItem() {
    buildVisibleItems();
    currentIndex = (currentIndex + 1) % visibleItems.length;
    openLightbox(currentIndex);
  }

  var galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(function (item) {
    item.setAttribute('tabindex', '0');
    item.addEventListener('click', function () {
      buildVisibleItems();
      var vIdx = visibleItems.indexOf(item);
      openLightbox(vIdx >= 0 ? vIdx : 0);
    });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
    });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev)  lbPrev.addEventListener('click', prevItem);
  if (lbNext)  lbNext.addEventListener('click', nextItem);

  if (lightbox) {
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
  }

  document.addEventListener('keydown', function (e) {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')    closeLightbox();
    if (e.key === 'ArrowLeft')  prevItem();
    if (e.key === 'ArrowRight') nextItem();
  });

  var filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      galleryItems.forEach(function (item) {
        item.style.display = (filter === 'all' || item.getAttribute('data-category') === filter) ? '' : 'none';
      });
    });
  });

});