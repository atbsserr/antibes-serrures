const carousel=document.getElementById('carousel');
let currentIndex=0;

// 🔹 Remplace ce tableau par tes 400 avis Google
const avis=[
    {texte:"Service rapide et efficace !", auteur:"Antoine G."},
    {texte:"Très professionnel, je recommande !", auteur:"Clara M."},
    {texte:"Intervention impeccable", auteur:"Luc B."},
    // ... ajouter ici les 400 avis
];

// Injection dans le carousel
avis.forEach(item=>{
    const div=document.createElement('div');
    div.classList.add('avis-slide');
    div.innerHTML=`<p>"${item.texte}"</p><span>- ${item.auteur}</span>`;
    carousel.appendChild(div);
});

const slides=document.querySelectorAll('.avis-slide');
const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');

function showSlide(index){carousel.style.transform=`translateX(-${index*100}%)`;}
nextBtn.addEventListener('click',()=>{currentIndex=(currentIndex+1)%slides.length;showSlide(currentIndex);});
prevBtn.addEventListener('click',()=>{currentIndex=(currentIndex-1+slides.length)%slides.length;showSlide(currentIndex);});
setInterval(()=>{currentIndex=(currentIndex+1)%slides.length;showSlide(currentIndex);},6000);

showSlide(currentIndex);
