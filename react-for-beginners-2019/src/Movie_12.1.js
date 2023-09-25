import React from "react";
import PropTypes from "prop-types";

function Movie( {id, year, title, descriptionFull, poster} ) {
    return (
        <h4>{title}</h4>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;