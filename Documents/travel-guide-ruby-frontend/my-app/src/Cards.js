import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"; 

function Cards({cities}){
    <div class="row row-cols-1 row-cols-md-4 ">
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
   
  </div>
      

  return (
    <Card style={{ width: '12rem', margin: '20px' }}>
      <Card.Img variant="top" src={cities.image} alt={cities.alt}/>
      <Card.Body>
            <Link key={cities.id} to={`/cities/${cities.id}`}>
            </Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;