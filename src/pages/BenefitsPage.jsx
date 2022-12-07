import Card from "react-bootstrap/Card"
import Dropdown from "react-bootstrap/Dropdown"
import CardGroup from "react-bootstrap/CardGroup"
import Nav from 'react-bootstrap/Nav'
import "./BenefitsPage.css"

export default function BenefitsPage(props) {
    return (
        <>
            <body className="body">
            <p className="page-description">
                Open Pantry is here to help you find Food Assistence Programs and benefits 
                (SNAP, CalFresh, WIC, and more) you may be eligible for ain the state of California. 
            </p>
            {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter by Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Women and Children</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Single Parents</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Impoverished</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
    <nav className="benefits-nav">
        <button>WIC</button>
        <button>Food Stamps</button>
        <button>School Assistence</button>
    </nav>


    <Card className="event-card">
      <Card.Body className="event-body">
        <Card.Title>CalFresh</Card.Title>
        <Card.Text>
          CalFresh (formerly known as FoodStamps) is an entitlement program that provides
          monthly bebnefits to assist low-income households in purchasing the food they need
          to maintain adequate nutritinal levels. In general, these benefits are for any food or food 
          product intended for human consumption. 
        </Card.Text>
        <div className="benefits-button-group">
            <button className="benefits-buttons">
                <img src="https://cdn-icons-png.flaticon.com/128/597/597177.png"style={{width: "2rem"}}/>
                <h5>Contact</h5>
            </button>
            <button className="benefits-buttons">
                <img src="https://cdn-icons-png.flaticon.com/128/2258/2258843.png"style={{width: "2rem"}}/>
                <h5>Apply</h5>
            </button>
            <button className="benefits-buttons">
                <img src="https://cdn-icons-png.flaticon.com/128/151/151917.png"style={{width: "2rem"}}/>
                <h5>Eligibility</h5>
            </button>
        </div>
      </Card.Body>
    </Card>

    <Card className="event-card">
      <Card.Body className="event-body">
        <Card.Title>WIC Farmers' Market Nutrition Program (FMNP)</Card.Title>
        <Card.Text>
          The California Special Suuplemental Nutrition Program for Women, Infants, and Children (WIC) provides supplimental
          foods, nutrition, education, and referrals to health care, at no cost, to low-income pregnant, breastfeeding,
          and postpartum women, infants, and children tup to ages 5 who are determined to be at nutritional risk. 
        </Card.Text>
    
        <div className="benefits-button-group">
            <button className="benefits-buttons">
                <img src="https://cdn-icons-png.flaticon.com/128/597/597177.png"style={{width: "2rem"}}/>
                <h5>Contact</h5>
            </button>
            <button className="benefits-buttons">
                <img src="https://cdn-icons-png.flaticon.com/128/2258/2258843.png"style={{width: "2rem"}}/>
                <h5>Apply</h5>
            </button>
            <button className="benefits-buttons">
                <img src="https://cdn-icons-png.flaticon.com/128/151/151917.png"style={{width: "2rem"}}/>
                <h5>Eligibility</h5>
            </button>
        </div>
      </Card.Body>
    </Card>

    <Card className="event-card">
      <Card.Body className="event-body">
        <Card.Title>National School Breakfast & Lunch Program</Card.Title>
        <Card.Text>
          The United States Department of Agriculture provides funding to support five school meal and milk programs 
          to asist schools, districs, and other non-profit agencies in providing nutitious meals and milk to chlidren 
          at reasonable prices or free to qualifed applicants. 
        </Card.Text>
        <div className="benefits-button-group">
            <button className="benefits-buttons">
                <img src="https://cdn-icons-png.flaticon.com/128/597/597177.png"style={{width: "2rem"}}/>
                <h5>Contact</h5>
            </button>
            <button className="benefits-buttons">
                <img src="https://cdn-icons-png.flaticon.com/128/2258/2258843.png"style={{width: "2rem"}}/>
                <h5>Apply</h5>
            </button>
            <button className="benefits-buttons">
                <img src="https://cdn-icons-png.flaticon.com/128/151/151917.png"style={{width: "2rem"}}/>
                <h5>Eligibility</h5>
            </button>
        </div>
      </Card.Body>
    </Card>
    </body>
    </>
    )
}