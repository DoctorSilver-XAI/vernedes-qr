const button = document.querySelector('[data-copy-address]');
const status = document.querySelector('#copy-status');
if (button && status) {
  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copyAddress);
      status.textContent = button.dataset.success;
    } catch {
      status.textContent = button.dataset.failure;
    }
  });
}
