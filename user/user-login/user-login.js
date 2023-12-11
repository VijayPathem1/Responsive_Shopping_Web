function submitForm() {
  var emailValue = document.getElementById('js-email').value;
  var passwordValue = document.getElementById('js-password').value;

  if (emailValue.trim() !== '' && passwordValue.trim() !== '') {
      // Redirect to index.html in the parent folder
      window.location.href = '../../index.html';
  } else {
      alert('Please enter both email and password before submitting.');
  }
}