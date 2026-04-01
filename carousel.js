const carousel = document.getElementById('carousel');
let currentIndex = 0;

const avis = [
    { texte: "Je suis très content de ma porte Fichet. Installation très rapide et professionnel.", auteur: "Chris Ben" },
    { texte: "Intervention très rapide pour déblocage de porte. Efficace, sympa et honnête, je recommande.", auteur: "Severine P" },
    { texte: "Équipe super gentille, réactive et efficace !", auteur: "Raphael ISRAEL" },
    { texte: "Intervention rapide et efficace. Le serrurier a été professionnel et bienveillant.", auteur: "Elsa Trombitas" },
    { texte: "Très agréables, on se sent en confiance. Très efficaces.", auteur: "L. C." },
    { texte: "Super professionnel, merci beaucoup pour la rapidité!", auteur: "Guillaume Grumelart" },
    { texte: "Très réactif pour solutionner mon problème de cylindre.", auteur: "romain cheron" },
    { texte: "Accueil téléphonique chaleureux et intervention très professionnelle.", auteur: "cynthia pellier" },
    { texte: "Réactivité et professionnalisme exceptionnels.", auteur: "Momo beebee" },
    { texte: "Tarifs corrects et intervention rapide, je recommande.", auteur: "A B" }
];

avis.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('avis-slide');
    div.innerHTML = `<p>"${item.texte}"</p><span>- ${item.auteur}</span>`;
    carousel.appendChild(div);
});

const slides = document.querySelectorAll('.avis-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(index) { carousel.style.transform = `translateX(-${index * 100}%)`; }

nextBtn.addEventListener('click', () => { currentIndex = (currentIndex + 1) % slides.length; showSlide(currentIndex); });
prevBtn.addEventListener('click', () => { currentIndex = (currentIndex - 1 + slides.length) % slides.length; showSlide(currentIndex); });

setInterval(() => { currentIndex = (currentIndex + 1) % slides.length; showSlide(currentIndex); }, 6000);

showSlide(currentIndex);
