// Aquí contraste
const body = document.body;
const modeToggle = document.getElementById('modeToggle');

// Cargar modo guardado
body.classList.toggle('dark-mode', localStorage.getItem('mode') === 'dark');

modeToggle.addEventListener('click', () => {
   const isDark = body.classList.toggle('dark-mode');
   localStorage.setItem('mode', isDark ? 'dark' : 'light');
});

// Aquí fecha y hora
// Usa el idioma del navegador si está disponible, si no 'es-AR'
    const locale = navigator.language || 'es-AR';

    const weekdayEl = document.getElementById('weekday');
    const dateEl = document.getElementById('date');
    const timeEl = document.getElementById('time');

    // Opciones para formateo
    const weekdayOpts = { weekday: 'long' };
    const dateOpts = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOpts = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

    function updateClock(){
      const now = new Date();

      // Nombre del día (ej: lunes)
      const weekdayStr = now.toLocaleDateString(locale, weekdayOpts);

      // Fecha (ej: 24 de septiembre de 2025)
      const dateStr = now.toLocaleDateString(locale, dateOpts);

      // Hora local con segundos (ej: 14:05:07)
      const timeStr = now.toLocaleTimeString(locale, timeOpts);

      weekdayEl.textContent = weekdayStr;
      dateEl.textContent = dateStr;
      timeEl.textContent = timeStr;
    }

    // Actualiza cada segundo, y ejecuta inmediatamente al cargar
    updateClock();
    setInterval(updateClock, 1000);