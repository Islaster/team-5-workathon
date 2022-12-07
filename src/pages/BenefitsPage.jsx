import Card from "react-bootstrap/Card"
import Dropdown from "react-bootstrap/Dropdown"
import CardGroup from "react-bootstrap/CardGroup"

export default function BenefitsPage(props) {
    return (
        <>
            <p>
                Open Pantry is here to help you find Food Assistence Programs and benefits 
                (SNAP, CalFresh, WIC, and more) you may be eligible for ain the stateof California. 
            </p>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter by Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Women and Children</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Single Parents</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Impoverished</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Card>
      <Card.Header>Impoverished</Card.Header>
      <Card.Body>
        <Card.Title>CalFresh</Card.Title>
        <Card.Text>
          CalFresh (formerly known as FoodStamps) is an entitlement program that provides
          monthly bebnefits to assist low-income households in purchasing the food they need
          to maintain adequate nutritinal levels. In general, these benefits are for any food or food 
          product intended for human consumption. 
        </Card.Text>
        <CardGroup>
            <Card style={{width: "30%", display: "inline-block"}}>
                <Card.Img className='card-phone-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/00/82/56/67/240_F_82566747_T7dXb2E3KI6cV5yFekgL7BO58kOtFt6Y.jpg" />
                <Card.Title>Contact</Card.Title>
                <Card.Text>(415) 282-1900</Card.Text>
            </Card>
            <Card style={{width: "30%", display: "inline-block"}}>
                <Card.Img className='card-pc-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/03/01/83/19/240_F_301831951_nV7dsxaUrAgm41q6qPzaTQENv4xIwSMa.jpg" />
                <Card.Title>Apply</Card.Title>
                <Card.Text><a src="https://www.sfmfoodbank.org/"></a>CalFresh</Card.Text>
            </Card>
            <Card style={{width: "30%", display: "inline-block"}}>
                <Card.Img className='card-clock-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/01/97/94/19/240_F_197941920_GabVkexkY21WbcK3LjjErNyMeZQSkp8q.jpg" />
                <Card.Title>Eligibility</Card.Title>
                <Card.Text>Requirements</Card.Text>
            </Card>
        </CardGroup>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Women and Children</Card.Header>
      <Card.Body>
        <Card.Title>WIC Farmers' Market Nutrition Program (FMNP)</Card.Title>
        <Card.Text>
          The California Special Suuplemental Nutrition Program for Women, Infants, and Children (WIC) provides supplimental
          foods, nutrition, education, and referrals to health care, at no cost, to low-income pregnant, breastfeeding,
          and postpartum women, infants, and children tup to ages 5 who are determined to be at nutritional risk. 
        </Card.Text>
        <CardGroup>
            <Card style={{width: "30%", display: "inline-block"}}>
                <Card.Img className='card-phone-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/00/82/56/67/240_F_82566747_T7dXb2E3KI6cV5yFekgL7BO58kOtFt6Y.jpg" />
                <Card.Title>Contact</Card.Title>
                <Card.Text>(415) 282-1900</Card.Text>
            </Card>
            <Card style={{width: "30%", display: "inline-block"}}>
                <Card.Img className='card-pc-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/03/01/83/19/240_F_301831951_nV7dsxaUrAgm41q6qPzaTQENv4xIwSMa.jpg" />
                <Card.Title>Apply</Card.Title>
                <Card.Text><a src="https://www.sfmfoodbank.org/"></a>WIC/FMNP</Card.Text>
            </Card>
            <Card style={{width: "30%", display: "inline-block"}}>
                <Card.Img className='card-clock-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/01/97/94/19/240_F_197941920_GabVkexkY21WbcK3LjjErNyMeZQSkp8q.jpg" />
                <Card.Title>Eligibility</Card.Title>
                <Card.Text>Requirements</Card.Text>
            </Card>
        </CardGroup>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Children</Card.Header>
      <Card.Body>
        <Card.Title>National School Breakfast & Lunch Program</Card.Title>
        <Card.Text>
          The United States Department of Agriculture provides funding to support five school meal and milk programs 
          to asist schools, districs, and other non-profit agencies in providing nutitious meals and milk to chlidren 
          at reasonable prices or free to qualifed applicants. 
        </Card.Text>
        <CardGroup>
            <Card style={{width: "30%", display: "inline-block"}}>
                <Card.Img className='card-phone-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/00/82/56/67/240_F_82566747_T7dXb2E3KI6cV5yFekgL7BO58kOtFt6Y.jpg" />
                <Card.Title>Contact</Card.Title>
                <Card.Text>(415) 282-1900</Card.Text>
            </Card>
            <Card style={{width: "30%", display: "inline-block"}}>
                <Card.Img className='card-pc-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/03/01/83/19/240_F_301831951_nV7dsxaUrAgm41q6qPzaTQENv4xIwSMa.jpg" />
                <Card.Title>Apply</Card.Title>
                <Card.Text><a src="https://www.sfmfoodbank.org/"></a>U.S.D. of A. </Card.Text>
            </Card>
            <Card style={{width: "30%", display: "inline-block"}}>
                <Card.Img className='card-clock-icon' style={{width: "4rem"}} Variant="top" src="https://t4.ftcdn.net/jpg/01/97/94/19/240_F_197941920_GabVkexkY21WbcK3LjjErNyMeZQSkp8q.jpg" />
                <Card.Title>Eligibility</Card.Title>
                <Card.Text>Requirements</Card.Text>
            </Card>
        </CardGroup>
      </Card.Body>
    </Card>
        </>
    )
}