import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

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
       </Card>


        </>
    )
}