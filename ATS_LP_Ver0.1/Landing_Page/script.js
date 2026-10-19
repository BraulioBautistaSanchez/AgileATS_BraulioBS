const canvas = document.getElementById('lluviaCanvas');
const ctx = canvas.getContext('2d');

// Ajustar tamaño del canvas a la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array para guardar las gotas
const gotas = [];
const numeroDeGotas = 400; // Intensidad de la lluvia

// Crear las gotas iniciales
for (let i = 0; i < numeroDeGotas; i++) {
  gotas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    longitud: Math.random() * 20 + 10,
    velocidad: Math.random() * 10 + 5,
    grosor: Math.random() * 1.5 + 0.5
  });
}

function animar() {
  // Limpiar el frame con el tono oscuro del gradiente para un rastro natural
  ctx.fillStyle = 'rgba(23, 24, 17, 0.3)'; 
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Color de la lluvia (blanco/azulado semitransparente)
  ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
  ctx.lineCap = 'round';

  for (let i = 0; i < gotas.length; i++) {
    const gota = gotas[i];
    
    ctx.lineWidth = gota.grosor;
    ctx.beginPath();
    ctx.moveTo(gota.x, gota.y);
    ctx.lineTo(gota.x, gota.y + gota.longitud);
    ctx.stroke();
    
    gota.y += gota.velocidad;
    
    if (gota.y > canvas.height) {
      gota.y = -gota.longitud;
      gota.x = Math.random() * canvas.width;
      gota.velocidad = Math.random() * 10 + 5; 
    }
  }
  
  requestAnimationFrame(animar);
}

animar();

// Redimensionar si el usuario cambia el tamaño de la ventana
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});