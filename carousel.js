const carousel = document.getElementById('carousel');
let currentIndex = 0;

// 🔹 Avis Google / Point Fort Fichet Antibes (extraits publics)
const avis = [
    { texte: "Je suis très content de ma porte Fichet. L'installation a été très rapide et fait avec beaucoup de professionnalisme.", auteur: "Chris Ben" },
    { texte: "Intervention très rapide pour déblocage de porte. Efficace, sympa et très honnête. Je recommande vivement.", auteur: "Severine P" },
    { texte: "Une équipe super gentille, avec de la réactivité et de l’efficacité !", auteur: "Raphael Israel" },
    { texte: "Intervention très rapide et efficace. Le serrurier a été très professionnel et bienveillant. Je le recommande.", auteur: "Elsa T." },
    { texte: "Très agréables, on se sent en confiance. Très efficaces.", auteur: "L. C." },
    { texte: "Super professionnel, merci beaucoup pour la rapidité", auteur: "Guillaume G." },
    { texte: "Très réactif pour solutionner mon problème de cylindre. Technicien très pro et très sympa.", auteur: "romain cheron" },
    { texte: "Accueil téléphonique chaleureux et intervention très professionnelle.", auteur: "cynthia pellier" },
    { texte: "Réactivité et professionnalisme exceptionnels.", auteur: "Momo beebee" },
    { texte: "Tarifs corrects et intervention rapide, je recommande.", auteur: "A B" }
    // Tu peux ajouter d’autres avis ici si tu veux encore plus !
];

// Injection des avis dans le carousel
avis.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('avis-slide');
    div.innerHTML = `<p>"${item.texte}"</p><span>- ${item.auteur}</span>`;
    carousel.appendChild(div);
});

const slides = document.querySelectorAll('.avis-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Auto‑scroll toutes les 6 secondes
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 6000);

// Initialisation
showSlide(currentIndex);
