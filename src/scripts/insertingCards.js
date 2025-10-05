const cardsData = [
    {
        name: "Caltrack",
        description: "Caltrack is a calorie tracking app that helps users monitor their daily caloric intake and expenditure.",
        photo: "caltrack.png",
        link: "https://www.cal-track.shop",
        repo: "https://github.com/Eduardobarrera487/CalTrack",
        technologies: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Supabase", icon: "https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-icon.svg" },
        ]
    },
    {
        name: "CRM ClinMed",
        description: "CRM ClinMed is a customer relationship management system tailored for a local clinic to manage patient interactions and data.",
        photo: "clinmed.jpg",
        link: "https://www.cal-track.shop",
        repo: "",
        technologies: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
        ]
    },

    {
        name: "Forum App",
        description: "A forum application that allows users to create questions, post answers and comments, and it's linked to my personal blog.",
        photo: "foro.png",
        link: "",
        repo: "https://github.com/bradlygutierrez/Laravel-LiveWire-Forum-project",
        technologies: [
            { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg" },
            { name: "Livewire", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original.svg" }
        ]
    }
];

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
      <a href="${cardData.link}" target="_blank">${cardData.repo.length !== 0 ? 'Live Demo' : ''}</a>
    </p>
    <p class="card-links">
      <a href="${cardData.repo}" target="_blank">Source Code</a>
    </p>
  `;
    cardsContainer.appendChild(card);
});
