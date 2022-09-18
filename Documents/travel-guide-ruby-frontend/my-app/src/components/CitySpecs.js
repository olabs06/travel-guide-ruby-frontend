import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react'
import {nanoid} from 'nanoid'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'
import {truncate} from "./CityCard";

function CitySpecs (){
    const params = useParams();
    const id = params.id
    console.log(id)
    const [formData, setFormData] = useState({name: 'comments', value: ""})
    const [city, setCity] = useState({})
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:9292/cities/${id}`)
        .then(r => r.json())
        .then(data => {
            setCity(data)
            setReviews(data.reviews)
        })
      },[])
    
    const imgStyle = {
        boxShadow: '1px 2px 9px #282c34',
        margin: '2em',
        padding: '1em',
      };
    const divStyle = {
        boxShadow: '1px 2px 4px #282c34',
        margin: '2em',
        padding: '1em'
    };

    const displayReviews = reviews.map(review=>   
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={nanoid(5)}
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{review.user.name}</div>
                <div>{review.comment}</div>
                <br/>
                <div className="fw-bold">Star Ratings</div>
                <br/>
                <Row>
                    <Col><h6>Traffic:</h6> {review.traffic}</Col>
                    <Col><h6>Night life:</h6> {review.night_life}</Col>
                    <Col><h6>Foreigner friendly:</h6> {review.friendly_to_foreigner}</Col>
                </Row>
                <Row>
                    <Col><h6>Places to work from:</h6> {review.places_to_work_from}</Col>
                    <Col><h6>Quality of internet:</h6> {review.quality_of_internet}</Col>
                    <Col><h6>Quality of healthcare:</h6> {review.quality_of_healthcare}</Col>
                </Row>
            </div>
            <Badge bg="danger" pill>
                <small>{truncate(review.updated_at, 10)}</small>
            </Badge>
        </ListGroup.Item>
        )
    
    // function handleComment(e){
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     setFormData({...formData, [name]:value})
    // }

    // function handleSubmit(e){
    //     e.preventDefault();
    //     if (formData.comment !== undefined && formData.comment !== ''){
    //         console.log(formData.comment)
    //         const newComment = {comments: [...comments, formData.comment]};
    //         fetch(`${process.env.REACT_APP_API_URL}/cities/${id}`, {
    //             method: "PATCH",
    //             headers: {
    //             "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(newComment),
    //         })
    //             .then((r) => r.json())
    //             .then((data) => setComments(data.comments));
    //         }
    // }
    
    return(
        <Container >
            <Row >
                <Col>
                    <Image src={city.image} alt={city.name}  width='450' rounded="true" fluid="true" style={imgStyle}/>
                    <h1 style={{fontWeight: 700}}>{city.name}</h1>
                    <div style={{float: 'left'}}><h4>Minimum Wage</h4><p>${city.minimum_wage}</p></div>
                    <h4>Country</h4><p>{city.country}</p>
                    <div style={{float: 'right'}}><h4>Currency</h4><p>{city.currency}</p></div>
                    <h4>Crime Rate</h4><p>{city.crime_rate}%</p>
                    <div style={{float: 'left'}}><h4>Employment Rate</h4><p>{city.employment_rate}%</p></div>
                    
                </Col>
                <Col style={divStyle}>
                    <h1 style={{fontWeight: 700}}>Reviews</h1>
                    <Row style ={{margin:"20px"}}>
                        {/* <Col style ={{marginBottom:"10px"}}>
                            { <form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">   
                                    <FloatingLabel controlId="floatingTextarea2" label={`Review ${city.name.toLowerCase()}`}>
                                        <Form.Control
                                            as="textarea"
                                            placeholder={`Review ${city.name.toLowerCase()}`}
                                            onChange={handleComment} 
                                            name='comment'
                                            style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        Everyone can see your comment
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="warning" type="submit">
                                    Submit
                                </Button>
                            </form> }
                        </Col> */}
                        <Col>
                            <ListGroup as="ol" numbered>{displayReviews}</ListGroup>
                        </Col>  
                    </Row>
                </Col>
            </Row>
            
        </Container>
    );
}

export default CitySpecs;