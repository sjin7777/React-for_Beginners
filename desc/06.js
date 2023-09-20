'use strict';

/* react-for-beginners */






///* 6.0 - Introduction */
// App06_01.js
if(true) {
    //  1. App06_01.js에 있는 App0601 Component에 state 생성
    //      1-1. cra를 사용하기 때문에 React.useState()라고 하지 않아도 됨. React. 생략 가능
    //          => const [counter, setCounter] = useState(); 
    //      1-2. react.js에서 useState를 import
    //          => import { useState } from "react";
    //      1-3. state의 초기값을 0으로 설정
    //          => const [counter, setCounter] = useState(0); 
    
    //  2. App06_01.js에 있는 App0601 Component에 onClick function 생성
    //      - setCounter를 사용하여 counter에 1이 더해져서 return 되도록 설정
    //          => const onClick = () => setCounter((prev) => prev + 1);

    //  3. App06_01.js에 있는 App0601 Component에 'Click Me' 라고 쓰여져있는 버튼 생성하고, onClick 이벤트 설정하여 2에서 만든 함수를 넣음
    //          => <button onClick={onClick}>Click Me</button>
    
    //  4. App06_01.js에 있는 App0601 Component에 h1태그 안에 있는 내용을 {counter}로 변경
    //          => <h1>{counter}</h1>

    //  5. 브라우저에서 'Click Me' 버튼 클릭 시 h1태그에 작성해놓은 값이 증가하는지 확인

    //  6. App06_01.js에 있는 App0601 Component에 console.log('render'); 넣고, 버튼 클릭할 때마다 로그가 찍히는지 브라우저에서 확인
    //          => console.log('render');
            /*  
                import { useState } from "react";

                function App0601() {
                    const [counter, setCounter] = useState(0);
                    const onClick = () => setCounter((prev) => prev + 1);
                    console.log('render');
                    
                    return (
                        <div>
                            <h1>{counter}</h1>
                            <button onClick={onClick}>Click Me</button>
                        </div>
                    );
                }

                export default App0601;
            */

    //  7. 6에서 클릭할 때마다 로그가 두번씩 찍히는 현상 발생
    //      - 댓글보니 index.js에서 <App />이 <React.StrictMode>에 감싸져 있어서 그렇다고 하기에 <React.StrictMode>를 지웠음
    //      - 해당 태그로 감싸져 있는 경우 자손까지 검사하기에 두 번 실행된다고 함
    //      - index.js 수정 전
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
    //      - index.js 수정 후
                /*  
                    import React from 'react';
                    import ReactDOM from 'react-dom/client';
                    import App from './App';

                    const root = ReactDOM.createRoot(document.getElementById('root'));
                    root.render(
                        <App />
                    );
                */
    //      - 수정 후 클릭할 때마다 로그가 한번씩 찍힘


    //  처음 페이지가 뜰때만 로그가 찍히고, 버튼 클릭 시에는 h1 태그의 값만 변경하고 로그는 찍히지 않도록 해보기
    //  다른 state 변화에는 실행되지 않도록 하기  (React.memo()와 비슷해보임)
    //  state가 변하지 않는 코드들은 처음 Component render에서만 실행되도록 하기
    //  state를 변경하면 모든 code들은 항상 다시 실행되는데, 처음 한번만 실행되고 다시 실행되는것을 막아보기
    
}






///* 6.1 - useEffect */
/* 특정 코드의 실행을 제한해보기 */
// Component가 맨 처음 render될 때만 실행하고 그 다음은 다시 실행되지 않도록 하기
// state가 변경되어도 맨 처음에만 실행되도록 하기

// App06_01.js
if(true) {
    //  1. useEffect 함수 이용
    //      - useEffect(arg1, arg2): Component가 처음 render될 때 실행되고, 다시 실행되지 않을 function을 넣어줌
    //          > arg1: 딱 한번만 실행하고 싶은 코드
    //          > arg2: state가 들어간 배열 또는 빈 배열을 넣음. 
    //              - state가 들어간 배열일 경우 state가 변경될 때마다 실행되고, 빈 배열일 경우 초기화시 한번만 실행됨
    //      1-1. App06_01.js에 import 추가
    //              => import { useState, useEffect } from "react";
    //      1-2. App06_01.js에 App0601 Component안에 iRunOnlyOnce라는 함수 생성
    //              => const iRunOnlyOnce= () => { console.log('I Run Only Once.'); }
    //      1-3. useEffect(arg1, arg2)를 생성하고 arg1에는 1-2에서 만든 함수를 넣고, arg2에는 빈 array를 넣음
    //              => useEffect(iRunOnlyOnce, []);
            /*  
                import { useState, useEffect } from "react";

                function App0601() {
                    const [counter, setCounter] = useState(0);
                    const onClick = () => setCounter((prev) => prev + 1);
                    
                    console.log('render');

                    const iRunOnlyOnce= () => {
                        console.log('I Run Only Once.');
                    }
                    useEffect(iRunOnlyOnce, []);

                    return (
                        <div>
                            <h1>{counter}</h1>
                            <button onClick={onClick}>Click Me</button>
                        </div>
                    );
                }

                export default App0601;
            */
    
    //  2. iRunOnlyOnce 함수를 익명함수로 변경해서 useEffect에 바로 넣기 (더 간편)
    //          => useEffect(() => {console.log('CALL THE API'); }, []);
            /*  
                import { useState, useEffect } from "react";

                function App0601() {
                    const [counter, setCounter] = useState(0);
                    const onClick = () => setCounter((prev) => prev + 1);
                    
                    console.log('render');

                    useEffect(() => {
                        console.log('CALL THE API'); 
                    }, []);

                    return (
                        <div>
                            <h1>{counter}</h1>
                            <button onClick={onClick}>Click Me</button>
                        </div>
                    );
                }

                export default App0601;
            */
    
    
    //  3. 브라우저에서 확인
    //      - 버튼 클릭 시마다 'render'는 계속 찍히지만,
    //       useEffect()안에 넣어준 함수는 처음 실행시에만 실행됨


    //  즉, useEffect()함수는 코드가 한번만 실행될 수 있도록 보호해줌
    //  state가 변화해도 단 한번만 실행됨
    //  React는 언제 코드를 실행할지 안할지 결정할 tool을 제공하는데, 그게 useEffect()
    //  state를 refresh할 때마다, 항상 코드가 실행되는게 아닌, 한번만 실행해야하는 코드도 있을테니 그런 경우에 사용

    //  counter의 초기값인 0만 찍히고, 계속 버튼을 클릭해도 더이상 로그가 찍히지 않음
    //      => useEffect(() => {console.log(counter); }, []);
    //  counter의 초기값인 0뿐만 아니라, 클릭한대로 로그 찍힘
    //      => useEffect(() => {console.log(counter); }, [counter]);

}






///* 6.2 - Deps */
/* useEffect()를 이용하여 코드 실행 제어하기 */

// App06_01.js
// App06_02.js
if(true) {
    //  1. App06_01.js에 있는 App0601 Component에 Search Bar 생성
    //          => <input type="text" placeholder="Search here..!" />

    //  2. App06_01.js에 있는 App0601 Component에 새로운 state 생성 (초기값은 string으로 된 빈 값)
    //          => const [keyword, setKeyword] = useState("");

    //  3. App06_01.js에 있는 App0601 Component에 onChange 함수 생성
    //      - onChange 함수가 실행되면 argument로 event를 받고, 그 event를 발생시킨 input에서 value를 받아서 그 value를 'keyword' state에 넣음
    //          => const onChange = (event) => setKeyword(event.target.value);
    //      - onChange함수는 1에서 생성한 input의 event listener이므로 onChange 등록하고,
    //       state와 연결될 수 있게 value 값을 {keyword}로 줘서 input 조작 가능하게 하기
    //          => <input type="text" value={keyword} onChange={onChange} placeholder="Search hear..!" />

    //  4. 그런데 검색인데, onChange로 하면 타이핑할 때마다 매번 렌더링 됨
    //      - 콘솔로그로 찍어보기
    //          => console.log('SEARCH FOR', keyword);
    //      - 근데 검색할 때 밑에 관련 검색어 뜰 수는 있게는 하겠네...?
    //      - 아무튼 useEffect를 이용하여 API를 한 번만 호출하게 할 수 있음

    //  5. 이 상태에서 'Click Me' 버튼 클릭 시에도 계속 검색됨 (입력 값이 계속 로그 찍힘)
    //      - 특정 부분이 변화했을 때, 원하는 코드들을 실행할 수 있게 하기
    //      - 여기서는 keyword가 변화할 때만 검색하도록 하기

    //  6. 4에서 찍었던 console.log를 useEffect를 이용하기
    //      - keyword가 변화할 때만 코드 실행하고, counter가 변화할 때는 실행하지 않게 하기
    //      - 이번에는 arg2에 빈 배열이 아닌 keyword 넣기
    //      - 즉, keyword가 변화할 때 코드를 실행하고 싶다면 arg2 배열에 state인 keyword 입력하기
    //       이는, keyword가 변화할 때만 코드를 실행하라고 React에게 알려주는 것
    //       빈 배열이 들어가면 변화되는 것을 확인할 필요도 없으므로 처음에만 코드 실행해줌
    //          => useEffect(() => { console.log('SEARCH FOR', keyword) }, [keyword]);

    //  7. 그런데, 처음 페이지가 로드될 때에도 바로 검색(빈 값으로)되는 문제가 있음
    //      - if문 이용하여 조건 넣기
    //      - keyword가 빈 값이 아니고, 길이가 5 초과일 때만 로그 찍히도록 설정
    //          => useEffect(() => { if(keyword !== "" && keyword.length > 5) console.log('SEARCH FOR', keyword) }, [keyword]);



    //  useEffect()를 이용하면 코드 실행을 제어할 수 있음
    //  - Component가 생성되는 첫 시작점일 때 실행
    //  - 지정한 데이터에 변화가 생겼을 때 실행

        /*  
            import { useState, useEffect } from "react";

            function App0601() {
                const [counter, setCounter] = useState(0);
                const [keyword, setKeyword] = useState("");

                const onClick = () => setCounter((prev) => prev + 1);
                const onChange = (event) => setKeyword(event.target.value); 
                
                
                // 화면이 그려질 때마다 실행
                console.log('render');

                // useEffect(arg1, arg2)에서 arg2가 빈 배열이므로 처음 페이지 로드되었을 때만 실행
                useEffect(() => {
                    console.log('CALL THE API'); 
                }, []);
                
                // useEffect(arg1, arg2)에서 arg2가 배열 안에 state 값이 들어있으므로 해당 state의 값이 변화될 때마다 실행
                // if문으로 조건추가하여 빈 값이 아니고, 길이가 5 초과일 때만 실행
                useEffect(() => { 
                    if(keyword !== "" && keyword.length > 5) {
                    console.log('SEARCH FOR', keyword);
                    }  
                }, [keyword]);


                return (
                    <div>
                        <input type="text" value={keyword} onChange={onChange} placeholder="Search hear..!" />
                        <h1>{counter}</h1>
                        <button onClick={onClick}>Click Me</button>
                    </div>
                );
            }

            export default App0601;
        */



    //  8. useEffect() 연습해보기
    //      - 처음 페이지 로드되었을 때만 실행
    //          => useEffect(() => {console.log('I run only once.');}, []);
    //      - keyword가 변경될 때만 실행
    //          => useEffect(() => {console.log('I run when "keyword" changes.');}, [keyword]);
    //      - counter가 변경될 때만 실행
    //          => useEffect(() => {console.log('I run when "counter" changes.');}, [counter]);
    //      - keyword와 counter 둘 중 하나라도 변경될 때마다 실행
    //          => useEffect(() => {console.log('I run when "keyword" & "counter" changes.');}, [keyword, counter]);
        /*  
            import { useState, useEffect } from "react";

            function App0602() {
                const [counter, setCounter] = useState(0);
                const [keyword, setKeyword] = useState("");

                const onClick = () => setCounter((prev) => prev + 1);
                const onChange = (event) => setKeyword(event.target.value); 
                    

                // 한번만 실행
                useEffect(() => {
                    console.log('I run only once.');
                }, []);

                // keyword 변경될 때만 실행
                useEffect(() => {
                    console.log('I run when "keyword" changes.');
                }, [keyword]);

                // counter 변경될 때만 실행
                useEffect(() => {
                    console.log('I run when "counter" changes.');
                }, [counter]);

                // keyword와 counter 둘 중 하나라도 변경될 때마다 실행
                useEffect(() => { 
                    console.log('I run when "keyword" & "counter" changes.'); 
                }, [keyword, counter]);
                

                return (
                    <div>
                        <input type="text" value={keyword} onChange={onChange} placeholder="Search hear..!" />
                        <h1>{counter}</h1>
                        <button onClick={onClick}>Click Me</button>
                    </div>
                );
            }

            export default App0602;
        */

}






///* 6.3 - Recap */
// App06_02.js
if(true) {
    //  1. React는 Component에 새로운 데이터가 들어올 때마다 UI를 refresh함
    //      - 변화가 일어날 때마다 refresh하기에 편함


    //  2. 하지만 변화가 일어날 때마다 refresh하는게 아닌, 원할 때 refreash하고 싶음
    //      - 코드 시작 시 딱 한번만 refresh
    //      - Component에서 딱 한번만 refresh
    //      - 지정한 데이터에 변화가 생겼을 때만 refresh
    //          => useEffect()를 이용


    //  3. useEffect(arg1, arg2)
    //      - arg1: 실행시키고 싶은 코드
    //      - arg2: dependencies. 즉, React가 지켜볼 대상
    //      - arg2 배열 안에 값이 존재하지 않는다면, 처음 로드되었을 때만 arg1를 실행시킴 
    //      - arg2 배열 안에 값이 존재하면, 그 배열의 값에 변화가 있을 경우에만 arg1를 실행시킴


    //  4. useEffect(arg1, arg2) 예시
    //      - arg2의 값이 빈 배열일 경우 - []
    //       (React가 지켜볼 대상이 0개)
    //          > React가 지켜볼 대상이 없기에 arg1이 딱 한 번(페이지 로드 되었을 때)만 실행됨
    //              => useEffect(() => {console.log('I run only once.');}, []);

    //      - arg2의 값이 빈 배열이 아닐 경우 - [keyword]
    //       (React가 지켜볼 대상이 1개)
    //          > 여기서의 keyword는 state에 있는 데이터고, setKeyword라는 function으로 인해 변화함
    //           setKeyword는 onChange 함수에 의해 호출되고, onChange는 지정된 태그인 input의 입력 값이 변화할 때마다 호출됨
    //          > React가 지켜볼 대상은 keyword 이기에 이 데이터가 변화할 때마다 + 시작할 때 arg1이 실행 됨 (다른 데이터 변화시에는 실행 안 됨)
    //              => useEffect(() => {console.log('I run when "keyword" changes.');}, [keyword]);

    //      - arg2의 값이 빈 배열이 아니고, 여러 개 있을 경우 - [keyword, counter]
    //       (React가 지켜볼 대상이 2개 이상)
    //          > React가 지켜볼 대상은 keyword, counter 이기에 이 둘 중 하나라도 변화가 생길 때마다 + 시작할 때 arg1 실행
    //              => useEffect(() => {console.log('I run when "keyword" & "counter" changes.');}, [keyword, counter]);


    //  즉, useEffect는 코드를 언제 실행할지 선택해줌
    //  React가 동작하는 관점에서 보면 방어막 같은 존재
    //  방어막이 없다면 React는 state가 변화될 때마다 Component를 재실행시킴

}





///* 6.4 - Cleanup */
/* Cleanup function */
//  : Component가 destroy(없어질 때) 무언가를 실행할 수 있도록 해줌
// App06_03.js
if(true) {
    //  1. 시작
    //      index.js
        /*  
            import React from 'react';
            import ReactDOM from 'react-dom/client';
            // import App05 from './App05';
            // import App0601 from './App06_01';
            // import App0602 from './App06_02';
            import App0603 from './App06_03';

            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                // <App05 />
                // <App0601 />
                // <App0602 />
                <App0603 />
            );
        */
    //      App06_03.js
        /* 
            import { useState, useEffect } from "react";

            function App0603() {
                return (
                    <div></div>
                );
            }

            export default App0603;
        */


    //  2. App06_03.js의 App Component 안에 state 생성 (기본값은 false)
    //          => const[showing, setShowing] = useState(false);

    //  3. hide / show 를 할 수 있는 button 태그 생성
    //      - showing일 경우 Hide 글자 보여주기
    //      - showing이 아닐 경우 Show 글자 보여주기
    //          => <button>{showing ? 'Hide' : 'Show'}</button>

    //  4. onClick 함수 생성
    //      - setShowing을 통해 이전 value를 받아오고, 그 반대의 값을 return
    //          => const onClick = () => setShowing(prev => !prev);

    //  5. button 태그에 onClick 이벤트 리스너 추가
    //          => <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>

            /* 
                import { useState, useEffect } from "react";

                function App0603() {
                    const [showing, setShowing] = useState(false);
                    const onClick = () => setShowing(prev => !prev);
                    
                    return (
                        <div>
                            <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
                        </div>
                    );
                }

                export default App0603;
            */

    //  6. 브라우저에서 버튼 클릭하여 'Hide', 'Show'가 차례로 계속 나오는지 확인

    //  7. App06_03.js에 Hello Component 생성하고, hello라고 쓰여있는 title을 return
        /* 
            function Hello() {
                return <h1>Hello</h1>
            }
        */

    //  8. App0603 Component에서 중괄호를 이용하여 Hello Component render하기 (보여주기)
    //      - showing이면 Hello를 보여주고, showing이 아니라면 아무것도 보여주지 않기
    //      - state인 showing의 값이 변경될 때, 모든 Component가 변경됨
    //          => {showing ? <Hello /> : null}

        /*
            import { useState, useEffect } from "react";

            function Hello() {
                return <h1>Hello</h1>
            }


            function App0603() {
                const [showing, setShowing] = useState(false);
                const onClick = () => setShowing(prev => !prev);

                return (
                    <div>
                        {showing ? <Hello /> : null}
                        <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
                    </div>
                );
            }

            export default App0603;
        */

    //  9. Hello Component에 useEffect(arg1, arg2) 만들기
    //      - arg2의 값으로 []를 넣어서 arg1을 최초 1번만 실행함
    //          => useEffect(() => {console.log('created :)');}, []);

    //  10. 브라우저에서 확인했을 때, show 버튼을 클릭할 때마다 출력됨
    //      - Hello Component를 Hide 할 때는 UI에서 Component를 지워주고 있기에, 다시 보여줄 떄 다시 최초 1번이 됨
    //      - Component를 destroy(없앰) 또는 create(생성) 할 수 있음
    //      - 9번에서 작성한 코드는 Component가 처음 생성될 때만 실행되기 때문에, 없애고 생성하면 다시 실행되는 것
    //      - 숨기는 것이 아니라 아예 없애는 것!
    //      - 즉, 8번 코드는 Component를 create(생성)하는 코드!

        /*
            function Hello() {
                useEffect(() => {
                    console.log('created :)');
                }, []);
                
                return <h1>Hello</h1>
            }
        */

    //  11. Hello Component를 destroy(없앰)할 때도, 콘솔로그 찍기
    //      - useEffect함수 안에 Component가 destory될 때 실행 될 function 만들기

        /*
            function Hello() {
                useEffect(() => {
                    console.log('created :)');
                    return () => console.log('destroyed :(');
                }, []);
                
                return <h1>Hello</h1>
            }
        */

    //  12. 이처럼, Component가 destroy될 때, 무언가를 실행할 수 있는게 Cleanup 함수라고 함
    //      - Component가 없어질 때 분석 결과가 필요할 경우
    //      - Component가 없어질 때 event listener를 지우거나, console.log에 무언가를 보여줄 수도 있음
    //      - 중요한건 이를 통해서 Component가 언제 Create되고, 언제 Destroy 됐는지를 알 수 있음

    
    //  13. 11번 코드를 다른 식으로 만들어서 쉽게 이해해보기
    //      - useEffect(arg1, arg2)는 arg2가 변화할 때마다 arg1이 호출됨
    //      - 이 경우에는 arg2가 []이므로 비어있음.
    //       그렇기에 Component가 처음 생성될 때 arg1이 호출되고 다시는 호출되지 않음 
    //      - Component가 destroy될 때도 실행하고 싶은 함수가 있으면, arg1인 createdFn 함수가 destroyedFn 함수를 리턴해야 함
    //      - 즉, Hello Component가 생성되면 createdFn함수가 호출되고, 파괴되면 destroyedFn함수가 호출되어 실행됨
        /*
            function Hello() {
                function createdFn() {
                    console.log('created :)');
                    return destroyedFn;
                }

                function destroyedFn() {
                    console.log('destroyed :(');
                }

                useEffect(createdFn, []);
                
                return <h1>Hello</h1>
            }
        */

    
    //  useEffect(arg1, arg2) 함수는 코드 실행을 제어할 수 있기 때문에 매우 유용함
    //  - 페이지가 로드되었을 때만 code를 실행할 수 있음
    //  - 데이터가 변화할 때마다 code를 실행할 수 있음
    //  - Component가 생성되거나 파괴될 때마다 code를 실행할 수 있음
    //  하지만 React 앱을 만들 때 파괴할 때의 함수를 사용할 일이 별로 없음


    //  14. cleanup 함수를 작성하는 방법은 3가지인데 다 쓸 줄 알아야 함 이중에서 3번 코드가 유용하니 알아두기
        /*
            import { useState, useEffect } from "react";

            function Hello() {
                // 1번 코드
                // {
                    // function createdFn() {
                    //   console.log('created :)');
                    //   return destroyedFn;
                    // }
                    // function destroyedFn() {
                    //   console.log('destroyed :(');
                    // }
                    // useEffect(createdFn, []);
                // } 

                // 2번 코드
                // {
                    // useEffect(function () {
                    //   console.log('created :)');
                    //   return function() {
                    //     console.log('destroyed :(');
                    //   };
                    // }, []);
                // }

                // 3번 코드
                useEffect(() => {
                    console.log('created :)');
                    return () => console.log('destroyed :(');
                }, []);

                return <h1>Hello</h1>
            }


            function App0603() {
                const [showing, setShowing] = useState(false);
                const onClick = () => setShowing(prev => !prev);

                return (
                    <div>
                        {showing ? <Hello /> : null}
                        <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
                    </div>
                );
            }

            export default App0603;
        */

}


