import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
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
            <Card style={{width: "30%", display: "inline"}}>
                <Card.Img className='card-phone-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/00/82/56/67/240_F_82566747_T7dXb2E3KI6cV5yFekgL7BO58kOtFt6Y.jpg" />
                <Card.Title>Contact</Card.Title>
                <Card.Text>(415) 282-1900</Card.Text>
            </Card>
            <Card style={{width: "30%", display: "inline"}}>
                <Card.Img className='card-phone-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/00/82/56/67/240_F_82566747_T7dXb2E3KI6cV5yFekgL7BO58kOtFt6Y.jpg" />
                <Card.Title>Contact</Card.Title>
                <Card.Text>(415) 282-1900</Card.Text>
            </Card>
            <Card style={{width: "30%", display: "inline"}}>
                <Card.Img className='card-phone-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/00/82/56/67/240_F_82566747_T7dXb2E3KI6cV5yFekgL7BO58kOtFt6Y.jpg" />
                <Card.Title>Contact</Card.Title>
                <Card.Text>(415) 282-1900</Card.Text>
            </Card>
        </CardGroup>
       </Card>


        </>
    )
}