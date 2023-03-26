import PropTypes from 'prop-types';

const Peep = ({ firstName, lastName, peepContent, peepCreatedTime }) => {
    return (
        <div>
        <p>Posted by: {firstName + lastName}</p>
        <p>{peepContent}</p>
        <p>Posted on: {peepCreatedTime}</p>
    </div>
    );
};

Peep.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    peepContent: PropTypes.string.isRequired,
    peepCreatedTime: PropTypes.string,
}

export default Peep;