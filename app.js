const form = document.getElementById('download-form');
const urlInput = document.getElementById('url-input');
const result = document.getElementById('result');

const supportedDomains = ['sciencedirect.com', 'ieee.org'];

function getDomain(url) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return '';
  }
}

function isSupported(domain) {
  return supportedDomains.some((entry) => domain.includes(entry));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = urlInput.value.trim();
  const domain = getDomain(value);

  if (!domain) {
    result.innerHTML = 'Please enter a valid URL.';
    return;
  }

  if (!isSupported(domain)) {
    result.innerHTML = 'This domain is not currently supported by the bot.';
    return;
  }

  result.innerHTML = `
    Supported domain detected: <strong>${domain}</strong>.<br>
    Send this command to your Telegram bot:<br>
    <code>/get ${value}</code>
  `;
});
