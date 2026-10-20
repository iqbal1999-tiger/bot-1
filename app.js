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
    result.textContent = 'Please enter a valid URL.';
    return;
  }

  if (!isSupported(domain)) {
    result.textContent = 'This domain is not currently supported by the bot.';
    return;
  }

  result.textContent = '';

  const detectedText = document.createElement('p');
  detectedText.textContent = `Supported domain detected: ${domain}.`;

  const commandText = document.createElement('p');
  commandText.textContent = 'Send this command to your Telegram bot:';

  const command = document.createElement('code');
  command.textContent = `/get ${value}`;

  result.append(detectedText, commandText, command);
});
