import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './Peep.css'

const Peep = ({ id, firstName, lastName, peepContent, peepCreatedTime }) => {
    return (
        <Card key={id} className="card">
            <Card.Body>
                <Card.Text className="user">{firstName+lastName}</Card.Text>
                <Card.Text className="content">{peepContent}</Card.Text>
                <Card.Text className="time">{peepCreatedTime}</Card.Text>
            </Card.Body>
        </Card>

    )
};

export default Peep;