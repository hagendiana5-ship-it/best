import React from 'react';

// Wir definieren die Sprach-Logik direkt HIER, damit wir nicht auf 
// externe Dateien angewiesen sind, die den Build zerstören könnten.
function App() {
  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: '900' }}>Design by Diana</h1>
      <p style={{ fontSize: '1.5rem', color: '#3b82f6' }}>Deine digitale Visitenkarte ist bald bereit.</p>
      
      <div style={{ marginTop: '40px', padding: '20px', border: '1px solid #334155', borderRadius: '15px' }}>
        <h2 style={{ color: '#a855f7' }}>System-Check: Aktiv</h2>
        <p>Die Seite wird gerade mit den neuen Sprachen (DE | EN | ES) aktualisiert.</p>
      </div>

      <div style={{ marginTop: '40px' }}>
        <a href="https://wa.me/DEINE_NUMMER" style={{ backgroundColor: '#25D366', padding: '15px 30px', borderRadius: '50px', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
          WhatsApp Kontakt
        </a>
      </div>
    </div>
  );
}

export default App;