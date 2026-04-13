document.addEventListener('DOMContentLoaded', function () {
  var mapContainer = document.getElementById('map-container');
  var mapPlaceholder = document.getElementById('map-placeholder');

  if (mapContainer) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.65!2d-80.7332!3d35.3076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a3f9a1be77b9%3A0x0!2sUNC+Charlotte!5e0!3m2!1sen!2sus!4v1700000000000';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.style.cssText = 'display:block; width:100%; height:260px; border:none;';
      iframe.title = 'University No Money Barber location map';

      if (mapPlaceholder) {
        mapContainer.replaceChild(iframe, mapPlaceholder);
      } else {
        mapContainer.appendChild(iframe);
      }
    }, 800);
  }

  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    var isValid = true;

    var nameVal = document.getElementById('name').value.trim();
    if (nameVal === '') {
      showError('name-error', 'Please enter your full name.');
      isValid = false;
    } else if (!/^[A-Za-z\s'-]+$/.test(nameVal)) {
      showError('name-error', 'Name should contain letters only.');
      isValid = false;
    }

    var emailVal = document.getElementById('email').value.trim();
    if (emailVal === '') {
      showError('email-error', 'Please enter your email address.');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      showError('email-error', 'Please enter a valid email address.');
      isValid = false;
    }

    var phoneVal = document.getElementById('phone').value.trim();
    var digitsOnly = phoneVal.replace(/\D/g, '');
    if (phoneVal === '') {
      showError('phone-error', 'Please enter your phone number.');
      isValid = false;
    } else if (digitsOnly.length !== 10) {
      showError('phone-error', 'Phone number must be exactly 10 digits.');
      isValid = false;
    }

    var dateVal = document.getElementById('appt-date').value;
    if (dateVal === '') {
      showError('date-error', 'Please select a preferred appointment date.');
      isValid = false;
    } else {
      var today = new Date();
      today.setHours(0, 0, 0, 0);

      var selectedDate = new Date(dateVal + 'T00:00:00');
      if (selectedDate <= today) {
        showError('date-error', 'Please select a future date (tomorrow or later).');
        isValid = false;
      }
    }

    var msgVal = document.getElementById('message').value.trim();
    if (msgVal === '') {
      showError('msg-error', 'Please enter a message.');
      isValid = false;
    } else if (msgVal.length < 10) {
      showError('msg-error', 'Message must be at least 10 characters long.');
      isValid = false;
    }

    if (isValid) {
      var successDiv = document.getElementById('form-success');
      if (successDiv) {
        successDiv.classList.add('visible');
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    }
  });

  function showError(id, message) {
    var el = document.getElementById(id);
    if (el) {
      el.textContent = message;
      el.classList.add('visible');
    }
  }

  function clearErrors() {
    form.querySelectorAll('.form-error').forEach(function (el) {
      el.classList.remove('visible');
    });

    var success = document.getElementById('form-success');
    if (success) {
      success.classList.remove('visible');
    }
  }
});