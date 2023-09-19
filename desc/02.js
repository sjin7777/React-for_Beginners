'use strict';

/* react-for-beginners-basic */






///* 2.1 - Before React */
/* 버튼을 몇번 클릭했는지 세는 어플 만들기 */

// Vanilla JS
// 01.vanilla.html
if(true) {
    //  - 이 과정에서 React JS로 개선할 수 있는 점들 확인해보기

    // 1. HTML 생성
    //  - vanilla.html 생성하여 필요없는 태그들 다 지우고 html태그와 body 태그만 남기기
    /* 
        <!DOCTYPE html>
        <html>
            <body></body>
        </html> 
    */
    
    // 2. HTML element 생성
    //  - HTML 생성 후 Interative UI를 바닐라 JS로 만들기 위해 해야하는 단계
    //  - body 태그 안에 button 태그 생성
    //      => <button id="btn">Click me</button>

    // 3. script 태그 생성 후 2에서 생성한 버튼 태그 가져오기 (head 태그 없어서 body 태그 종료된 이후에 넣었음)
    /* 
        <script defer>
            const button = document.querySelector('#btn');
        </script>
    */

    // 4. button 클릭 시 감지하도록 이벤트리스너 추가 
    /* 
        button.addEventListener('click', handleClick);
        function handleClick() {
            console.log('I Have been clicked');
        }
    */


    // 5. 클릭한 횟수 세기 (데이터 업데이트 하기)
    //  - vanilla.html에 span 태그 추가
    //      => <span>Total Clicks: 0</span>
    //  - script 태그에 counter 변수 생성하여 버튼 클릭 시 증가시키기
    /* 
        let counter = 0;
        const span = document.querySelector('span');

        function handleClick() {
            counter = counter + 1;
            span.innerText = `Total Clicks: ${counter}`;
        }
    */

}

// React JS로 만들어보기 전 준비
// 02.react_old.html
if(true) {
    // 1. 02.react_old.html 파일 생성
    
    // 2. React 설치 및 확인
    //  - 두 개의 JavaScript 코드 import 하기
    /* 
        <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    */
    //  - console에서 React, ReactDOM 불러보기 (에러가 뜨지 않아야 React가 여기 코드에 있다는 것임)
    //      React
    //          => {Fragment: Symbol(react.fragment), StrictMode: Symbol(react.strict_mode), Profiler: Symbol(react.profiler), Suspense: Symbol(react.suspense), Children: {…}, …}
    //      ReactDOM
    //          => {__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {…}, createPortal: ƒ, findDOMNode: ƒ, flushSync: ƒ, hydrate: ƒ, …}
    //  - 있는 것을 확인했다면 React.~~~, ReactDOM.~~~를 사용할 수 있음

}




///* 2.2 - Our First React Element */
/* React JS 규칙 */
//  - HTML을 html 파일에 직접 작성하지 않고 JavaScript와 React JS를 이용하여 element를 생성한다

/* React JS로 버튼을 몇번 클릭했는지 세는 어플 만들기 (잘 사용하지 않는 방법) - 1 */
// 02.react_old.html
if(true) {
    // 1. React JS로 클릭 횟수를 알 수 있는 span element 생성
    //  - React를 import 했기 때문에 createElement function을 가진 React object에 접근할 수 있음
    //      => const span = React.createElement('span');

    // 2. body 안에 React element를 가져다 두려면 ReactDOM을 사용해야 함
    //  - import 했으니 사용 가능
    //  - react JS는 interactive하도록 만들어주는 라이브러리 (엔진, interactive한 UI 생성)
    //   react-dom은 라이브러리 또는 패키지인데, 모든 element들을 HTML body에 둘 수 있도록 해줌
    //  - ReactDOM.render(arg1, arg2): React element를 가지고 HTML로 만들어 배치해서 유저에게 보여줌
    //      - arg1: 배치할 대상
    //      - arg2: 배치할 위치
    //  - 주로 body 안에 id가 root인 div를 생성하고, ReactDOM에게 이 안에 넣음

    // 3. id가 root인 div 태그 생성하고, 그 안에 span 넣기
    //  - 유일하게 body 안에 적는 HTML
    //      => <div id="root"></div>
    /* 
        const root = document.querySelector('#root');
        ReactDOM.render(span, root);
    */
    
    // 4. 개발자도구로 span 태그 있는지 확인

    // 5. React JS로 element 생성 시에는 React.createElement(arg1, arg2, arg3)를 사용하게 되는데
    //  arg1에는 원하는 html 태그 이름을 넣음
    //      => const span = React.createElement('span');
    //  arg2에는 arg1 태그의 property(속성)이 들어감. 아무것도 없을 경우에는 null
    //      => const span = React.createElement('span', {id:'span'});
    //  arg3에는 arg1 태그의 content(내용)이 들어감. 해당 태그의 값이나 자식 태그들을 추가할 수 있음
    //      => const span = React.createElement('span', {id:'span'}, 'Hello, I am a span');
    //      => const span = React.createElement('span', null, 'Hello, I am a span');


    // 즉, JavaScript를 이용해 element를 생성했고, React가 그 element를 HTML로 번역함
    
}




///* 2.3 - Events in React */
/* React JS로 버튼을 몇번 클릭했는지 세는 어플 만들기 (잘 사용하지 않는 방법) - 2 */
// 02.react_old.html
if(true) {
    // 1. 클릭할 버튼 생성하기
    //      => const btn = React.createElement('button', null, 'Click me');

    // 2. root 안에 btn을 render하기
    //      => ReactDOM.render(btn, root);

    // 3. span과 btn을 동시에 render하기 (2개의 Component를 가지는 새로운 Component 생성)
    //  3-1. div 태그 생성
    //      - React.createElement의 세번쨰 arg에 보여주고 싶은 순서대로 array 형태로 묶어서 넣음
    //          => const container = React.createElement('div', null, [span, btn]);
    //  3-2. 3-1에서 생성한 태그를 render
    //      - container 안에는 span과 button이 있기 때문에 둘 다 render가 됨
    //          => ReactDOM.render(container, root);

    // 4. span을 h3 태그로 변경
    /* 
        const root = document.querySelector('#root');
        const h3 = React.createElement('h3', null, 'Hello, I am a title');
        const btn = React.createElement('button', null, 'Click me');
        const container = React.createElement('div', null, [h3, btn]);
        ReactDOM.render(container, root);
    */

    // 5. button 속성에 event listener 추가
    /* 
        const btn = React.createElement(
            'button', 
            {
                style: { backgroundColor: 'skyblue' },
                onClick: () => console.log('Clicked!')
            }, 
            'Click me'
        );
    */
    
    // 6. h3 속성에 event listener 추가
    /*
        const h3 = React.createElement(
            'h3',
            {
                id: 'title',
                onMouseEnter: () => console.log('Mouse Enter')
            },
            'Hello, I am a title'
        );
    */


    

}




///* 2.4 - Recap */
// 02.react_old.html
if(true) {
    // 1. React JS와 ReactDOM 코드를 import
    //  - React JS는 element를 생성하고, event listener를 더하는 것을 도와줌 (interactive power!)
    //  - ReactDOM은 React element들을 가져다가 HTML로 바꿔줌 
    
    // 2. body에 id가 root인 div 생성함.
    //  - 이 div는 ReactDOM이 React element들을 가져다 놓을 곳임
    //      => <div id="root"></div>
    
    // 3. React.createElement(arg1, arg2, arg3)을 실행하여 태그를 생성
    //  - arg1: 생성하고자 하는 HTML 태그명. root에 들어갈 HTML 태그
    //  - arg2: 태그를 생성 시 설정할 태그의 속성. props가 포함된 object
    //  - arg3: 태그를 생성 시 해당 태그의 값이나 자식 태그들이 담긴 배열. content
    //      => const container = React.createElement('div', null, [h3, btn]);
    //  - 중요! arg2인 property object에는 event listener를 생성할 수 있음
    /* 
        const btn = React.createElement(
            'button', 
            {
                style: { backgroundColor: 'skyblue' },
                onClick: () => console.log('Clicked!')
            }, 
            'Click me'
        );
    */

    // 4. JavaScript로 div를 가져와서 ReactDOM.render()를 실행
    //  - ReactDOM.render(arg1, arg2): React element들(arg1)을 root div(arg2) 안에서 보여주라는 의미
    //      => ReactDOM.render(container, root);

}




///* 2.5 - JSX */
/* React.createElement를 대체할 수 있는 방법 */
/* JSX */
//  - JavaScript를 확장한 문법 
//  - React 요소를 만들어 줌
//  - HTML에서 사용한 문법과 흡사한 문법을 사용하기 때문에 편함

// 03.react_new.html
if(true) {
    // 1. 브라우저가 JSX를 이해할 수 있도록 하지 않으면 에러남
    //  - JSX로 작성한 코드를 react_old.html에 작성된 코드처럼 변환시켜야 함
    //      => BABEL 이용
    //          - BABEL: JSX로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔줌
    //          - https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.22.19&externalPlugins=&assumptions=%7B%7D
    //           위 링크를 사용해보면 어떻게 변환해주는지 확인할 수 있음

    // 2. Babel standalone을 이용해서 다운받기 (html 파일에 추가하기)
    //  - https://babeljs.io/docs/babel-standalone 이 링크에 있음
    //      => <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    //  - 작성 중인 <scirpt> 태그 속성의 type을 babel로 지정하기
    //      => <script type="text/babel">

    // 3. h3 태그와 button 태그를 JSX를 이용하여 바꿔보기
    //  - JSX로 바꿔주면 반드시 대문자로 바꿔주기!
    {
        //  3-1-1. h3 태그 JSX 사용 전
            /* 
                const h3 = React.createElement(
                    'h3',
                    {
                        id: 'title',
                        onMouseEnter: () => console.log('Mouse Enter')
                    },
                    'Hello, I am a title'
                );
            */
        //  3-1-2. h3 태그 JSX 사용 후
            /* 
                const H3 = (
                    <h3 id="title" onMouseEnter={() => console.log('Mouse Enter')}>
                        Hello, I am a title
                    </h3>
                );
            
            */
        
        // 3-2-1. button 태그 JSX 사용 전
            /* 
                const btn = React.createElement(
                    'button', 
                    {
                        style: { backgroundColor: 'skyblue' },
                        onClick: () => console.log('Clicked!')
                    }, 
                    'Click me'
                );
            */
        // 3-2-2. button 태그 JSX 사용 후
        //  - 참고로 styles은 중괄호가 두개임! {{}}
            /* 
                const Btn = (
                    <button style={{ backgroundColor:'skyblue', }} 
                            onClick={() => console.log('Clicked!') }>
                        Click me!
                    </button>
                );
            */
    }
    

    // 4. JSX 코드를 Babel에게 넘겨주게 되면, Babel이 그걸 브라우저가 읽을 수 있는 코드로 바꿔서 head에 담아놓음
    //  그렇기에 head에는 변환한 코드(createElement)가 담겨있다는 것을 알아두기
}




///* 2.6 - JSX part Two */
/* 아직 JSX로 변환하지 않은 코드들을 JSX를 사용해서 마저 변환하기 */

// 03.react_new.html
if(true) {
    // 변환할 코드
    /* 
        const container = React.createElement('div', null, [h3, btn]);
        ReactDOM.render(container, root); 
    */
    
    // 1. container를 대문자로 바꾸어주고 div 태그를 담아줌
    //      => const Container = <div></div>

    // 2. Container 내부에 H3과 Btn을 렌더링해줌
    //  - H3이나 Btn을 포함시키기 위해서는 H3과 Btn을 함수로 만들어줘야 함(함수화는 방법 2가지가 있는데 아무거나 사용)
    {
        //  2-1-1.H3 함수 변환 1
            /* 
                const H3 = () => (
                    <h3 id="title" onMouseEnter={() => console.log('Mouse Enter')}>
                        Hello, I am a title
                    </h3>
                ); 
            */
    
        //  2-1-2. H3 함수 변환 2
            /* 
                function H3() {
                    return (
                        <h3 id="title" onMouseEnter={() => console.log('Mouse Enter')}>
                            Hello, I am a title
                        </h3>
                    );
                }
            */
    
    
        //  2-2-1 Btn 함수 변환 1
            /* 
                const Btn = () => (
                    <button style={{ backgroundColor:'skyblue', }} 
                            onClick={() => console.log('Clicked!') }>
                        Click me!
                    </button>
                );
            */
    
        //  2-2-2. Btn 함수 변환 2
            /*  
                function Btn() {
                    return (
                        <button style={{ backgroundColor:'skyblue', }} 
                                onClick={() => console.log('Clicked!') }>
                            Click me!
                        </button>
                    );
                }
            */
    }
    //  - 함수로 만든 이후 렌더링하고자 하는 대상들을 HTML 태그처럼 적어줌 (여러 컴포넌트들이 합쳐진 구성 생성)
    //   div 태그를 렌더링하고 있는 컴포넌트가 있는데 그 컴포넌트는 H3 컴포넌트, Btn 컴포넌트를 포함하고 있음
    /*  
        const Container = (
            <div>
                <H3 />
                <Btn />
            </div>
        );
    */
    
    // 위 코드와 같음
    /* 
        const Container = (
            <div>
                <h3 id="title" onMouseEnter={() => console.log('Mouse Enter')}>
                    Hello, I am a title
                </h3>
                <button style={{ backgroundColor:'skyblue', }} 
                        onClick={() => console.log('Clicked!') }>
                    Click me!
                </button>
            </div>
        );
    */

    // 반드시 컴포넌트의 첫 글자는 대문자여야 함!
    // JSX는 애플리케이션을 여러 가지 작은 요소로 나누어 관리할 수 있게 해줌
    // 여러 요소로 잘게 쪼개서 만들면 합쳐주기만 하면 됨
    // 보기 쉽게 코드를 분리한 뒤 함께 렌더링함

    // 직접 만든 컴포넌트를 렌더링해서 다른 곳에서 사용할 때는 항상 대문자로 시작해야 된다는 것을 잊지말기!


    // 3. ReactDOM.render(Container, root); 변환하기
    //  3-1. Container 함수화 (둘 중 아무거나 사용)
    /*  
        const Container = () => (
            <div>
                <H3 />
                <Btn />
            </div>
        );
    */
    /*  
        function Container() {
            return (
                <div>
                    <H3 />
                    <Btn />
                </div>
            );
        }
    */

    //  3-2. 함수로 만든 이후 렌더링하고자 하는 대상들을 HTML 태그처럼 적어줌 
    /*  
        ReactDOM.render(<Container />, root);
    */

}