import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = () => {
  return (
    <>
    <div className=" col-md-3 my-2">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.TPWFnbVgvRvDlfVxVU5kqQHaLG?pid=ImgDet&rs=1" />
      <Card.Body>
        <Card.Title>Book Name</Card.Title>
        <Card.Text>
          Author name .
        </Card.Text>
        <Button variant="primary">Go to Book Link</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Cards
