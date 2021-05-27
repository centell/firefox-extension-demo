/* eslint no-unused-vars:0 */
/* eslint no-undef:0 */
/* eslint no-unused-expressions:0 */

const initialSettings = {
  message: 'hello, extension!',
};

const settingInputs = {
  elMessage: document.querySelector('#message'),
};

const saveOptions = (e) => {
  e.preventDefault();
  browser.storage.sync.set({
    message: document.querySelector('#message').value,
  });
};

const setInit = () => {
  browser.storage.sync.set({
    initialSettings,
  });
};

const clickListener = () => {
  document.addEventListener('click', e => {
    // const a = browser.storage.sync.get("color");
    if (e.target.id === 'save') {
      e.preventDefault();
      document.querySelector('#messageDiv').innerText = e.target.id;
      browser.storage.saveOptions;
    }
    if (e.target.id === 'init') {
      e.preventDefault();
      document.querySelector('#messageDiv').innerText = e.target.id;
      browser.runtime.openOptionsPage();
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  clickListener();
  settingInputs.elMessage.value = initialSettings.message;
});
