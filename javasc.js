css
:root {
  --gold: #b8975f;
  --cream: #faf6f0;
  --dark: #2e2a26;
  --font-heading: 'Georgia', serif;
  --font-body: 'Helvetica Neue', Arial, sans-serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: var(--font-body); background: var(--cream); color: var(--dark); line-height: 1.6; }
.section { padding: 60px 20px; text-align: center; max-width: 700px; margin: 0 auto; }

#cover { height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; background: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('https://via.placeholder.com/1200x1600?text=Foto+Prewedding') center/cover no-repeat; color: #fff; }
#cover h2 { font-weight: 300; letter-spacing: 2px; font-size: 1rem; margin-bottom: 10px; }
#cover h1 { font-family: var(--font-heading); font-size: 3rem; margin-bottom: 10px; }
#cover p { font-size: 1.1rem; letter-spacing: 1px; }
.scroll-hint { position: absolute; bottom: 30px; font-size: 0.8rem; animation: bounce 2s infinite; }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(10px); } }

#pembuka blockquote { font-style: italic; font-family: var(--font-heading); font-size: 1.2rem; color: var(--gold); margin-bottom: 20px; padding: 0 10px; }

#mempelai { background: #fff; }
.couple { display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; margin-top: 30px; }
.person { max-width: 260px; }
.person img { width: 180px; height: 180px; border-radius: 50%; object-fit: cover; border: 4px solid var(--gold); margin-bottom: 15px; }
.person h3 { font-family: var(--font-heading); font-size: 1.6rem; margin-bottom: 8px; }
.person p { font-size: 0.9rem; color: #555; }
.ampersand { font-family: var(--font-heading); font-size: 2.5rem; color: var(--gold); align-self: center; }

#acara h2 { font-family: var(--font-heading); margin-bottom: 30px; font-size: 1.8rem; }
.event-cards { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
.event-card { background: #fff; border: 1px solid var(--gold); border-radius: 10px; padding: 25px; flex: 1 1 260px; }
.event-card h3 { font-family: var(--font-heading); color: var(--gold); margin-bottom: 12px; }
.event-card p { margin-bottom: 6px; font-size: 0.95rem; }
.countdown { margin-top: 40px; display: flex; justify-content: center; gap: 20px; }
.countdown div { background: var(--gold); color: #fff; border-radius: 8px; padding: 15px 18px; min-width: 70px; }
.countdown span { display: block; font-size: 1.6rem; font-weight: bold; }
.countdown small { font-size: 0.7rem; letter-spacing: 1px; }

#galeri { background: #fff; }
.gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 25px; }
.gallery-grid img { width: 100%; height: 150px; object-fit: cover; border-radius: 6px; }

#rsvp h2 { font-family: var(--font-heading); margin-bottom: 20px; font-size: 1.8rem; }
form { display: flex; flex-direction: column; gap: 14px; text-align: left; }
label { font-size: 0.85rem; font-weight: bold; }
input, select, textarea { padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-family: var(--font-body); font-size: 0.95rem; }
button { background: var(--gold); color: #fff; border: none; padding: 12px; border-radius: 6px; font-size: 1rem; cursor: pointer; margin-top: 10px; }
button:hover { background: #a0824e; }
.wishes-list { margin-top: 25px; text-align: left; max-height: 250px; overflow-y: auto; border-top: 1px solid #eee; }
.wish-item { border-bottom: 1px solid #eee; padding: 10px 0; }
.wish-item strong { color: var(--gold); }

#kado { background: #fff; }
.gift-box { background: var(--cream); border-radius: 10px; padding: 20px; margin-top: 20px; display: inline-block; }

footer { text-align: center; padding: 40px 20px; font-family: var(--font-heading); font-size: 1.1rem; color: var(--gold); }

@media (max-width: 480px) {
  #cover h1 { font-size: 2.2rem; }
  .countdown div { min-width: 55px; padding: 10px; }
}
css
#music-player {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}
#music-toggle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--gold);
  color: #fff;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}
#music-toggle:hover { background: #a0824e; }
#music-toggle.playing #music-icon {
  animation: spin 3s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
