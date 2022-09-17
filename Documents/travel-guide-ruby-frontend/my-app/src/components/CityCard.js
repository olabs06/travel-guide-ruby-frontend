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

  return (
    <Card style={{ width: '15rem', margin: '20px' }}>
      <Card.Img variant="top" src={city.image} alt={city.name}/>
      <Card.Body>
        <Card.Title>{truncate(city.name, 12)}</Card.Title>
        <Card.Text>Employment Rate: {city.employment_rate}%</Card.Text>
        <Card.Text>Crime Rate: {city.crime_rate}%</Card.Text>
        <Card.Text>Minimum wage: ${city.minimum_wage}</Card.Text>
        <Link key={city.id} to={`/cities/${city.id}`}>
            <Button variant="warning">Find out more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CityCard;