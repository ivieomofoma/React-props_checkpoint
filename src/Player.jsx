import Card from 'react-bootstrap/Card';

const Player = ({Name, Age, Team, Nationality,JerseyNumber, ImageUrl}) => {
  return (
    <Card style={{ width: '300px' }}>
      <Card.Img variant="top" src={ImageUrl} style={{width: '300px', height: '205px'}} />
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Text>
        Team: {Team} <br/>
          Age: {Age} <br/>
          Nationality: {Nationality} <br/>
          JerseyNumber: {JerseyNumber}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


export default Player;