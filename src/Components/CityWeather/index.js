import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const CityWeather = (props) => {



    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Temperature</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Temperature in celcious</Card.Subtitle>
                    <Card.Text>{props.temp}</Card.Text>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default CityWeather;