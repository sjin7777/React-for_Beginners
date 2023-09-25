'use strict';

/* react-for-beginners-2019 */





///* 12.0 - Fetching Movies from API */
// App_12.0.js
{
    // javascript에서 data를 fetch하는 방법
    //  - fetch() 사용
    //  - axios() 사용: fetch 위에 있는 작은 layer라고 생각하기. 2019 코스에서는 axios를 사용

    //  1. axios 설치
    //          => npm install axios

    //  2. 사용할 API
    //      - YTS에서 만든 API 사용
    //      - 안되길래 이전에 사용했던 API 가져옴
    //          => https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
    //      - 위에 코드도 안되길래 노마드코더 깃허브에 있는거 가져옴
    //          => https://yts.mx/api/v2/list_movies.json?sort_by=rating
    //      - 댓글에 있는 링크
    //          => https://yts-proxy.now.sh/list_movies.json?sort_by=rating
    
    //  3. App.js에서 axios import
    //          => import axios from "axios";

    //  4. componentDidMount()에 asios.get(URL) 추가
    //      - 현재 상태에서는 에러남
    //          => componentDidMount() { axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"); }
    //          => componentDidMount() { axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); }

    //  5. JavaScript에게 componentDidMount() 함수가 끝날 때까지 시간이 걸릴 수 있다는 것을 알려야 함
    //      -  axios.get은 빠른 편이 아니여서 기다려야 함
    //      5-1. getMovies라는 함수 생성하여 componentDidMount() 안에 있는 코드를 넣고, componentDidMount() 함수 안에는 getMovies()를 넣음
    //          component가 mount되면 getMovie를 호출
    //          => getMovies = () => { const movies = axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); }
    //          => componentDidMount() { this.getMovies(); }
    //      5-2. 이를 위해 비동기를 사용 async, await
    //          JavaScript에게 componentDidMount() 함수가 끝나기까지 기다리라는 의미
    //          => getMovies = async () => { const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); }

    //  6. 안 됨...... 
    //      - API 링크로도 못감
    //      - 이전에 만든거 https://sjin7777.github.io/react-test/ 도 안들어가짐
    

    //  7. 해결... 
    //      - react-for-beginners 폴더에 있는 build 폴더 삭제하니 됨... 

}






///* 12.1 - Rendering the Movies */
// App_12.1.js 
// Movies_12.1.js
{
    //  1. API에서 data를 가져왔으니, 영화 목록 출력
    //          => const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); 
    //          => console.log(movies.data.data.movies);

    //  2. ES6 이용하여 위 코드 변경
    //          => const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); 
    //          => console.log(movies);

    //  3. movies를 state에 넣기
    //      - 하나는 setState의 movies이고, 다른 하나는 axios에서 온 movies
    //          => this.setState({movies:movies});
    //      - ES6 이용하여 변경
    //          => this.setState({movies});

    //  4. isLoading state도 변경
    //          => this.setState({movies, isLoading: false});

    //  5. render() 안에 있는 코드 수정하여 로딩이 끝나면 "We are ready"가 아닌 영화 목록으로 보여주기

    //  6. 영화 관련 js 파일 및 Component 생성하여 작성
    //      6-1. src > 'Movie.js' 파일 생성 및 기본 코드 작성
    //          - component가 state가 필요 없을 경우에는 class Component로 할 필요 없음. 그러므로 Movie Component는 function으로 생성
    //              => import React from "react";
    //              => function Movie() { ... return( ... ); };
    //              => export default Movie;
    //      6-2. Movie Component가 얻을 props 확인
    //              => import PropTypes from "prop-types";
    //              => Movie.propTypes = { id: PropTypes.number.isRequired, year: PropTypes.number.isRequired, title: PropTypes.string.isRequired, descriptionFull: PropTypes.string.isRequired, poster: PropTypes.string.isRequired }
    //      6-3. Movie Component에 props를 인자로 넣기
    //              => function Movie( {id, year, title, descriptionFull, poster} ) { ... return (<h4>{title}</h4> )}

    //  7. 로딩이 끝나면 Movie Component를 render
    //      7-1. App.js render() 안에 있는 this.state에 movies 추가
    //          => const { isLoading, movies } = this.state;
    //      7-2. Movie Component import
    //          => import Movie from "./Movie_12.1";
    //      7-2. return 안에서 movies를 map을 이용하여 item 하나씩 가져옴, key는 id로 넣기
    //          => <div>{ isLoading ? "Loading..." : movies.map(movie => <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} descriptionFull={movie.description_full} poster={movie.medium_cover_image}  />) }</div>

}


///* 12.2 - Styling the Movies */
// App_12.2.js 
// Movies_12.2.js
{
    //  1. App Component 안에서 return 하여 render 하는 코드 수정
    //      1-1. 다른 값들을 다 감싸고 있는 div 태그를 section 태그로 변경하고 class 명 지정
    //          => <section class="container"> ... </section>
    //      1-2. 로딩 중일 때의 "Loading..." 글자를 태그들 안에 넣기
    //          => <div><span class="loader__text_">Loading...</span></div>
    //      1-3. 로딩 끝났을 때의 값들을 태그 안에 넣기
    //          => <div class="movies">{movies.map(movie => <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} descriptionFull={movie.description_full} poster={movie.medium_cover_image}  />) }</div>

    //  2. Movie Component 안에서 return 하여 render 하는 코드 작성
    
    //  3. App, Movie CSS 파일 생성 및 작성
    //      3-1. App Component에 app.css import
    //          => import "./App.css";
    //      3-2. Movie Component에 movie.css import
    //          => import "./Movie.css";

    //  4. 유튜브 강의 참고
    //      - https://www.youtube.com/watch?v=MqGxMOhPqeI&list=PL7jH19IHhOLNUIOJcGj6egl-dNB-QXjEm
}


///* 12.3 - Adding Genres */
// App_12.3.js 
// Movies_12.3.js
{
    //  1. movie props에 genres array를 포함하기
    //      1-1. Movie props type 확인하는 곳에 추가
    //          => Movie.propTypes = { ... , genres: PropTypes.arrayOf(PropTypes.string).isRequired }
    //      1-2. Movie Component 인자에 추가하여 전달받기
    //          => function Movie({year, title, descriptionFull, poster, genres}) { ... }
    //      1-3. App Component 안에 있는 커스텀 Movie Component 안에서 props genres를 전달하기
    //          => <Movie ... genres={movie.genres} />
    //      1-4. Movie Component에서 받은 genres를 이용하여 render하기
    //          - genres는 배열이므로 여기서도 map을 이용해야 하며, 각 item마다 key가 필요하므로 index도 받아와서 key를 넣어줌
    //              => <ul className="movie__genres">{genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}</ul>


    //  2. JSX에서는 prop으로 class가 아닌 className으로 작성해야 함. 다 변경하기
}


///* 12.4 - Styles Timelapse */


///* 12.5 - Cutting the summary */
// Movies_12.3.js
{
    //  1. 영화 줄거리 길이 조절하기
    //      => <p className="movie__desc">{descriptionFull.slice(0,180)}...</p>
}
