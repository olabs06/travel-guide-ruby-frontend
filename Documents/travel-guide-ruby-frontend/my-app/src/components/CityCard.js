import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function CityCard({city}){
    function truncate (string = '', limit = 0) {
        if (string.length > 13) {
            return `${string.substring(0, limit)}...`
        } else{
            return string
        }
      }

      const textStyle = {
        fontSize: 15, color: 'black', fontWeight: 500
      }

      const titleStyle = {
        fontSize: 30, color: 'black',  fontWeight: 'bold'
      }


  return (
    <Card style={{ width: '100%', margin: '10px', }}>
        <Link key={city.id} to={`/cities/${city.id}`}>
            <Card.Img src={city.image} alt={city.name} style={{height: '15rem'}}/>
            <Card.ImgOverlay >
                <div style={{background: 'white', opacity: 0.8, padding: '10px'}}>
                    <Card.Title style={titleStyle}>{truncate(city.name, 12)}</Card.Title>
                    <Card.Text style={textStyle}>Employment Rate: {city.employment_rate}%</Card.Text>
                    <Card.Text style={textStyle}>Crime Rate: {city.crime_rate}%</Card.Text>
                    <Card.Text style={textStyle}>Minimum wage: ${city.minimum_wage}</Card.Text>
                </div>
            </Card.ImgOverlay>
        </Link>
    </Card>
  );
}

export default CityCard;