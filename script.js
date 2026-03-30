document.addEventListener("DOMContentLoaded", function() {
    createHearts(); 

    const progress = document.querySelector('.progress');
    const loadingScreen = document.getElementById('loading-screen');
    const cakeScreen = document.getElementById('cake-screen');
    
    // Start progress bar
    setTimeout(() => {
        if(progress) progress.style.width = "100%";
    }, 100);

    // Transition to Cake Screen
    setTimeout(() => {
        loadingScreen.style.opacity = "0";
        loadingScreen.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            cakeScreen.classList.remove('hidden');
        }, 500);
    }, 3500);
});

function createHearts() {
    const container = document.getElementById('bg-hearts');
    const heartIcons = ['❤️', '💖', '✨', '🌸'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
        container.appendChild(heart);
    }
}

function cutCake() {
    const cakeScreen = document.getElementById('cake-screen');
    const contentScreen = document.getElementById('content-screen');
    const music = document.getElementById('bg-music');

    // Attempt to play music
    music.play().catch(() => console.log("Music waiting for interaction"));

    // Initial Confetti Explosion
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493', '#ffffff']
    });

    setTimeout(() => {
        cakeScreen.classList.add('hidden');
        contentScreen.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Continuous confetti side-cannons
        const end = Date.now() + 4000;
        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff69b4', '#ffc0cb']
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff69b4', '#ffc0cb']
            });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    }, 1000);
}