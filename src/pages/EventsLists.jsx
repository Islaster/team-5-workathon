import Card from "react-bootstrap/Card"
import "./EventsList.css"

const EventsList = (props) => {
    return (
        <>
        <body>

        <h1 style={{marginTop: "2rem"}}>Today, 12/9 </h1>
        <Card>
      <Card.Header>Food Bank</Card.Header>
      <Card.Body className = "event-card">
        <blockquote className="blockquote mb-0">
            <Card.Title className="card-title">Marin Food Bank Food Drive <span className="fav-icon"><img src="https://t4.ftcdn.net/jpg/01/25/83/03/240_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg" style={{width: "3rem"}}/></span></Card.Title>
          <p>
            12/9/2022 6:00 AM to 4:00PM 
            <br></br>
            Visit http://marinfoodbank.org/events
          </p>
          <footer className="blockquote-footer">
            <span><img src="https://t4.ftcdn.net/jpg/02/72/89/67/240_F_272896745_tlTivOH81qWIVzz34KqFGm8LO3N9hMYQ.jpg" style={{width: "2rem"}}/></span> 1612 Lincoln St, CA San Francisco 94016
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
        <Card>
      <Card.Header>Food Bank</Card.Header>
      <Card.Body className = "event-card">
        <blockquote className="blockquote mb-0">
            <Card.Title>Mission Food Hub Meal Service <span className="fav-icon"><img src="https://t4.ftcdn.net/jpg/01/25/83/03/240_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg" style={{width: "3rem"}}/></span></Card.Title>
          <p>
            12/9/2022 9:00 AM to 9:45 AM 
            <br></br>
            Mission Food Hub will be distrubuting Grab&Go meals provided by Second Harvest. 
          </p>
          <footer className="blockquote-footer">
            <span><img src="https://t4.ftcdn.net/jpg/02/72/89/67/240_F_272896745_tlTivOH81qWIVzz34KqFGm8LO3N9hMYQ.jpg" style={{width: "2rem"}}/></span> 1923 Jackson St, CA San Francisco 94016
          </footer>
        </blockquote>
      </Card.Body>
    </Card>

    <h1 style={{marginTop: "2rem"}}>Tomorrow, 12/20</h1>

    <Card>
      <Card.Header>Food Bank</Card.Header>
      <Card.Body className = "event-card">
        <blockquote className="blockquote mb-0">
            <Card.Title>Alta Plaza Park Meal Service: SE corner <span className="fav-icon"><img src="https://t4.ftcdn.net/jpg/01/25/83/03/240_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg" style={{width: "3rem"}}/></span></Card.Title>
          <p>
            12/10/2022 6:00 AM to 4:00 PM
            <br></br>
            Alta Plaza Parks & Recreation will be distrubting Grab&Go meals provided by Feed America
          </p>
          <footer className="blockquote-footer">
            <span><img src="https://t4.ftcdn.net/jpg/02/72/89/67/240_F_272896745_tlTivOH81qWIVzz34KqFGm8LO3N9hMYQ.jpg" style={{width: "2rem"}}/></span> 3749 27th, CA San Francisco 94016
          </footer>
        </blockquote>
      </Card.Body>
    </Card>       <Card>
      <Card.Header>Food Bank</Card.Header>
      <Card.Body className = "event-card">
        <blockquote className="blockquote mb-0">
            <Card.Title>Marin Food Bank Food Drive <span className="fav-icon"><img src="https://t4.ftcdn.net/jpg/01/25/83/03/240_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg" style={{width: "3rem"}}/></span></Card.Title>
          <p>
            12/9/2022 6:00 AM to 4:00 PM
            <br></br>
            Visit http://marinfoodbank.org/events
          </p>
          <footer className="blockquote-footer">
            <span><img src="https://t4.ftcdn.net/jpg/02/72/89/67/240_F_272896745_tlTivOH81qWIVzz34KqFGm8LO3N9hMYQ.jpg" style={{width: "2rem"}}/></span> 2039 35th, CA San Francisco 94016
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
        </body>
   
        </>
    )
}

export default EventsList