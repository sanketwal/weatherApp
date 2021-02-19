import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const CityInput = (props) => {

    const [error, setError] = useState("");
    const handleInputChange = (event) => {
        props.setCity(event.target.value);
    }

    const fetchCityWeather=()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=e7c01f9237137400be0a25205fd9ca05`)
        .then((res)=>res.json())
        .then((result)=>{props.setCityWeather(result);
            console.log(result)
            props.setTemp(result.main.temp)
        })

    }

    const handleClick = (event) => {
        if (!props.city) {
            setError("City field is empty!!!");
        }
        else {
            setError("");
        };
    }



    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text"
                        value={props.city}
                        placeholder="Enter city"
                        onChange={handleInputChange} />
                    <p className="text-danger">{error}</p>
                </Form.Group>

                <Button variant="primary"
                    onClick={fetchCityWeather}>
                    Submit
            </Button>
            </Form>
        </Container>
    );
};

export default CityInput;