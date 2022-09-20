function Home(){
    return(
        <div className="has-bg-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ "/assets/img/digital-nomad-realities-hero.jpg"})`, 
          backgroundRepeat: 'no-repeat',  
          backgroundSize: 'cover',
          opacity: 0.9,
          height:'100vh'  }}>
          <h1 style={{font:'Nunito', fontSize:'4rem', paddingTop:'10%', color:'green' }}>Welcome to Technomads</h1>
          <h4 style={{font:'Nunito', fontSize:'1.5rem'}}>Join a global community of techies living and traveling around the world</h4>
          
        </div>
      
    );
}

export default Home;