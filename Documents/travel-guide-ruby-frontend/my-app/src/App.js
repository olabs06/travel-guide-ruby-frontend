import React from "react";
import background from "./assets/img/digital-nomad-realities-hero.jpg";
import Background from "./assets/img/moringa_logo.png";
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
              <a class="navbar-brand" href="#">Technomads</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Reviews</a>
                </li>
              </ul>
              <div class="container-fluid">
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </nav>
        <div class="has-bg-img" style={{ backgroundImage: `url(${background})`, 
          backgroundRepeat: 'no-repeat',  
          backgroundSize: 'cover',
          height:'100vh'  }}>
          <h2>Hero Section</h2>
          <h4>Join a global community of techies living and traveling around the world</h4>
        </div>
      </header>
      <main>
      <div class="container-fluid">
        <p class="fw-bolder">In partnership with:</p>
          <div style={{
            backgroundImage: `url(${Background})`,
            height: "30px",
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat"
            }} >
          </div>
      </div>
      <div></div>
        
      </main>
      <footer></footer>
    </div>
  );
}
 
export default App;
