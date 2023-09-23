import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, mediumCoverImage, title, descriptionFull, genres}) {
    return (
        <div>
            <img src={mediumCoverImage} alt={title}/>
            <h2>
                <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
            </h2>
            <p>{descriptionFull.length > 235 ? `${descriptionFull.slice(0, 235)}...` : descriptionFull}</p>
            <ul>
                {genres.map((genre, index) => (<li key={index}>{genre}</li>))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    mediumCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}


export default Movie;