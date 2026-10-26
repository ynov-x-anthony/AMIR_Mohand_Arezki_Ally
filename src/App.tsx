import './App.css'

// Mission : ce blog fonctionne, mais tout est construit en <div>. Rends-le
// sémantique : landmarks, hiérarchie de titres, vrai bouton, vrai label.

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="logo">DevBlog</div>
        <nav className="nav" aria-label="Navigation principale">
          <a className="nav-link" href="/">Accueil</a>
          <a className="nav-link" href="/articles">Articles</a>
          <a className="nav-link" href="/contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <article className="article">
          <h1 className="title">Pourquoi apprendre TypeScript en 2026</h1>
          <p className="meta">Publié le 3 mars 2026</p>
          <h2 className="small-title">Un typage qui rassure</h2>
          <p>TypeScript attrape une classe entière de bugs avant même d'exécuter le code...</p>
          <h2 className="small-title">Un écosystème mature</h2>
          <p>La quasi-totalité des librairies JS fournissent désormais leurs types...</p>
        </article>

        <button type="button" className="like-btn" onClick={() => alert("Merci pour le like !")}>
          👍 J'aime cet article
        </button>

        <section className="newsletter">
          <h2 className="small-title">Reste informé</h2>
          <label htmlFor="newsletter-email">Ton adresse e-mail</label>
          <input id="newsletter-email" type="email" placeholder="ton@email.fr" />
          <button type="button" className="submit-btn" onClick={() => alert('Inscription envoyée')}>
            S'inscrire
          </button>
        </section>
      </main>

      <footer className="footer">© 2026 DevBlog</footer>
    </div>
  )
}

export default App
