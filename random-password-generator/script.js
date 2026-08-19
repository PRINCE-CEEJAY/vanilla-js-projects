const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const input = document.getElementById('input');
const message = document.querySelector('.message');

generateBtn.addEventListener('click', () => {
  createPassword();
});

function createPassword() {
  const chars =
    'abcdefghijklmnopqrstuvwxyz!@#$%^&*()[]{}ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const passwordLength = 14;

  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    let randomChar = Math.floor(Math.random() * chars.length);

    password += chars.substring(randomChar, randomChar + 1);
  }

  input.value = password;
}

copyBtn.addEventListener('click', handleCopying);

function handleCopying() {
  if (!input.value) {
    showMessage('Nothing to Copy!');
    return;
  }
  input.select();
  input.setSelectionRange(0, 999);
  navigator.clipboard.writeText(input.value);
  showMessage(`${input.value} copied!`);
}

function showMessage(text) {
  message.classList.add('message');
  message.innerText = text;
  setTimeout(() => {
    message.classList.add('hide_message');
  }, 1000);
}

// message.innerText = 'message';
