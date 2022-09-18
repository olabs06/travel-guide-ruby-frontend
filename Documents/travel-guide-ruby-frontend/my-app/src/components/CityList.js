import CityCard from "./CityCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function CityList ({cities}){
    const displayCities = cities.map(city => <Col xs={12} sm={12} md={6} lg={6} xl={4} key={city.id}><CityCard city={city}/> </Col>) //className="g-4"
  return (
    <Container>
        <Row>
            {displayCities}
        </Row>
    </Container>
  );
}

export default CityList;