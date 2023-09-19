'use strict';

/* react-for-beginners */






///* 5.0 - Introduction */
/* CRA 사용하여 프로젝트 생성 */
if(true) {
    //  이제까지는 script를 import함으로써 React가 만들어졌었음
    //  이제는 create-react-app을 이용하여 편하게 React를 만들게 됨

    //  1. create-react-app
    //      - 많은 script와 많은 사전설정들이 준비되어 있음
    //      - 개발 서버에 접근, 자동으로 새로고침, 즉각적으로 앱 안에 CSS 포함시켜주기 등의 기능들이 포함되어 있음
    
    //  2. create-react-app 사용 준비 - 1
    //      2-1. node.js 설치
    //          - https://nodejs.org/ko
    //      2-2. node.js 설치되었는지 확인
    //          - Terminal > New Terminal > 'node -v'
    //          => v18.17.1
    //      2-3. npx도 설치되었는지 획인(커맨드를 작동시킬 수 있는지 확인) 
    //          - Terminal에 'npx' 명령어도 입력해보기 => 작동되면 'exit' 명령어를 입력하여 나감

    //  3. create-react-app 사용 준비 - 2
    //      3-1. Terminal에 cra를 이용하여 새로운 프로젝트 생성
    //          - 'npx create-react-app 프로젝트명'
    //          - 'npx create-react-app react-for-beginners'
    //      3-2. 프로젝트 생성이 완료되면 'Happy hacking!'이라고 뜸. 확인하기
    //          - 생성한 프로젝트 안에 있는 파일 확인 
    //              > package.json
    //                  - 모든 script들을 찾아낼 수 있는 파일
    //                  - 실행시킬 수 있는 script들이 있음
    //                  - 해당 파일 안에 있는건 cra에 의해 만들어진 것
    //                  - 생성한 프로젝트의 정보와 이 프로젝트가 설치한 모듈들에 대한 정보들을 json 형태로 모아놓은 파일
    //                  - 필요한 패키지들의 목록을 파일로 정리해놓고 목록 파일을 이용하여 단 한번의 명령어로 필요한 패키지들을 모두 설치 할 수 있는 파일
    //              > node_modules
    //                  - package.json에 있는 모듈 뿐만 아니라 package.json에 있는 모듈이 의존하고 있는 모듈 전부를 포함하고 있기에 많은 모듈이 들어가 있음
    //                  - npm으로 새로운 모듈을 설치하게 되면 package.json과 node_modules에 추가됨

    //  4. create-react-app 사용
    //      4-0. 생성한 프로젝트 열기
    //          4-0-1. 프로젝트 직접 열기
    //              - 'code 프로젝트명/'
    //              - 'code react-for-beginners/'
    //          4-0-2. 프로젝트 밖에서 열기
    //              - 'cd react-for-beginners'
    //      4-1. cra로 생성한 프로젝트 안에 있는 package.json 파일 속 script 실행해보기
    //          - development server(개발용 서버) 만들기
    //              > 'npm run start' 또는 'npm start'
    //                  - 잠시 후 자동적으로 http://localhost:3000/ React 브라우저가 뜸
    //                  - 이는 cra를 사용해서 앱을 만들었을 때 초기 버전이라고 할 수 있음
    //      4-2. cra로 생성한 프로젝트 안에 있는 src 폴더
    //          - 모든 파일들을 넣을 폴더
    //              > index.js
    //                  - 가장 중요한 파일
    //                  - 강의 내용과 다르게 나옴. 
    //                   React-app이 업데이트 되면서 ReactDOM.render 구문이 폐기되고, ReactDOM.createRoot 구문으로 대체됨
    //      4-3. cra로 생성한 프로젝트 안에 있는 public 폴더
    //              > index.html
    //                  - 애플리케이션들을 index.html에 넣어주도록 설정되어 있음
    
    //  5. create-react-app 장점 
    //      5-1. 미리 script들을 import할 필요없음
    //          - 4-1에서 열린 React 브라우저를 개발자도구로 확인하면, 이전에 cra를 사용하기 전 import했던 script들 코드처럼 script들이 이미 존재하고 있음
    //      5-2. Auto-Reload(자동 재실행)
    //       

    //  6. src 폴더에서 index.js와 app.js 파일을 제외한 나머지 삭제
    //   - 두 파일은 필요한 부분만 남기도록 수정
    //       > index.js
    //          - React 애플리케이션을 렌더링 해주는 역할
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

    //       > App.js
    //          - App Component를 렌더링 해주는 역할
            /*  
                function App() {
                    return (
                        <div>
                        <h1>Welcome back!</h1>
                        </div>
                    );
                }

                export default App;
            */


    //  7. 1 파일 당 1 Component를 가지고 있다고 생각하기
    //      - 필요한 Component는 import하여 사용
    //          => import App from './App';


}




///* 5.1 - TOUR OF CRA */
/* CRA 사용하여 Component 생성, props 생성, PropTypes 확인 */
if(true) {
    //  1. Button.js 파일 생성 및 작성
    //      - react-for-beginners > src > 'Button.js'
    //      - export default Button;를 넣어서 다른 js 파일에서도 Button Component을 가져올 수 있게 함
        /*  
            function Button({text}) {
                return (
                    <button>{text}</button>
                );
            }

            export default Button;
        */
    
    //  2. App.js에 Button.js를 가져오기 위해 import
    //          => import Button from "./Button";
    //      - 이떄 Terminal을 보면 Button을 사용하지 않았다고 에러떠있는데, 이건 cra가 도와주는거임
    //       Button을 import까지 했지만, 사용하지 않았기때문에 발생하는 에러
    //          => 'Line 1:8:  'Button' is defined but never used  no-unused-vars'

    //  3. App.js에 Button Component 사용
    //          => <Button />
        /*  
            import Button from "./Button";

            function App() {
                return (
                    <div>
                        <h1>Welcome back!!</h1>
                        <Button />
                    </div>
                );
            }

            export default App;
        */

    //  4. Button의 prop으로 text를 전달
    //          => <Button text={"Continue"}/>

    //  5. Button의 props들의 type을 확인하도록 PropTypes 설치
    //      - PropTypes install
    //      5-1. Terminal > New Terminal
    //      5-2. 'cd react-for-beginners'
    //      5-3. 'npm i prop-types'
    
    //  6. Button.js에 PropTypes를 import
    //          => import PropTypes from "prop-types";

    //  7. Button.js에서 propTypes를 이용
    //      - text의 타입이 string이고, 렌더링 시에 반드시 값이 있어야한다고 설정
    //          => Button.propTypes = {text: PropTypes.string.isRequired};
    
    //  8. 특정 Component에 CSS를 사용하려면 세가지 선택지가 있음
    //      > 선택지 1. 평범한 CSS 
    //              - 'src 폴더에 styles.css' 파일 생성
    //              - 이 경우라면 index.js에 'styles.css'파일을 import 해야 함
    //               그러면 이 CSS 파일은 index.js 페이지의 모든 것들에 적용되버림
    //                  => import "./styles.css";
    //      > 선택지 2. style prop을 사용
    //              - Component안에 있는 HTML 요소인 태그 속성에 style={{}}로 CSS 설정
    //      > 선택지 3. CSS modules 사용
    //              - cra로 인해 특정 Component를 위한 CSS파일을 만들 수 있는 기능을 얻었음
    //              - 생성한 CSS파일을 js모듈에 import
    
    //  9. CSS modules 사용
    //      9-1. src 폴더에 'Button.modules.css' 파일 생성
    //      9-2. 해당 파일에 btn 클래스 생성
                /*  
                    .btn {
                        color: white;
                        background-color: royalblue;
                    }
                */
    //      9-3. Button.js에 Button.modules.css 파일을 import
    //          => import styles from "./Button.module.css";
    //      9-4. Button.js에 Button Component 안에 있는 button 태그의 className을 {styles.btn}으로 설정
    //          - cra는 CSS modules에서 작성한 CSS 코드를 JavaScript Object로 변환시켜줌
    //          - JavaScript Object는 9-2에서 작성한 btn을 가지고 있음
    //              => <button className={styles.btn}>{text}</button>
    
    //  10. 브라우저 확인
    //      - 개발자도구로 button의 클래스명을 확인해보면 cra는 무작위로 랜덤 클래스명을 준다는 것을 알 수 있음
    //      - 이는 다른 style들도 modular(모듈러)가 될 수 있다는 의미
    //      - cra는 랜덤하게 보이는 클래스 이름을 생성하기에 동일한 class이름인 btn을 다른 파일 내에서도 사용할 수 있음

    //  11. 애플리케이션을 위한 또다른 CSS module 만들기
    //      11-1. src 폴더에 'App.module.css' 파일 생성
    //      11-2. App.js에서 style 입힐 코드
    //          => <h1>Welcome back!!</h1>
    //      11-3. App.js에 있는 코드를 위한 class 이름을 title로 정하고, App.module.css 파일에 작성
                /*  
                    .title {
                        font-family:  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        font-size: 18px;
                    }
                */
    //      11-4. App.js에 App.module.css 파일 import
    //          - h1 태그에 style을 넣고싶을 때 className prop 추가하기
    //              => <h1 className={styles.title}>Welcome back!!</h1>
    //      11-5. 개발자도구로 className확인


    //  - cra가 클래스명을 랜덤으로 부여하는데, 이는 자기만의 스타일을 가질 수 있게 하는 것임
    //   다른 클래스 이름들을 사용하기 위해 기억하고 있어야만 하는 것보다 더 좋은 것임

    //  12. App.module.css에서 클래스 이름을 title로 사용하고, Button.module.css에서도 클래스 이름을 title로 사용한다면?
    //      - 그래도 클래스명은 겹치지 않음


}