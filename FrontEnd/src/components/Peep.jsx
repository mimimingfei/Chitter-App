import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Peep = ({ firstName, lastName, peepContent, peepCreatedTime }) => {
    return (
        <Card className="my-3">
            <Card.Body>
                <Card.Title>{firstName+lastName}</Card.Title>
                <Card.Text>{peepContent}</Card.Text>
                <Card.Footer className="text-muted">{peepCreatedTime}</Card.Footer>
            </Card.Body>
        </Card>

    )
};

export default Peep;