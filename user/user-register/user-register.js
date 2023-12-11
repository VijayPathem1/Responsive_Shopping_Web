function submitForm(){
  var nameValue = document.getElementById('js-name').value;
  var emailValue = document.getElementById('js-email').value;
  var passValue = document.getElementById('js-pass').value;
  if(nameValue.trim() !== '' && emailValue.trim() !== '' && passValue !== ''){
    window.location.href = '../../index.html';
    console.log(passValue);
  }
  else{
    alert('Please enter name, email and password before submitting.')
  }
}