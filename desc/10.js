'use strict';

/* react-for-beginners-2019 */





///* 10.0 - Creating your first React Component */
// index.js
// App_10.0.js
// Potato_10.0.js
{
    //  - Component: application인 function은 HTML을 반환하는 함수
    //  - Component를 사용하고자 할 때, Component의 형태: <컴포넌트명 />
    //  - JSX: JavaScript + HTML

    //  1. Component 생성 예시
    //      1-1. src > 'Potato.js' 파일 생성
    //      1-2. Component를 작성할 때마다 import React from "react"를 써주어야 함
    //          이를 import 하지 않으면, react는 여기에 JSX가 있는 Component를 사용하는 것을 이해하지 못함
    //              => import React from "react";
    //      1-3. Component 선언
    //          - 함수 생성하듯이 작성. Component명은 반드시 대문자
    //              => function Potato() {}
    //          - return 값에 렌더링할 것들 담기
    //              => return ( <h3> I love Pizza </h3> )
    //      1-4. Component export
    //          - 선언 후에는 Component를 export 해야 사용이 가능해짐
    //              => export default Potato;
            /*
                import React from "react";

                function Potato() {
                    return (
                        <h3> I love Pizza </h3>
                    );
                }

                export default Potato;
            */

    //  2. Component 사용 예시 1
    //      - index.js 파일은 렌더링하여 브라우저에 보여줌
    //      - index.js 파일에 Potato Component를 추가하기 

    //      2-1. Potato Component를 import
    //              => import Potato from './Potato';
    //      2-2. 렌더링되는 구간에 Potato Component 추가
    //              => <Potato />
            /*
                import React from 'react';
                import ReactDOM from 'react-dom/client';
                import App from './App';
                import Potato from './Potato';

                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(
                <React.StrictMode>
                    <App />
                    <Potato />
                </React.StrictMode>
                );
            */

    //  3. Component 사용 예시 2
    //      - index.js에서 이미 렌더링 되고 있는 App Component 안에 넣기
    //      - App.js 파일에 Potato Component 추가하기

    //      3-1. Potato Component를 import
    //              => import Potato from './Potato';
    //      3-2. 렌더링되는 구간에 Potato Component 추가
    //              => <Potato />

    //  4. 코드
    //      - index.js
            /*
                import React from 'react';
                import ReactDOM from 'react-dom/client';    
                import App from './App';

                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(
                <React.StrictMode>
                    <App />
                </React.StrictMode>
                );
            */
            
    //      - App.js
            /*
                import React from "react";
                import Potato from "./Potato";

                function App() {
                
                    return (
                        <div>
                            <h1>Hello</h1>
                            <Potato />
                        </div>
                    );
                }

                export default App;
            */

    //      - Potato.js
            /*
                import React from "react";

                function Potato() {
                    return (
                        <h3> I love Pizza </h3>
                    );
                }

                export default Potato;
            */

}






///* 10.1 - Reusable Components with JSX + Props */
// App_10.1.js
{
    //  1. App.js 안에 또다른 Component를 사용하고 App Component에 렌더링
        /*
            import React from "react";

            function Food() {
                return (
                    <h1>포테이토피자</h1>
                )
            }

            function App() {
                return (
                    <div>
                        <h1>Hello</h1>
                        <Food />
                    </div>
                );
            }

            export default App;

        */

    //  2. Component에서 Component 또는 children Component로 정보 보내고 받기
    //      - App Component에서 Food Component로 정보를 보내고 Food Component에서 그 정보 사용하는 방법

    //      2-1. 커스텀 Food Component favorite prop을 지정
    //          - Food Component에 favorite라는 이름의 prop를 kimchi라는 value로 부여함
    //          - 커스텀 Component에서 prop과 그에 맞는 값을 부여했을 경우 실제 Component에 그 prop과 그 값을 전달하는 것임
    //              =>  <Food favorite="kimchi" />
    //      2-2. 커스텀 Component에서 전달한 props인 favorite prop을 실제 Component가 받기
    //          - 실제 Component의 argument(인자)로 전달한 값들을 받아오기
    //              => function Food({favorite}) {...}
    //              => function Food(props){...}
    //      2-3. 콘솔로그 확인
    //          - Food 안에 console.log로 값을 찍어보았을 때, 2개씩 나온다면 index.js 파일 수정
    //              => <React.StrictMode></React.StrictMode> 삭제
    //          - 인자를 props로 받고, props로 찍었을 경우 object인 {favorite: 'kimchi'} 출력
    //              => 여기서 object는 Component로 전달된 모든 props들의 값
    //          - 인자를 props로 받고, props.favorite으로 찍었을 경우 string인 "kimchi" 출력
    //          - 인자를 {favorite}로 받고, favorite로 찍었을 경우 string인 "kimchi" 출력

    //  3. Food Component에서 리턴하는 값을 인자 값으로 설정
    //          => return ( <h1>{favorite}</h1> );
    
    //  4. 브라우저에서 값이 바뀌는지 확인

    //  5. App Component 안에 Food Component를 여러개 넣고, prop인 favorite의 값들만 다르게하여 렌더링하기
            /*
                import React from "react";

                function Food({favorite}) {
                    console.log(favorite);
                    
                    return (
                        <h1>{favorite}</h1>
                    );
                }


                function App() {
                    return (
                        <div>
                            <h1>Hello</h1>
                            <Food favorite="kimchi" />
                            <Food favorite="ramen" />
                            <Food favorite="samgiopsal" />
                            <Food favorite="chukumi" />
                        </div>
                    );
                }

                export default App;
            */

    //  6. 브라우저에서 값들 뜨는거 확인함
    //      - JSX + props으로 동적 데이터가 있는 Component를 재사용했고 확인함
    
    
}





///* 10.2 - Dynamic Component Generation */
// App_10.2.js
{
    //  1. 이전 강의때처럼 매번 새로운 음식을 추가할 때마다 Component를 추가하는건 너무 번거로움

    //  2. 배열 생성하고 그 안에 값들을 넣어서 한번에 처리하게 함
    //      2-1. 배열 생성
    //              => const foodILike = [];
    //      2-2. 배열안에 각 메뉴에 대한 object를 넣어둠
    //      2-3. array.map(arg) 함수 이용
    //          - array의 각 item에 arg 함수를 적용하고 새로운 array를 리턴
    //      2-4. map()을 이용하여 foodILike 배열을 확인하고 그 배열을 리턴받기
    
    //  3. map을 이용하여 prop을 넣은 커스텀 Component를 foodILike 배열의 길이만큼 실행
    //      => {foodILike.map((item) => ( <Food name={item.name} image={item.image} />))}

    //  4. 실제 Food Component의 인자값에 필요한 prop 넣어서 렌더링
    //      => function Food({name, image}) { ... }

    //  5. 사진 엑박이 뜨는 이유는 이미지주소만이 아닌 이미지가 포함된 주소를 가져와서 그런 것임
    //     예시로 들고옴. (.jpg 이런걸로 가져오기)

}





///* 10.3 - map Recap */
// App_10.31.js
{
    //  - map 연습

    //  1. foodILike 배열에 map을 이용하고, map의 첫번째 인자인 함수를 renderFood로 설정
    //      - array.map(arg): array의 각각의 item별로 arg함수를 호출하여 실행
    //          => <div>{foodILike.map(renderFood)}</div>
        
    //  2. renderFood 함수 생성하여 각 음식 출력해보기
    //          => function renderFood(dish) { console.log(dish); }
    
    //  3. renderFood 함수 이용하여 Food Component 사용하기
    //          => function renderFood(dish) { return <Food name={dish.name} image={dish.image}/> }
}

// App_10.3.js
{
    //  1. 각각 list내의 child는 unique한 key prop을 가져야 함
    //      - key prop이 없으면 콘솔 에러가 뜸
    //      - react의 모든 element들이 다르게 보여야 하므로 뜨는 에러임

    //  2. foodILike 배열에 id 추가

    //  3. 사용되고 있는 커스텀 food Component의 prop에 key값을 id로 추가
    //          => {foodILike.map((item) => ( <Food key={item.id} name={item.name} image={item.image} />))}

    //  4. 참고로 key prop은 실제 Component에 사용되지 않으므로 전달되지는 않음

    //  5. img 태그에는 alt prop 이 반드시 있어야 함. (시각 장애인을 위함)
    //          => <img alt={name} src={image}/>

}





///* 10.4 - Protection with PropTypes */
// App_10.4.js
{
    // 부모 Component로부터 전달받은 props가 원하는 props인지 확인

    //  1. propsTypes 설치
    //      - propTypes: 전달받은 props가 원하는 props인지를 확인해줌
    //          => npm i prop-types

    //  2. App.js에 propTypes 사용
    //      2-1. PropTypes import
    //          => import PropTypes from "prop-types";
    //      2-2. 다양한 예시를 위해 foodILick 배열에 rating(점수) 추가
    //      2-3. 커스텀 Food Component에도 추가
    //          => <Food key={item.id} name={item.name} image={item.image} rating={item.rating}/>
    //      2-4. 실제 Food Component에도 추가
    //          => function Food({name, image,rating}) { ... return(... <h4>{rating}/5.0</h4> ... ); }
    //      2-5. 얻고자 하는 Food Component의 props 설명 적기 (Component 안에 작성하는 것 아님!)
    //          - PropTypes.타입                (필수가 아닐 경우)
    //          - PropTypes.타입.isRequired     (필수일 경우)
                /*
                    Food.propTypes = {
                        name: PropTypes.string.isRequired,
                        image: PropTypes.string.isRequired,
                        rating: PropTypes.number
                    }
                */
    
}