import React from 'react'
import Card from 'react-bootstrap/Card';
import Service1 from '../pictures/service1.jpg'
import Service2 from '../pictures/travel1.jpg'
import Service3 from '../pictures/service3.jpg'
import Service4 from '../pictures/service4.jpg'
import './Services.css'
export default function Services() {
  return (
    <section id="services"> 
    <>
     <div className='Aboutuscontent'>
     <h3>SERVICES</h3>
     </div>
   <div className="card-container">
  <Card className="responsive-card">
    <Card.Img variant="top" src={Service1} />
    <Card.Body>
      <Card.Title>Paris</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="responsive-card">
    <Card.Img variant="top" src={Service2} />
    <Card.Body>
      <Card.Title>New York</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="responsive-card">
    <Card.Img variant="top" src={Service3} />
    <Card.Body>
      <Card.Title>Cappadocia</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="responsive-card">
    <Card.Img variant="top" src={Service4} />
    <Card.Body>
      <Card.Title>Germany</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card.Text>
      
    </Card.Body>
  </Card>
</div>

    </>
    </section>
  );
}

