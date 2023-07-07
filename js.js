const mainEl = document.querySelector('.main');

const passwordEl = document.createElement('input');
passwordEl.classList.add('password');
passwordEl.setAttribute('placeholder', 'Your new password');
passwordEl.addEventListener('focus', function(e) {
  passwordEl.select();
  document.execCommand('copy');
});

const generateBtn = document.createElement('button');
generateBtn.classList.add('password-button');
generateBtn.innerText = 'Generate';
generateBtn.addEventListener('click', function(e) {
  const passwordLength = 13;
  const password = generatePassword(passwordLength);
  passwordEl.value = password;
});

const copyBtn = document.createElement('button');
copyBtn.classList.add('password-button');
copyBtn.innerText = 'Copy';
copyBtn.addEventListener('click', function(e) {
  passwordEl.select();
  document.execCommand('copy');
});

function generatePassword(passwordLength) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
  let randomString = '';

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    randomString += chars[randomNumber];
  }

  return randomString;
}

const buttonsWrapper = document.createElement('div');
buttonsWrapper.classList.add('buttons-wrapper');
buttonsWrapper.appendChild(generateBtn);
buttonsWrapper.appendChild(copyBtn);

mainEl.appendChild(passwordEl);
mainEl.appendChild(buttonsWrapper);
