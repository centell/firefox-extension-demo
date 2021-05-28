/* eslint no-unused-vars:0 */
/* eslint no-undef:0 */
/* eslint no-unused-expressions:0 */
const defaultParams = {
  message: 'Hello, extension!',
};

const saveOptions = (e) => {
  e.preventDefault();
  browser.storage.sync.set({
    message: document.querySelector('#message').value,
  });
};

const restoreOptions = () => {
  const setCurrentOptions = (result) => {
    document.querySelector('#message').value = result.message || defaultParams.message;
  };

  const onError = (err) => {
    console.log(`Error: ${err}`);
  };

  const gettingMessage = browser.storage.sync.get('message');
  gettingMessage.then(setCurrentOptions, onError);
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);
