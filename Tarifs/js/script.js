document.addEventListener('DOMContentLoaded', function() {
    const voirPlusButtons = document.querySelectorAll('.voir-plus-btn');
    const voirMoinsButtons = document.querySelectorAll('.voir-moins-btn');
    
    voirPlusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parent = this.parentElement;
            // Check if the card is not the "Essentiel" card
            if (!parent.classList.contains('essentiel-card')) {
                parent.querySelector('.more-details').style.display = 'block';
                this.style.display = 'none';
                parent.querySelector('.voir-moins-btn').style.display = 'block';
            }
        });
    });
    
    voirMoinsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.querySelector('.more-details').style.display = 'none';
            this.style.display = 'none';
            parent.querySelector('.voir-plus-btn').style.display = 'block';
        });
    });
});


