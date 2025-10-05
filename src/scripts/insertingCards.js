import cardsData from './cardsData.json';

const cardsContainer = document.querySelector('.cards');
cardsData.forEach(cardData => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2 class="card-title">${cardData.name}</h2>
    <img src="${cardData.photo}" alt="${cardData.name}" class="card-image"/>
    <p class="card-description">${cardData.description}</p>
    <div class="card-technologies">
      ${cardData.technologies.map(tech => `
        <img src="${tech.icon}" alt="${tech.name}" title="${tech.name}" class="tech-icon">
      `).join('')}
    </div>
    <p class="card-links">
      <a href="${cardData.link}" target="_blank">${cardData.link.length !== 0 ? 'Live Demo' : ''}</a>
    </p>
    <p class="card-links">
      <a href="${cardData.repo}" target="_blank">Source Code</a>
    </p>
  `;
  cardsContainer.appendChild(card);
});
