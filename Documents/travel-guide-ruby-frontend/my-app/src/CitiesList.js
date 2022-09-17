import Cards from "./Cards";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function CitiesList ({cities}){
    const displayCities = cities.map(city => <Col xs={12} sm={6} md={4} lg={3} xl={2} key={city.id}><Cards city={city}/> </Col>) 
  return (
    <Container>
        <Row>
            {displayCities}
        </Row>
    </Container>
  );
}

export default CitiesList;