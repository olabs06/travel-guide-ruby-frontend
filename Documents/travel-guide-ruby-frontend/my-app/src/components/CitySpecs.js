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
                <div className="fw-bold">Anonymous User</div>
                <div>{review.comment}</div>
            </div>
            <Badge bg="danger" pill>
                <small>review</small>
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
                <Col><Image src={city.image} alt={city.name}  width='450' rounded="true" fluid="true" style={imgStyle}/></Col>
                <Col style={divStyle}>
                    <h1>{city.name}</h1>
                    <h5>Minimum Wage</h5><p>{city.minimum_wage}%</p>
                    <h5>Currency</h5><p>{city.currency}</p>
                    <h5>Country</h5><p>{city.country}</p>
                    <h5>Employment Rate</h5><p>{city.employment_rate}%</p>
                    <Row style ={{margin:"20px"}}>
                        <Col style ={{marginBottom:"10px"}}>
                            {/* <form onSubmit={handleSubmit}>
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
                            </form> */}
                        </Col>
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