function snow(ammount) {
    const flakes = ["❅","❆","❄"]
    for (let i = 0; i < ammount; i++) {
        car = flakes[Math.floor(Math.random() * flakes.length)];
        document.body.innerHTML += `<div class="snowflake">${car}</div>`;
    }

    const snowflakes = document.querySelectorAll(".snowflake");

    snowflakes.forEach((flake) => {
      const driftDuration = Math.random() * 10 + 4; // Durée de 4 à 14 secondes
      const driftDelay = Math.random() * 4; // Délai de 0 à 4 secondes
      const startingX = Math.random() * window.innerWidth; // Position horizontale aléatoire
      const size = Math.random() * 10 + 5; // Taille de 5 à 15 pixels
        
      flake.style.top = '-10px';
      flake.style.zIndex = '9999';
      flake.style.userSelect = 'none';
      flake.style.cursor = 'default';
      flake.style.pointerEvent =  'none';
      flake.style.color = '#ffffff';
      

      flake.style.left = `${startingX}px`;
      flake.style.animation = `fall ${driftDuration}s linear infinite`;
      flake.style.animationDelay = `-${driftDelay}s`;
    });
}
