'use strict';

/* react-for-beginners-2019 */





///* 14.0 - Getting Ready for the Router */
// App_14.0.js
// Movie_14.0.js
// Home_14.0.js
// About_14.0.js
{
    //  1. 페이지 이동을 가능하게 하는 패키지 설치
    //      - react-router-dom: 네비게이션을 만들어주는 패키지
    //          => npm install react-router-dom

    //  2. 폴더 및 파일 정리
    //      2-1. src > 'components' 폴더 생성
    //      2-2. src > components > 'Movie.js', 'Movie.css' 파일 이동
    //          - 해당 파일들을 import하는 App.js의 경우, 경로 수정 필수
    //              => import Movie from "./components/Movie";
    //      2-3. src > 'routes' 폴더 생성
    //      2-4. src > routes > 'Home.js' 파일 생성
    //      2-4. src > routes > 'About.js' 파일 생성
    //      2-5. src > routes > 'Home.css' 파일 생성
    //          - 'App.css' 파일 내용 복붙

    //  3. Home.js와 About.js
    //      3-1. Home.js
    //          - 영화 전체를 보여주는 페이지
    //      3-2. About.js
    //          - 지정한 영화 하나만을 보여주는 페이지

    //  4. App.js에 작성한 코드들을 Home.js에 복붙
    //      - Component명 변경
    //          => class Home extends React.Component { ... }
    //          => export default Home;
    //      - CSS 파일 import (기존 App.css import 한건 제거)
    //          => import "./Home.css";

    //  5. App.js 파일 수정
    //      - 기존 내용 다 지우고 이번에는 함수형 Component 생성하여 필수 코드만 작성
    //          => import React from "react";
    //          => function App() {... return( <div>hi</div> ...)}
    //          => export default App;

    //  6. About.js 파일 작성
    //      - 기본 내용만 작성
    //          => import React from "react";
    //          => function About() { ... return( ... )}
    //          => export default About;

}




///* 14.1 - Building the Router */
// App_14.1.js
// Home_14.1.js
// About_14.1.js
{
    // 1. App.js에 router 생성
    //  - 그냥 <Home />을 리턴하는 것이 아니라 router를 반환
    //  - router는 URL를 확인한 후 해당 Component로 보냄
    //      => URL이 "/"  일 경우     - "Home.js"로 보냄
    //      => URL이 "/about" 일 경우 - "About.js"로 보냄

    //  2. router에 필요한 Component들을 import
    //      => import { HashRouter, Route } from "react-router-dom";

    //  3. App Component에서 리턴하는 값에 router Component들 이용하여 About.js로 이동하기
    //      3-1. HashRouter 안에 Route 넣어줌
    //          => <HashRouter><Route /></HashRouter>
    //      3-2. About Component를 import
    //          => import About from "./routes/About_14.0";
    //      3-3. Route의 props으로 path(경로)와 element(컴포넌트)를 작성
    //          => <Route path="/about" element={<About />}/>

    //  4. About Component에 값을 넣고 이동이 되는지 확인
    //      => retrun (<span>About this page</span>);

    //  5. 에러 뜸
    //      - 강의와 버전이 달라서 생긴 에러. 
    //      - Routes Component 안에 Route Component가 있어야 함
    //          =>  <HashRouter><Routes><Route path="/about" element={<About />} /></Routes></HashRouter>
    //      - import에도 추가
    //          => import { HashRouter, Routes, Route } from "react-router-dom";

    //  6. About 페이지 확인 - 이상 없음
    //      - http://localhost:3000/#/about
    //      - http://localhost:3000/react-test2019#/about
    //      - HashRouter를 사용하면 #이 붙음
    //      - # 이 없으면 about 페이지로 안 가짐

    //  7. 마찬가지로 Home Component도 추가하기
    //          => <Route path="/" element={<Home />} />
    //      - Home Component로 가는 Route prop에 exact={true} 추가
    //      - URL이 "/" 일 때만 해당 Component를 렌더링해줌
    //      - exact는 이 경로가 아니면 렌더링 안한다는 뜻
    //          => <Route path="/" exact={true} element={<Home />} />

    //  8. Home 페이지 확인 - 이상 없음
    //      - http://localhost:3000/
    //      - http://localhost:3000/#/
    //      - http://localhost:3000/react-test2019#/

}





///* 14.2 - Building the Navigation */
// App_14.2.js
// Navigation_14.2.js
{
    //  1. src > components > 'Navigation.js' 파일 생성 및 작성
    //          => import React from "react";
    //          => function Navigation() { ... return(...);}
    //          => export default Navigation;

    //  2. Navigation Component 안에 리턴값 작성
    //      - a 태그를 이용할 경우 새로고침하며 이동하게 됨. 즉 리액트를 사용하며 이동하는게 아님
    //      - 예시
    //          => <a href="/">Home</a>
    //          => <a href="/about">About</a>
    //      - Link Component 사용
    //          => import { Link } from "react-router-dom";
    //          => <Link to="/">Home</Link>
    //          => <Link to="/about">About</Link>
    
    //  3. App Component에 있는 HashRouter Component 안에 Navigation Component 사용
    //          => import Navigation from "./components/Navigation"
    //          => <HashRouter><Navigation />...</HashRouter>

    //  4. 브라우저에서 확인 => 이상 없음

    //  5. Link Component를 사용하려면 
    //      5-1. Router Component 안에서 사용해야 함(BroswerRouter / HashRouter)
    //      5-2. Link Component에 있는 to 속성 값은 Route Component에 있는 path 속성 값과 같아야 함

    //  6. App Component에 있는 HashRouter를 BroswerRouter로 변경해보고 차이점 확인
    //      - URL에 #이 없음
    //          => import { BrowserRouter, Routes, Route } from "react-router-dom";
    //          => <BroswerRouter><Navigation /> ... </BroswerRouter>

    //  참고로, Link Component는 html로 들어갈 때, a 태그로 들어가게 되므로 css로 꾸미려면 a 로 하면 됨

}







///* 14.3 - Sharing Props Between Routes */
// App_14.3.js
// Navigation_14.3.js
// Detail_14.3.js
// Movie_14.3.js
{
    //  1. 모든 Route Component는 기본값으로 props를 가지고 있음 
    //    그렇기에 Route Component 안에서 설정한 element Component는 그 정보도 가지고 있게 되고,
    //    클릭으로 인해 실제 Component로 router가 되면 정보도 전달됨

    //  2. 많은 정보를 페이지에 보내기 위해 Link Component prop인 to의 값을 object로 변경할 수 있음
    //              => <Link to={{pathname:"/about", state: {fromNavigation: true}}}>About</Link>
    //      - 해당 링크를 클릭하면, react router는 
    //          3-1. "/about"으로 데려감
    //          3-2. About Component를 render
    //          3-3. props state의 값인 {fromNavigation: true} 라는 정보도 route로 보내줌

    //  3. 다시 원래대로 변경
    //          => <Link to="/about">About</Link>

    //  4. 상세 페이지 생성 및 작성
    //      - src > routes > 'Detail.js'
    //      - props를 받아오기 위해 인자로 props 넣기
    //          => import React from "react";
    //          => function Detail(props) { ... return (..); }
    //          => export default Detail;


    //  4. 영화를 클릭했을 때, 상세 페이지로 가도록 Movie Component에 Link 사용하기
    //      4-1. Link Component import
    //          => import { Link } from "react-router-dom";
    //      4-2. 가장 상위의 div 태그 바로 아래에서 다른 하위 태그들을 Link Component가 묶어줌
    //          => <div><Link><img />...</Link></div>
    //      4-3. Link 태그 props에 Movie Component가 받은 props 값들을 state로 설정하여 담고, pathname 경로로 전달
    //          - 참고로 state안에 있는 값들은 year:year 이런 식으로 되어있는 것임. ES6부터 저런식으로 줄여서 작성 가능
    //              => <Link to={{ pathname: "/movie-detail", state: {year, title, descriptionFull, poster, genres}}}>

    //  5. App Component에서 Route Component를 이용하여 Detail.js로 route하기
    //      - Route Component 생성 후 경로를 4-3에서 적었던 pathname과 동일하게 작성
    //          => import Detail from "./routes/Detail_04.3.js";
    //          => <Route path="/movie-detail" element={<Detail />} />

    //  6. Detail Component에 props를 콘솔로그 찍어보았지만 나오지 않음
    //          => function Detail(props) {console.log(props) ... }
    
    //  7. 4-3처럼 Link Component를 이용해서 props를 전달하는 방식은 예전 방식이라고 한다
    //      - 새로운 방식으로 변경
    //          => <Link to={`/movie-detail`} state={{ year, title, descriptionFull, poster, genres }} >

    //  8. Detail Component에서 받아오는 방법
    //      8-1. useLocation import
    //          => import { useLocation } from "react-router-dom";
    //      8-2. useLocation 사용
    //          => const location = useLocation();
    //          => console.log(useLocation());

    //  9. 해결

}






///* 14.4 - Redirecting  */
// App_14.4.js
// Detail_14.4.js
{
    //  1. 영화를 클릭하지 않고 URL로만 상세 페이지로 가게 된다면, state는 undefined로 나오기 때문에 핸들링 해야함

    //  2. Detail Component를 class Component로 변환
    //          => class Detail extends React.Component { render() { return ( ... ); }}
    
    //  3. class Component 에서는 useLocation()을 사용할 수 없어서 강의 내용과 다르게 진행.. 
    //      - 다시 function Component로 변환

    
    //  4. Detail Component에서 props 가져오기
    //          => const location = useLocation();
    //      - state 가져와서 콘솔로그로 찍어보기
    //          => console.log(location.state);
    
    //  5. 영화를 클릭했을 때에는 state에 대한 정보가 콘솔에 찍히는데, 바로 URL로만 페이지를 이동하니 null로 뜸 
    
    //  6. 강의에서는 componentDidMount()를 사용했는데, 그거는 class Component에서 사용할 수 있으므로 useEffect() 사용하여 대체
    //          => useEffect(() => { }); 

    //  7. state의 값이 null이거나 undefined일 경우 리다이렉트 하기 (바로 "/" 경로로 보내버리기)
    //      - 강의에서는 props에서 history를 꺼내와서 history.push("/")로 해결하는데 여기서는 못하므로 대체해야 함
    
    //  8. 강의와 다르게 리다이렉트를 useNavigate를 사용하여 대체
    //          => import { useLocation, useNavigate } from "react-router-dom";
    //          => useEffect(() => { if(location.state === null) navigate("/"); }); 

    //  9. 상세 페이지에 영화 제목 render 해보기
    //      - 이런 식으로 하면 URL로 상세 페이지 들어가게 됐을 때, 리다이렉트 하지 않고 에러가 뜸
    //      - location이 존재하지 않기 때문에 에러가 뜨는 것
    //          => <div>{location.state.title}</div>
    
    //  10. location의 값이 있는지 체크한 후에 render
    //      - return (location.state) ? <div>{location.state.title}</div> : null;

    //  11. 상세페이지 경로를 id값으로 변경하기
    //      11-1. App.js
    //              => <Route path="/movie/:id" element={<Detail />}/>
    //      11-2. Movie.js
    //          - 인자에 id도 받아옴
    //              => function Movie( {id, year, title, descriptionFull, poster, genres} ) { ... }
    //              => <Link to={`/movie/${id}`} state={{ year, title, descriptionFull, poster, genres }} >

} 