// Function to create a shooting star element with randomized properties
function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    
    // La posición vertical se define en la parte superior (dentro del 10% superior de la ventana)
    star.style.top = Math.random() * (window.innerHeight * 0.10) + 'px';
    
    // La posición horizontal se define entre el 25% y el 100% del ancho de la ventana
    star.style.left = window.innerWidth * 0.35 + Math.random() * (window.innerWidth * 0.65) + 'px';
    
    // Randomize the animation duration for variety (0.8s to 2.0s)
    // const duration = 0.8 + Math.random() * 1.2;
    const duration = 2
    star.style.animationDuration = duration + 's';
    
    // Append the star to the container
    document.querySelector('.shooting-stars').appendChild(star);
    
    // Remove the star after its animation completes
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
    }
    
    // Generate shooting stars at regular intervals
    setInterval(createShootingStar, 800);
