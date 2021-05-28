/* eslint no-undef:0 */
const clickListener = () => {
  document.addEventListener('click', e => {
    if (e.target.id === 'optionButton') {
      e.preventDefault();
      browser.runtime.openOptionsPage();
    }
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  clickListener();
  const onError = (err) => {
    console.log(`Error: ${err}`);
  };
  const init = (options) => {
    console.log('#########');
    console.log(options?.message);
    let message = 'foo';
    if (options.message) message = options.message;
    console.log(message);
    document.querySelector('#message').innerText = message;
  };
  const getting = browser.storage.sync.get('message');
  getting.then(init, onError);
});
