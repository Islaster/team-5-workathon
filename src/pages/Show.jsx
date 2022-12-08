import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import Carousel from 'react-bootstrap/Carousel'
import "./Show.css"

export default function Show(props) {
    return (
        <>
       <Card className="showPage-Card">
        <Card.Header>Food Bank</Card.Header>
        <Card.Img variant="top" src="https://developers.google.com/static/maps/images/landing/android_codelab.png" />
        <Card.Body>
            <Card.Title>SF - Marin Food Bank</Card.Title>
            <Card.Text>
            900 Pennsylvania Ave, San Francisco, CA 94107
            </Card.Text>  
        </Card.Body>
        <CardGroup>
            <Card style={{width: "30%", display: "inline-block"}}>
                <Card.Img className='card-phone-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/00/82/56/67/240_F_82566747_T7dXb2E3KI6cV5yFekgL7BO58kOtFt6Y.jpg" />
                <Card.Title>Contact</Card.Title>
                <Card.Text>(415) 282-1900</Card.Text>
            </Card>
            <Card style={{width: "30%", display: "inline-block"}}>
                <Card.Img className='card-phone-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/00/96/28/69/240_F_96286992_ab9NG09yCCmIDxLfTX8g1tFdwvzCE7Pf.jpg" />
                <Card.Title>Website</Card.Title>
                <Card.Text><a src="https://www.sfmfoodbank.org/">Website</a></Card.Text>
            </Card>
            <Card style={{width: "30%", display: "inline-block"}}>
                <Card.Img className='card-phone-icon' style={{width: "4rem"}} Variant="top" src="https://t3.ftcdn.net/jpg/01/64/09/16/240_F_164091630_VaTUAAxbkt4NToNPfnWoPkfxEqmTVdJr.jpg" />
                <Card.Title>Hours</Card.Title>
                <Card.Text>8:00AM - 5:00PM</Card.Text>
            </Card>
        </CardGroup>
       </Card>
        <ListGroup variant="flush">
            <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                <div className="fw-bold">Eligibility</div>
                City Residents only: San Francisco
                </div>
            </ListGroup.Item>
                <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Intake</div>
                    Upon Walk-In
                    </div>
            </ListGroup.Item>
                <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Feedback</div>
                    Let us know what you think!
                    </div>
            </ListGroup.Item>
        </ListGroup>
        <Carousel>
      <Carousel.Item>
        <Card className="bg-dark text-white">
        <Card.Img className="d-block h-100" src="https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card className="bg-dark text-white">
        <Card.Img className="d-block h-100" src="https://images.pexels.com/photos/9196490/pexels-photo-9196490.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card className="bg-dark text-white">
        <Card.Img className="d-block h-100" src="https://images.pexels.com/photos/6647115/pexels-photo-6647115.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>
      </Carousel.Item>
    </Carousel>

        </>
    )
}