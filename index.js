const mainElement = document.getElementById('main');
mainElement.remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.textContent = 'Rafaelo Gjergji is the champion';

document.body.appendChild(newHeader);
