'use strict';

/* react-for-beginners */






///* 7.0 - To Do List part One */
/* To Do List 생성 */
// State, Effect, props 연습

// App07_01.js
if(true) {
    //  1. 시작
    //      - index.js
        /*
            import React from 'react';
            import ReactDOM from 'react-dom/client';
            // import App05 from './App05';
            // import App0601 from './App06_01';
            // import App0602 from './App06_02';
            // import App0603 from './App06_03';
            import App0701 from './App07_01';

            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                // <App05 />
                // <App0601 />
                // <App0602 />
                // <App0603 />
                <App0701 />
            );

        */
    //      - App07_01.js
        /*
            function App0701() {
                return (
                    <div></div>
                );
            }

            export default App0701;
        */

    //  2. App0701 Component에 todo를 입력할 수 있는 input 태그 추가
    //          => <input type="text" placeholder="Write your to do..." />

    //  3. 2에서 생성한 input값 변화 감지하기
    //      3-1. useState() 사용하여 새로운 state 생성
    //          - 초기값은 빈 문자열 ""
    //          - 받아올 데이터인 toDo와 그 데이터를 수정하는 함수인 setToDo를 생성
    //              => const [toDo, setToDo] = useState("");
    //      3-2. useState()를 사용하기 위해 import
    //              => import { useState } from "react";
    //      3-3. toDo 값이 변경될 때마다 실행되게 하는 onChange 함수 생성 
    //          - onChange 함수는 event를 받아서, setToDo 함수의 값에 이용함
    //              => const onChange = (event) => setToDo(console.log(event.target.value));
    //      3-3. input 태그의 value 값으로 {todo}를 주고, onChange 이벤트리스너로 3-3에서 생성한 onChange 함수를 넣음
    //              => <input type="text" value={toDo} onChange={onChange} placeholder="Write your to do..." />
    //      3-4. console.log를 찍어서 입력한 값이 잘 찍히는지 확인
    //          -  input의 value값이 state에 나옴
    //              => console.log(toDo);
        /*
            import { useState } from "react";

            function App0701() {
                const [toDo, setToDo] = useState("");
                const onChange = (event) => setToDo(event.target.value);
                console.log(toDo);

                return (
                    <div>
                        <input type="text" value={toDo} onChange={onChange} placeholder="Write your to do..." />
                    </div>
                );
            }

            export default App0701;
        */

    //  4. form 태그를 생성하여 이전에 생성했던 input 태그를 안에 넣고, button 태그도 추가함
    //      - 버튼 클릭 시 form의 submit 이벤트를 발생시킴
    //      - 현재 상태에서 버튼 클릭되면 새로고침되는데, 이는 form이 submit 이벤트를 기본으로 가지고 있기 때문
        /*
            function App0701() {
                const [toDo, setToDo] = useState("");
                const onChange = (event) => setToDo(event.target.value);
                console.log(toDo);

                return (
                    <div>
                        <form>
                            <input type="text" value={toDo} onChange={onChange} placeholder="Write your to do..." />
                            <button>Add To Do</button>
                        </form>
                    </div>
                );
            }
        */

    //  5. form이 submit 되는 것을 막기
    //      5-1. onSubmit 함수 생성
    //          - onSubmit 함수는 event를 받아와서 preventDefault() 함수를 이용
    //          - preventDefault()함수는 브라우저에 기본 동작을 실행시키지 않도록 해주는 함수로, 여기서는 form이므로 submit을 실행시키지 않도록 해줌
    //              => const onSubmit = (event) => event.preventDefault();
    //      5-2. form 태그에 onSubmit 이벤트리스너 추가
    //              => <form onSubmit={onSubmit}>....</form>
    //      5-3. 생성한 onSubmit 함수안에 콘솔로그 찍어보기 
    //              => const onSubmit = (event) => {event.preventDefault(); console.log(toDo)};
    //      5-4. 브라우저 확인 시 input에 값을 입력하고 버튼 눌렀을 때 그 값이 콘솔로그에 찍히고 새로고침 되지 않음
    //      5-5. toDo의 값이 비어있을 경우 이 함수를 작동하지 않도록 하기(return 시키기)
    //           그리고 toDo의 값이 있을 경우에는 toDo를 추가하고 input에 입력한 값은 비우기
    //          - setToDo는 toDo값을 수정하는 함수이고, toDo값은 input이랑 연결되어 있으므로 값을 비울때 사용할 수 있음 setToDo(""); 
        /*
            function App0701() {
                const [toDo, setToDo] = useState("");
                const onChange = (event) => setToDo(event.target.value);
                const onSubmit = (event) => {
                    event.preventDefault(); 
                    if(toDo === "") {
                        return; 
                    }
                    setToDo("");
                };

                return (
                    <div>
                        <form onSubmit={onSubmit}>
                            <input type="text" value={toDo} onChange={onChange} placeholder="Write your to do..." />
                            <button>Add To Do</button>
                        </form>
                    </div>
                );
            }
        */
    
    //  6. 여러 개의 toDo를 받을 수 있는 array 생성하기
    //      6-1. useState() 사용하여 새로운 state 생성
    //          - 초기값은 빈 배열 []
    //          - 받아올 데이터인 toDos와 그 데이터를 수정하는 함수인 setToDos를 생성
    //              => const [toDos, setToDos] = useState([]);

    //  7. toDo 값을 입력하여 버튼을 눌러 추가하면, toDos 배열에 넣기
    //      - 일반적인 JavaScript로는 toDos.push로 배열에 값을 추가했을테지만, state를 직접 수정할 수 없기에 React에서는 사용할 수 없음 
    //       state를 수정하려면 state를 수정하는 함수를 사용하여 수정해야 함
    //      - 예를 들어 { toDo = ""; } 이런게 state를 직접 수정하는 것이고,
    //       { setToDo(""); } 이런게 state를 수정하는 함수를 사용하여 수정하는 것임 
    //      - toDos array를 수정하기 위해서는 setToDos 함수를 이용하기

    //  8. array를 직접적으로 추가하지 않고, setToDos로 array에 element를 추가하기
    //      - array를 직접 추가하는 방법 => array.push(값);
    //       state 사용시에는 state를 변경해주는 함수를 이용하여 추가해야함
    //      - setToDos에 직전의 값(Previous Value)인 currentArray를 받아올 수 있음 (여기서는 배열로 정했으니 현재 배열을 받아옴)
    //       (state를 변경하는 함수의 첫번째 argument는 현재의 state를 받아옴)
    //      8-1. setToDos는 currentArray를 받아오는 함수를 만듦
    //              => setToDos(currentArray => );
    //      8-2. state는 항상 새로운 값이여야 하기 때문에 새로운 array를 받아와서 return 
    //              => setToDos(currentArray => []);
    //      8-3. 새로운 array는 state에 있는 toDo와 이전의 모든 toDos를 가지고 있어야 함
    //              => setToDos(currentArray => [currentArray, toDo]);


    //  - 예시
    //      1. food라는 값이 있는 배열을 가지고 있음
    //              => const food = [1, 2, 3, 4];

    //      2. food array에 element들을 추가하여 새로운 array를 만들고 싶다면?
    //          - food에 6이 추가된 새로운 array를 가지고 싶음
    //          - '...arr'을 사용하면 arr의 element를 돌려줌
    //              => const food2 = [6, ...food];     // [6, 1, 2, 3, 4]
        
    
    //  9. '...arr'를 이용하여 배열인 arr의 element들을 가져오기
    //      - 새로 추가되는 값: toDo
    //      - 현재 배열: currentArray
    //          => setToDos(currentArray => [toDo, ...currentArray]);



    //  10. 정리
    //      10-1. 애플리케이션이 시작되면 toDos의 state 기본값 설정으로 빈 array([])를 가지게 됨
    //              => const [toDos, setToDos] = useState([]);

    //      10-2. 첫번째 toDo를 입력하게 되면 빈 배열인 currentArray를 받아옴
    //          - 즉, 새로운 toDos가 input을 통해 작성한 toDo와 빈 array의 element가 더해짐
    //              => setToDos([] => [toDo, ...[]]);
    //          - 빈 array의 element가 더해지는 것이므로 위 코드는 아래 코드와 같음
    //              => setToDos([] => [toDo]);
    //          - 예를 들어 첫번째 toDo로 'Hello'를 추가
    //              => setToDos([] => ['Hello']);

    //      10-3. 두번째 toDo를 입력할 때면 currentArray는 빈 배열이 아닌 첫번째 toDo값이 들어있음
    //          - 예를 들어 두번째 toDo가 'Bye'라면, 'Hello'라는 값을 가지고 있는 Array를 가지고 오게 되는 것
    //              => setToDos(['Hello'] => ['Bye', ...['Hello']]);
    //          - 이 경우에는 현재 배열의 요소가 1개이므로 위 코드는 아래 코드와 같음
    //              => setToDos(['Hello'] => ['Bye', 'Hello']);
    
    //      10-4. 세번째 toDo를 입력할 때면, currentArray에는 첫번쨰, 두번째 toDo 값이 들어있음
    //              => setToDos(currentArray => [toDo, ...currentArray]);
    //          - 예를 들어 현재 currentArray에는 ['Bye', 'Hello']가 들어가있고, 세번째로 추가하는 toDo가 'Hi'라면
    //              => setToDos(['Bye', 'Hello'] => ['Hi', ...['Bye', 'Hello']]);
    //              => setToDos(['Bye', 'Hello'] => ['Hi', 'Bye', 'Hello']);

    //      10-5. 이런 식으로 '...arr'을 이용하면 배열에 있는 element값들을 가져올 수 있음



    //  11. h1 태그 추가하여 toDos의 갯수 나타내기
    //          => <h1>My To Dos{toDos.length}</h1>


    /*
        import { useState } from "react";

        function App0701() {
            const [toDo, setToDo] = useState("");
            const [toDos, setToDos] = useState([]);
            const onChange = (event) => setToDo(event.target.value);
            const onSubmit = (event) => {
                event.preventDefault(); 
                if(toDo === "") {
                    return; 
                }
                setToDo("");
                setToDos(currentArray => [toDo, ...currentArray]);
            };
            
            return (
                <div>
                    <h1>My To Dos [{toDos.length}]</h1>
                    <form onSubmit={onSubmit}>
                        <input type="text" value={toDo} onChange={onChange} placeholder="Write your to do..." />
                        <button>Add To Do</button>
                    </form>
                </div>
            );
        }

        export default App0701;
    */

}





///* 7.1 - To Do List part Two */
/* array로부터 동일한 Component에 있는 많은 것들을 render 할 수 있는 방법 */

// App07_02.js
if(true) {
    //  useState로 설정한 state 수정 함수를 사용할 때에는 두가지 옵션이 있음
    //  - 첫번째 옵션. 값을 보냄
    //      > state 값을 보내는 옵션 (setValue()안에 있는 값은 저장한 data를 가지고 있음)
    //          => setValue(""); 
    //  - 두번째 옵션. 단순히 값만 보내는 것이 아니라, 함수를 보냄
    //      > React 함수의 첫번째 argument는 현재 State를 의미함
    //       그렇기에 현재 State를 계산하거나, 새로운 state를 만드는데에 사용될 수 있음
    //          => setValue(prev => prev + 1); 
    //          => setValue(prevArr => [data, ...prevArr]); 
    //              - 이는 data 값과 현재 prevArr배열의 element를 받아와 새로운 array으로 리턴한 것, 
    //              - 여기서 data는 state로부터 만들어진 것으로, 현재 state에 들어있는 모든 요소들을 더해서 prevArr가 만들어짐



    //  1. toDo가 추가되면서 모인 배열인 toDos의 각각 요소를 Component로 만들려면?
    //      - form 태그 밑에 toDos Array를 가져와서 JavaScript 함수은 map()을 사용
    //          => {toDos.map()}


    //      - map() 함수는 하나의 array에 있는 itemd을 원하는 값으로 변경해주는 역할을 하고, 새로운 array로 리턴헤줌
    //      - array.map(arg)함수: arg는 함수이며, 이 함수가 array의 모든 item에 대해 실행되게 함
    //      - arg 함수는 array.length번 실행되고 arg함수로부터 return한 값은 새로운 array에 들어가게 됨
    //          => 예시 > ['a', 'bye', 'by', 'hi', 'abc', '2222'].map(() => ':)');
    //             결과 > (6) [':)', ':)', ':)', ':)', ':)', ':)']
    //      - map(arg)은 arg 함수의 첫번째 argument로 현재의 item을 순서대로 가지고 올 수 있음 
    //          => 예시 > ['a', 'bye', 'by', 'hi', 'abc', '2222'].map((item) => item);
    //             결과 > (6) ['a', 'bye', 'by', 'hi', 'abc', '2222']
    //          => 예시 > ['a', 'bye', 'by', 'hi', 'abc', '2222'].map((item) => item.toUpperCase());    // item을 대문자로 변경
    //             결과 > (6) ['A', 'BYE', 'BY', 'HI', 'ABC', '2222']
    //      - 즉, array.map(arg)함수는 예전 array를 가져와서 변형하는 것이며, return하는 값이 어떤 값이든지 그 값으로 새로운 array가 됨
    //       arg 함수는 array의 각 item들을 한 번씩 동작하여 거쳐감
    //      - 이러한 map의 성질을 이용하여 array에 담긴 Component를 리턴시킬 수 있음


    //  2. toDos의 각각의 Component를 담기 위한 Ul 태그 생성

    //  3. 2에서 생성한 Ul 태그 안에 toDos.map(arg)함수 이용하여 toDoS에 담긴 Component들을 li태그에 감싸서 리턴하기
    //      - map(arg)에서 arg의 첫번째 argument는 각 toDo를 의미
    //      - 새로고침 되었기 때문에 ui 태그안에 있는 것들이 동작할 때마다 늘 새로운 toDos를 기준으로 동작하게 됨
            /*
                <ul>
                    {toDos.map((item) => (  
                        <li>{item}</li>
                    ))}
                </ul>
            */
    //

    //  4. 그런데 3처럼 하면 에러남
    //      => Warning: Each child in a list should have a unique "key" prop.
    //      - 에러 내용은 같은 Component의 list를 render할 때, key라는 prop을 넣어줘야한다는 내용임
    //       React가 기본적으로 list에 있는 모든 item들을 인식하기 때문에 발생한 에러
    //      - 그렇기 때문에 li태그에 prop으로 key를 넣어주면 됨
    //       그런데 key는 겹치면 안 되고, 고유한 값이여야 함)
    //          => <li key={}>{item}</li>
    
    //  5. map을 이용하여 key값 설정하기
    //      - map의 첫번째 argument는 value이고, 여기서는 각각의 toDo를 의미함
    //              두번째 argument는 index이므로 이 값을 key의 값으로 설정
            /*
                <ul>
                    {toDos.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            */


    //  정리
    //  1. toDo들을 toDos에 추가
    //  2. toDos에 있는 각각의 item 별로 li 태그로 감싸기
    /*
        import { useState } from "react";

        function App0702() {
            const [toDo, setToDo] = useState("");
            const [toDos, setToDos] = useState([]);
            const onChange = (event) => setToDo(event.target.value);
            const onSubmit = (event) => {
                event.preventDefault(); 
                if(toDo === "") {
                    return; 
                }
                setToDo("");
                setToDos(currentArray => [toDo, ...currentArray]);
            };
            
            return (
                <div>
                    <h1>My To Dos [{toDos.length}]</h1>
                    <form onSubmit={onSubmit}>
                        <input type="text" value={toDo} onChange={onChange} placeholder="Write your to do..." />
                        <button>Add To Do</button>
                    </form>
                    <hr />
                    <ul>
                        {toDos.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            );
        }

        export default App0702;
    */
}





///* 7.2 - Coin Tracker */
/* 암호화폐들과 가격을 나열하는 프로젝트 */
// useEffect 연습
// 페이지나 앱에 들어갔을 때, 로딩 메시지가 보이고, 코인들이 나열되면 로딩 메시지를 숨기고, 코인 리스트를 보여줌

// App07_03.js
if(true) {
    //  1. 시작
    //      - index.js
        /*
            import React from 'react';
            import ReactDOM from 'react-dom/client';
            // import App05 from './App05';
            // import App0601 from './App06_01';
            // import App0602 from './App06_02';
            // import App0603 from './App06_03';
            // import App0701 from './App07_01';
            // import App0702 from './App07_02';
            import App0703 from './App07_03';

            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                // <App05 />
                // <App0601 />
                // <App0602 />
                // <App0603 />
                // <App0701 />
                // <App0702 />
                <App0703 />
            );
        */
    //      - App07_03.js
        /*
            function App0703() {
                return (
                    <div></div>
                );
            }

            export default App0703;
        */

    //  2. App0703 Component에 state 사용
    //      - useState import 
    //          => import { useState } from "react";

    //  3. 로딩을 위한 state 생성
    //      - 기본값은 true
    //          => const [loading, setLoading] = useState(true);
    
    //  4. html 태그 안에 3에서 만든 state 사용하여 넣기
    //      - 만약 loading이라면, 'Loading...'이라는 메시지 보여주고, 아니라면 아무것도 보여주지 않음
    //          => {loading ? <strong>Loading...</strong> : null}

    //  5. coinpaprika API 가져오기
    //      - https://api.coinpaprika.com/v1/tickers

    //  6. App0703 Component가 가장 처음 render되었을 때, 4에 작성한 코드를 보여주고 싶음
    //      - useEffect 사용하여 최초 한번만 보여주게 하기
    //      6-1. useEffect import
    //          => import { useState, useEffect } from "react";
    //      6-2. 5에 있는 url을 fetch
    //          => useEffect(() => { fetch('https://api.coinpaprika.com/v1/tickers'); },[]);
    //      6-3. 개발자 도구 > Network > 새로고침
    //          - Name 목록 중 'tickers'가 뜸
    //          - 즉, request가 일어나고, response를 받았음
    //      6-4. response로부터 json을 추출
    //          - fetch한 url에 then을 쓰고, response를 받아서 response.json을 return
    //           거기에 then을 써서 그 json을 가지고 consolo.log 찍기
            /*
                useEffect(() => {
                    fetch('https://api.coinpaprika.com/v1/tickers')
                    .then(response => response.json())
                    .then(json => console.log(json));
                },[]);
            */
    //      6-5. 브라우저에서 콘솔로그 확인해보면 많은 코인 배열 data가 출력됨

    //      6-6. 코인들(json)을 App0703 Component에서 보여주려면 이 json(data)를 state에 넣어주면 됨


    //  7. 코인 리스트를 잠시 가지고 있기 위한 state
    //      7-1. 기본값은 빈 배열 []으로 state 생성
    //          => const [conins, setCoins] = useState([]);
    //      7-2. coins(json)을 얻었을 때, coins(json)의 값을 setCoins 해줌
                /*
                    useEffect(() => {
                        fetch('https://api.coinpaprika.com/v1/tickers')
                        .then(response => response.json())
                        .then(json => setCoins(json));
                    },[]);
                */
    //      7-3. coins 얻기를 끝냈다면 loading을 false로 변경해주어야 함
                /*
                    useEffect(() => {
                        fetch('https://api.coinpaprika.com/v1/tickers')
                        .then(response => response.json())
                        .then(json => {
                            setCoins(json);
                            setLoading(false);
                        });
                    },[]);
                */


    //  8. ul태그를 생성하고, map()을 이용하여 각 요소들을 li태그로 감싸서 리턴
    //      - array.map(arg)에서 arg함수의 첫번째 argument는 array 차례에 따른 값이고, 두번째 argument는 index
    //      - coin의 name, symbol, quotes Object안에 있는 USD Object의 price 값 얻기
    //      - 이전처럼 index를 받아와도 되지만 이번에는 안 받아와도 됨 (각 코인마다 ID를 가지고 있기 때문에 이를 사용)
    //          > index를 받아올 경우
                    /*
                        <ul>
                            {coins.map((coin, index) => (
                                <li key={index}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</li>
                            ))}
                        </ul>
                    */
    //          > index를 받아오지 않고, 각 코인에 있는 ID를 사용할 경우
                    /*
                        <ul>
                            {coins.map((coin) => (
                                <li key={coin.id}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</li>
                            ))}
                        </ul>
                    */

    //  9. h1태그에 코인들의 갯수도 보여주게 하기
    //          => <h1>The Coins! ({coins.length})</h1>


    /*
        import { useState, useEffect } from "react";

        function App0703() {
            const [loading, setLoading] = useState(true);
            const [coins, setCoins] = useState([]);

            useEffect(() => {
                fetch('https://api.coinpaprika.com/v1/tickers')
                .then(response => response.json())
                .then(json => {
                    setCoins(json);
                    setLoading(false);
                });
            },[]);

            return (
                <div>
                    <h1>The Coins! ({coins.length})</h1>
                    {loading ? <strong>Loading...</strong> : null}
                    <ul>
                        {coins.map((coin) => (
                            <li key={coin.id}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</li>
                        ))}
                    </ul>
                    
                </div>
            );
        }

        export default App0703;
    */


    //  10. Component의 시작인 coins의 기본값을 [] (빈 배열)로 해야하는 이유
    //      - coins의 기본값이 [] (빈 배열)이므로 coin의 갯수는 0
    //      - 적어도 빈 배열을 기본값으로 두어야 undefinde가 되지 않음
    //      - undefinde는 length를 가지고 있지 않기 때문에 에러뜸
    //          => const [coins, setCoins] = useState([]);

    //  11. ul 태그, li 태그가 아닌 select 태그와 option 태그로 변경해서 코인을 선택해보도록 하기
            /*
                <select>
                    {coins.map((coin) => (
                        <option key={coin.id}>
                            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                        </option>
                    ))}
                </select>
            */


    
        /*
            import { useState, useEffect } from "react";

            function App0703() {
                const [loading, setLoading] = useState(true);
                const [coins, setCoins] = useState([]);

                useEffect(() => {
                    fetch('https://api.coinpaprika.com/v1/tickers')
                    .then(response => response.json())
                    .then(json => {
                        setCoins(json);
                        setLoading(false);
                    });
                },[]);

                return (
                    <div>
                        <h1>The Coins! ({coins.length})</h1>
                        {loading ? <strong>Loading...</strong> : null}
                        
                        <select>
                            {coins.map((coin) => (
                                <option key={coin.id}>
                                    {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                                </option>
                            ))}
                        </select>
                        
                    </div>
                );
            }

            export default App0703;
        */


    //  12. 로딩하고 있을 경우 UI 수정
    //      - h1태그에 있는 코인 갯수 숨기기 (로딩 시 0으로 나옴)
    //       백틱(`) 사용하여 소괄호 이용하기
    //          => <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
    //      - select 태그 숨기기
                /*
                    {loading ? (
                        <strong>Loading...</strong>
                        ) : (
                        <select>
                            {coins.map((coin) => (
                                <option key={coin.id}>
                                    {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                                </option>
                            ))}
                        </select>
                    )}
                */

}

/* << 코드 챌린지 - 암호화폐 계산기 >> */
//      - select 박스 안에 있는 option 선택 (코인 선택)
//      - input 태그를 생성하여 x달러 입력하면 얼만큼의 해당 코인을 살 수 있는지 계산
// App07_04.js
if(true) {
    //  1. input 태그 2개 생성하여 div 태그로 묶음
    //      - 입력할 수 있는 input태그, 결과값이 나오는 input 태그 
        /*
            <div>
                <input type="number" placeholder="Dollars..."/>
                <input type="number" placeholder="quote" disabled/>
            </div>
        */
    
    //  2. 입력한 달러값을 가져오는 state 생성
    //      => const [money, setMoney] = useState(0);
    
    //  3. 입력한 input 태그에 value로 money를 주고, 변화 감지하는 함수 onChange 함수 생성 후 이벤트리스너로 추가
    //      =>  const onChangeMoney = (event) => setMoney(event.target.value);
    //          <input type="number" value={money} onChange={onChangeMoney} placeholder="Dollars..."/>

    //  4. select 박스에서 선택한 option값인 state 생성
    //      => const [choice, setChoice] = useState("");

    //  5. select 태그에 value로 choice를 주고, select의 값 변화를 감지하는 onChange 함수 생성 후 이벤트리스너로 추가
    //      => const onChangeChoice = (event) => setChoice(event.target.value);
    //         <select onChange={onChangeChoice} value={choice}>

    //  6. option 태그의 value 값으로는 선택한 코인의 값으로 설정
        /*
            <select onChange={onChangeChoice} value={choice}>
                <option key="">======== Choice =======</option>
                {coins.map((coin) => (
                    <option key={coin.id} value={coin.quotes.USD.price}>
                        {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                    </option>
                ))}
            </select>
        */
    
    //  7. 입력한 값과 코인의 값을 곱한 값을 결과값으로 출력
    //      => <input type="number" placeholder="quotes..." value={money * choice} disabled/>

    //  8. 코드
        /*
            import { useState, useEffect } from "react";

            function App0704() {
                const [loading, setLoading] = useState(true);
                const [coins, setCoins] = useState([]);
                const [money, setMoney] = useState(0);
                const [choice, setChoice] = useState("");

                const onChangeMoney = (event) => setMoney(event.target.value);
                const onChangeChoice = (event) => setChoice(event.target.value);

                useEffect(() => {
                    fetch('https://api.coinpaprika.com/v1/tickers')
                    .then(response => response.json())
                    .then(json => {
                        setCoins(json);
                        setLoading(false);
                    });
                },[]);

                return (
                    <div>
                        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
                        
                        <div>
                            <input type="number" value={money} onChange={onChangeMoney} placeholder="Dollars..."/>
                            <input type="number" placeholder="quotes..." value={money * choice} disabled/>
                        </div>

                        {loading ? (
                            <strong>Loading...</strong>
                            ) : (
                            <select onChange={onChangeChoice} value={choice}>
                                <option key="">======== Choice =======</option>
                                {coins.map((coin) => (
                                    <option key={coin.id} value={coin.quotes.USD.price}>
                                        {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                                    </option>
                                ))}
                            </select>
                        )}

                    </div>
                );
            }

            export default App0704;
        */

}
