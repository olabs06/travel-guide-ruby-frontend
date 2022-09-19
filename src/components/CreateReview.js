import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

let baseData = {
    "traffic": 3,
    "night_life": 2,
    "friendly_to_foreigner": 2,
    "places_to_work_from": 2,
    "quality_of_internet": 5,
    "quality_of_healthcare": 5,
    "user_id": 3,
    "city_id": 3
}

function CreateReview({city, getReview}){
    const [formData, setFormData] = useState(baseData)

    function handleComment(e){
        let name = e.target.name;
        let value = e.target.value;
        baseData.city_id = e.target.id
        setFormData({...formData, [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData)
        if (formData.comment !== undefined && formData.comment !== ''){
            console.log(formData.comment)
            fetch(`https://radiant-oasis-70177.herokuapp.com/reviews`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            }).then((r) => r.json())
                .then((data) => getReview(data))
                .catch((error) => {
                    console.error('Error message:', error);
                  })
            }
    }

    return(
        <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">   
                <FloatingLabel label={`Review ${city.name}`}>
                    <Form.Control
                        as="textarea"
                        placeholder={`Review ${city.name}`}
                        onChange={handleComment} 
                        name='comment'
                        style={{ height: '100px' }}
                        id={`${city.id}`}
                    />
                </FloatingLabel>
                <Form.Text className="text-muted">
                    Everyone can see your comment
                </Form.Text>
            </Form.Group>
            <Button variant="warning" type="submit">
                Submit
            </Button>
        </form> 
    );
}

export default CreateReview;