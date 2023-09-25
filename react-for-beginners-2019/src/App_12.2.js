import React from "react";
import axios from "axios";
import Movie from "./Movie_12.2";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => { 
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); 
    // console.log(movies.data.data.movies);

    // ES6 이용하여 위 코드 변경
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); 
    // console.log(movies);
    
    // 하나는 setState의 movies이고, 다른 하나는 axios에서 온 movies
    // this.setState({movies:movies});

    // ES6 이용하여 위 코드 변경
    this.setState({movies, isLoading: false});

  }

  componentDidMount() { 
    this.getMovies(); 
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        { isLoading ? ( 
          <div class="loader">
            <span class="loader__text_">Loading...</span>
          </div>
          ) : (
            <div class="movies">
              {movies.map(movie => 
                <Movie 
                  key={movie.id} 
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  descriptionFull={movie.description_full} 
                  poster={movie.medium_cover_image}  
                />
              )}
            </div>
          )
        }
      </section>
    )
  }
}
export default App;
