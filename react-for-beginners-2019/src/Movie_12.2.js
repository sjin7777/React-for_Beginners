import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie( {year, title, descriptionFull, poster} ) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__desc">{descriptionFull}</p>
            </div>
        </div>
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