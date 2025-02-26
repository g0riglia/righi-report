// Attendi che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', function() {
    // Riferimenti agli elementi DOM
    const menuToggle = document.getElementById('menuToggle');
    const menuDropdown = document.getElementById('menuDropdown');
    const menuClose = document.getElementById('menuClose');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const carousel = document.getElementById('articleCarousel');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    // Gestione del menu a tendina
    menuToggle.addEventListener('click', function() {
        menuDropdown.classList.toggle('active');
    });
    
    menuClose.addEventListener('click', function() {
        menuDropdown.classList.remove('active');
    });
    
    // Modalità notte
    let isDarkMode = false;
    
    themeToggle.addEventListener('click', function() {
        document.body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
        themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
        isDarkMode = !isDarkMode;
    });
    
    // Dati per gli articoli del carosello
    const articles = [
        {
            title: 'La crisi climatica: nuove strategie europee per ridurre le emissioni',
            image: '/api/placeholder/300/150'
        },
        {
            title: 'Elezioni regionali: i risultati definitivi e le reazioni dei partiti',
            image: '/api/placeholder/300/150'
        },
        {
            title: 'Festival del Cinema: tutti i vincitori dell\'edizione 2024',
            image: '/api/placeholder/300/150'
        },
        {
            title: 'Innovazione tecnologica: il futuro della mobilità urbana',
            image: '/api/placeholder/300/150'
        },
        {
            title: 'Economia in ripresa: crescono gli investimenti nel settore green',
            image: '/api/placeholder/300/150'
        },
        {
            title: 'Sport: la nazionale di pallavolo conquista il titolo europeo',
            image: '/api/placeholder/300/150'
        },
        {
            title: 'Cultura: riscoperto un manoscritto inedito di un celebre autore',
            image: '/api/placeholder/300/150'
        },
        {
            title: 'Salute: nuove linee guida per la prevenzione cardiovascolare',
            image: '/api/placeholder/300/150'
        }
    ];
    
    // Genera articoli per il carosello
    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        
        const articleImage = document.createElement('div');
        articleImage.className = 'article-image';
        articleImage.style.backgroundImage = `url('${article.image}')`;
        
        const articleTitle = document.createElement('div');
        articleTitle.className = 'article-title';
        articleTitle.textContent = article.title;
        
        articleCard.appendChild(articleImage);
        articleCard.appendChild(articleTitle);
        carousel.appendChild(articleCard);
    });
    
    // Logica del carosello
    let currentPosition = 0;
    const cardWidth = document.querySelector('.article-card').offsetWidth + 20; // + margine
    const cardsToShow = window.innerWidth > 768 ? 4 : window.innerWidth > 480 ? 2 : 1;
    const maxPosition = articles.length - cardsToShow;
    
    // Funzione per aggiornare la posizione del carosello
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    }
    
    // Gestione dei pulsanti di navigazione
    nextButton.addEventListener('click', function() {
        if (currentPosition >= maxPosition) {
            // Torna al primo elemento
            currentPosition = 0;
        } else {
            currentPosition++;
        }
        updateCarousel();
    });
    
    prevButton.addEventListener('click', function() {
        if (currentPosition <= 0) {
            // Vai all'ultimo set di elementi
            currentPosition = maxPosition;
        } else {
            currentPosition--;
        }
        updateCarousel();
    });
    
    // Aggiorna il carosello quando la finestra viene ridimensionata
    window.addEventListener('resize', function() {
        const newCardsToShow = window.innerWidth > 768 ? 4 : window.innerWidth > 480 ? 2 : 1;
        const newMaxPosition = articles.length - newCardsToShow;
        
        if (currentPosition > newMaxPosition) {
            currentPosition = newMaxPosition;
        }
        
        updateCarousel();
    });
    
    // Auto-rotazione del carosello ogni 5 secondi
    setInterval(function() {
        if (currentPosition >= maxPosition) {
            currentPosition = 0;
        } else {
            currentPosition++;
        }
        updateCarousel();
    }, 5000);
});