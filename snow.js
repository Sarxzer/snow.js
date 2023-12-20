function snow(ammount, minSize=10, maxSize=25, minSpeed=15, maxSpeed=5) {
  document.body.innerHTML += '<div id="snow"></div>'

  const flakes = ["❅","❆","❄","*","❉"]
  for (let i = 0; i < ammount; i++) {
      car = flakes[Math.floor(Math.random() * flakes.length)];
      document.getElementById('snow').innerHTML += `<div class="snowflake">${car}</div>`;
  }
  const snowflakes = document.querySelectorAll(".snowflake");
  snowflakes.forEach((flake) => {
    const driftDuration = Math.random() * (maxSpeed - minSpeed) + minSpeed; // Time from 5s to 15s
    const driftDelay = Math.random() * 5; // Wait time from 0s to 5s
    const startingX = Math.random() * window.innerWidth; // Ramdom horizontal position
    const size = Math.random() * (maxSize - minSize) + minSize; // Size from 5px to 15px
    const color = parseInt(255-Math.random()*50).toString(16); // Random color from 0xffff00 to 0xffffff
    const speed = parseInt(Math.random() * 3); // Speed from 1 to 4 
    const zIndex = parseInt(-1 + Math.random() * 2147483648); // Random zIndex from -1 to 2147483647

    flake.style.position = 'fixed';
    flake.style.top = '-10px';
    flake.style.userSelect = 'none';
    flake.style.cursor = 'default';
    flake.style.pointerEvent = 'none';
    flake.style.color = `#${color}${color}ff`;


    flake.style.left = `${startingX}px`;
    flake.style.fontSize = `${size}px`;
    flake.style.zIndex = zIndex;
    flake.style.animation = `snowfall-speed${speed} ${driftDuration}s linear infinite`;
    flake.style.animationDelay = `-${driftDelay}s`;
  });
}