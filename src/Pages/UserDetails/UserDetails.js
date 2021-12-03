import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';

const UserDetails = () => {
    const [userDetails, setUserDetails] = useState([]);
    useEffect(()=>{
        fetch("https://sheltered-lake-63424.herokuapp.com/userDetails")
        .then(res => res.json())
        .then(data => setUserDetails(data))
    },[])
    return (
        <div className="container-fluid">
            <Row xs={1} md={4} className="g-2">
            {
               userDetails.map(detail => 
               <CardGroup>
                   <Card className="bg-dark">
                        <Card.Body>
                        <Card.Title className="text-info">{detail.firstName} {detail.lastName}</Card.Title>
                        <Card.Text className="text-white-50">
                        Date: {detail.date}
                        </Card.Text>
                        <Card.Text className="text-white-50">
                        Email: {detail.email}
                        </Card.Text>
                        <Card.Text className="text-white-50">
                        Number: {detail.number}
                        </Card.Text>
                        <Card.Text className="text-white-50">
                        Address: {detail.address}
                        </Card.Text>
                        </Card.Body>
                    </Card>
               </CardGroup>)
            }
            </Row>
           
        </div>
    );
};

export default UserDetails;