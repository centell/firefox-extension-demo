/* eslint no-undef:0 */

const clickListener = () => {
  document.addEventListener('click', e => {
    const message = browser.storage.sync.get('message');
    document.querySelector('#message').innerText = message;
    if (e.target.id === 'optionButton') {
      e.preventDefault();
      document.querySelector('#message').innerText = e.target.id;
      browser.runtime.openOptionsPage();
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  clickListener();
});
