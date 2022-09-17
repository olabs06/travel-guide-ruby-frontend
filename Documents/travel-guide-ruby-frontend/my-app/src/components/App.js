import React from "react";
//import './App.css';

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
        <div class="has-bg-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/img/digital-nomad-realities-hero.jpg"})`, 
          backgroundRepeat: 'no-repeat',  
          backgroundSize: 'cover',
          height:'100vh'  }}>
          <h2>Hero Section</h2>
          <h4>Join a global community of techies living and traveling around the world</h4>
        </div>
      </header>
      <main>
        <section class="container-fluid">
          <p class="fw-bolder">In partnership with:</p>
            <div style={{
              backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/img/moringa_logo.png"})`,
              height: "50px",
              width:  "218px",
              backgroundSize: 'cover',
              backgroundRepeat: "no-repeat"
              }} >
            </div>
        </section>
        <section>
          <div class="row">
            <div class="col-8">
                <div class="row row-cols-1 row-cols-md-3 g-54">
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Abuja-Techpoint-Africa-e1593932683108.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#fff"
                      }}>Abuja</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Accra.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Accra</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Addis_Ababa.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Addis Ababa</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Algiers.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Algiers</h5>
                    </div>
                  </div>  
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Antananarivo.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Antananarivo</h5>
                    </div>
                  </div> 
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Asmara.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Asmara</h5>
                    </div>
                  </div> 
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Bamako.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Bamako</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Bangui.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Bangui</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Banjul.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Banjul</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Bissau.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Bissau</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/brazzaville.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Brazzaville</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Bujumbura.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Bujumbura</h5>
                    </div>
                  </div> 
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Cairo.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Cairo</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/CapeTown.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Cape Town</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Conakry.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Conakry</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Dakar.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Dakar</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Djibouti.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Djibouti</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Dodoma.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Dodoma</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/El_Aaiun.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>El Aaiún</h5>
                    </div>
                  </div>  
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Freetown.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Free Town</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Gaborone.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Gaborone</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Harare.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Harare</h5>
                    </div>
                  </div> 
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Juba.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Juba</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Kampala.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Kampala</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Khartoum.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Khartoum</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Kigali.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Kigali</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Kinshasa.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Kinshasa</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/libreville.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Libreville</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Lilongwe.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Lilongwe</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Lome.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Lome</h5>
                    </div>
                  </div> 
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Luanda.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Luanda</h5>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Lusaka.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Lusaka</h5>
                    </div>
                  </div> 
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Malabo.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Malabo</h5>
                    </div>
                  </div>  
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Maputo.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Maputo</h5>
                    </div>
                  </div>  
                  <div class="col">
                    <div class="card" style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/cities/Maseru.jpg"})`,
                      height: "250px",
                      width:  "250px",
                      backgroundSize: 'cover',
                      backgroundRepeat: "no-repeat"
                    }} >
                      <h5 class="card-title" style= {{
                        margin: "20px",
                        padding: "70px",
                        color:"#ffffff",
                      }}>Maseru</h5>
                    </div>
                  </div>                 





                </div>
            </div>
            <div class="col-4">col-4</div>
          </div>
        </section>     
      </main>
      <footer></footer>
    </div>
  );
}
 
export default App;
