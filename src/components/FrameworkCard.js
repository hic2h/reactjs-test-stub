import React from 'react';
import PropTypes from 'prop-types';

const FrameworkCard = ({ name, description }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

FrameworkCard.defaultProps = {
    description: '',
};

FrameworkCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
};

export default FrameworkCard;