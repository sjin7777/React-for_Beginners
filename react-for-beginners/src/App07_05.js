import { useState, useEffect } from "react";

function App0705() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

// 1번
/* 
    useEffect(() => {
        fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
            .then(response => response.json())
            .then(json => {
                setMovies(json.data.movies)
                setLoading(false);
            });
    }, []);
*/

// 2번
/* 
    const getMovies = async() => {
        const response = await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies()
    }, []);
*/

// 3번 => 제일 간단하게 표현
    const getMovies = async() => {
        const json = await (
            await fetch(
                'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
            )
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies()
    }, []);


    return (
        <div>
            {loading ? (
                <h1>Loading....</h1>
                ) : (
                <div>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <img src={movie.medium_cover_image} />
                            <h2>{movie.title}</h2>
                            <p>{movie.summary}</p>
                            <ul>
                                {movie.genres.map((genre, index) => (<li key={index}>{genre}</li>))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default App0705;