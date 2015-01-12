var balanceEl = document.querySelector('.header-logo-account__balance');

balanceEl.dataset.balance = balanceEl.textContent;
balanceEl.dataset.isDisplay = '0';

balanceEl.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (this.dataset.isDisplay === '1') {
    this.textContent = 'Balance';
    this.dataset.isDisplay = '0';
  } else {
    this.textContent = balanceEl.dataset.balance;
    this.dataset.isDisplay = '1';
  }

}, false);

balanceEl.textContent = 'Balance';
balanceEl.style.display = 'inline';