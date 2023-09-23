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






///* 7.3 - Movie App part One */
/* 영화 앱 프로젝트 */
// 페이지에 영화 보여주기
//  1. 영화들을 다 보여주기 (영화 정보 API 필요)
//  2. 별점이 9 이상의 연도별로 정렬하여 최신 영화부터 보여줌
// App07_05.js
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
            // import App0703 from './App07_03';
            // import App0704 from './App07_04';
            import App0705 from './App07_05';

            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                // <App05 />
                // <App0601 />
                // <App0602 />
                // <App0603 />
                // <App0701 />
                // <App0702 />
                // <App0703 />
                // <App0704 />
                <App0705 />
            );

        */
    //      - App07_05.js
        /*
            function App0705() {
                return (
                    <div></div>
                )
            }

            export default App0705;
        */

    //  2. 로딩 중일때, 'Loading' 글자 보여주고, 로딩이 끝나면 영화목록 보여줌
    //      2-1. useState import
    //              => import { useState } from "react";
    //      2-2. 로딩 관련 useState 생성
    //          - 기본값으로는 true
    //              => const [loading, setLoading] = useState(true);

    //      - useState()에 있는 data를 수정하는 함수가 실행되면 Component가 다시 render하는 것을 잊지 말기

    //      2-3. loadng이면 'Loading' 글자 보여주고, loding이 끝나면 영화들을 리턴해야하는데 아직 안짰기 때문에 일단은 null로 지정하기
    //              => {loading ? <h1>Loading....</h1> : null}

    //  3. Component가 시작할 때 딱 한번만 코드 실행하기 (여기서는 딱 한번 API 호출하기)
    //      3-1. useEffect import
    //              => import { useState, useEffect } from "react";
    //      3-2. useEffect 사용 (딱 한 번이므로 두번째 값은 빈 배열로 설정)
    //              => useEffect({}, []);
    //      3-3. useEffect 첫번째 값에 fetch를 사용하여 영화 API 호출하기
    //          - https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
    //          - then을 이용하여 response를 받아오고, response에서 json파일을 얻음
    //          - 얻은 json 파일을 콘솔로그로 찍어보기
            /*
                useEffect(() => {
                    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
                        .then(response => response.json())
                        .then(json => console.log(json));
                }, []);
            */

    //              => 아직 state를 변경해주지를 않아서 화면은 바뀌지 않았지만 Object로 받아와서 console.log에 찍힘

    //  4. movie 관련 useState 생성 및 값 설정
    //      4-1. movie 관련 useState 생성
    //          - 기본값으로는 빈 배열 []
    //              => const [movies, setMovies] = useState([]);
    //      4-2. 3번에서 fetch로 가져온 json파일의 Object 안에 있는 data.movies를 movies의 state로 설정
    //      4-3. console.log(movies)를 찍어서 확인  => 로딩이 끝나면 모든 데이터를 가져와서 콘솔로그에 찍힘
            /*
                useEffect(() => {
                    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
                        .then(response => response.json())
                        .then(json => setMovies(json.data.movies));
                }, []);
                console.log(movies);
            */
    
    //  5. 로딩이 끝났기 때문에 setLoading을 false로 설정해야함
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

    //  6. 3번에서 then을 이용하였는데, 요즘에는 then 대신 async-await를 사용함. 그에 맞게 변경해보기
    //      6-1. async 함수인 getMovies 함수 생성
    //              => const getMovies = async() => {};
    //      6-2. useEffect를 이용해서 getMovies를 호출
    //              => useEffect(() => {getMovies()}, []);
    //      6-3 getMovies 함수 내용은 await를 이용하여 작성
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
    //      6-4. 더 간단하게 변경
                /*
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
                */

    //  7. movies를 화면에 보이도록 하기 (영화 포스터 이미지 중간사이즈, 영화 제목, 영화 장르, 영화 요약)
    //      - map(arg)에서 arg함수의 첫번째 인자는 각각의 영화 정보에 대한 배열이고, 두번째 인자는 index임
    //      - 대체로 key를 index로 사용하고, 여기서도 사용해도 되지만, 각각의 영화들마다 id가 있으므로 index는 가져올 필요없음
    //      - 영화 장르의 경우에는 배열이므로 다시한번 map을 이용하여 가져오기 (이 경우 key로 index를 사용해도 됨 아니면 장르 이름 그대로 사용)
    //      - map을 이용할 경우 key를 줘야한다는 것을 잊지말기
    //      - img 태그의 경우에는 모든 element들은 alt 속성을 가지기 때문에 alt에 값을 안 넣어주면 이상이 있다고 표시됨. alt 값에 movie.title 넣어주기

                /*
                    import { useState, useEffect } from "react";

                    function App0705() {
                        const [loading, setLoading] = useState(true);
                        const [movies, setMovies] = useState([]);

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
                                                <img src={movie.medium_cover_image} alt={movie.title} />
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
                */


    //  정리
    //  1. API로부터 받아온 data를 state로 설정하여 보여주는 것 뿐임
    //  2. loading 중일 때는 로딩 관련 state가 true, 로딩이 끝나면(API가 응답하면) false로 변경 
    //  3. moviess 관련 state로는 기본값으로 빈 배열 []로 설정하고, movies를 받아오면 API로부터 얻은 data로 state를 변경함
    //  4. movies.map()을 이용하여 각각의 movie에 접근하여 그 값을 변환할 수 있음

}






///* 7.4 - Movie App part Two */
/* 영화 앱 프로젝트 */
// Movie Component 생성하여 App Component에 추가하여 렌더링하기
// App07_06.js
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
            // import App0703 from './App07_03';
            // import App0704 from './App07_04';
            // import App0705 from './App07_05';
            import App0706 from './App07_06';

            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                // <App05 />
                // <App0601 />
                // <App0602 />
                // <App0603 />
                // <App0701 />
                // <App0702 />
                // <App0703 />
                // <App0704 />
                // <App0705 />
                <App0706 />
            );

        */
    //      - App07_06.js
        /*
            import { useState, useEffect } from "react";

            function App0706() {
                const [loading, setLoading] = useState(true);
                const [movies, setMovies] = useState([]);

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
                                        <img src={movie.medium_cover_image} alt={movie.title}/>
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

            export default App0706;
        */
    
    //  2. Movie.js 생성 및 Movie Component 작성
    //      - App0706 Component에 있는 movie관련 부분을 Movie Component로 옮김
    //          > App0706 Component에서 옮길 코드
                    /*
                        <div key={movie.id}>
                            <img src={movie.medium_cover_image} />
                            <h2>{movie.title}</h2>
                            <p>{movie.summary}</p>
                            <ul>
                                {movie.genres.map((genre, index) => (<li key={index}>{genre}</li>))}
                            </ul>
                        </div>
                    */
    //          > Movie Component로 옮긴 후 수정
    //              - key가 필요 없으므로 삭제
    //              - movie. 라고 적힌 부분 다 지우기
    //              - medium_cover_image, title, summary, genres는 아직 정의되어있지 않아서 에러가 뜨고 있음
    //               이후에 movie가 App07_06.js로부터 정보를 받을 예정
                    /*
                        function Movie() {
                            return (
                                <div>
                                    <img src={medium_cover_image} />
                                    <h2>{title}</h2>
                                    <p>{summary}</p>
                                    <ul>
                                        {genres.map((genre, index) => (<li key={index}>{genre}</li>))}
                                    </ul>
                                </div>
                            );
                        }

                        export default Movie;
                    */

    //  3. Movie Component의 인자로 props object를 넣어줌
    //      - Movie Component가 medium_cover_image, title, summary, genres 들을 parent Componet (App0706)로부터 받아온다고 하는 것
                /*
                    function Movie({medium_cover_image, title, summary, genres}) {
                        return (
                            <div>
                                <img src={medium_cover_image} alt={title}/>
                                <h2>{title}</h2>
                                <p>{summary}</p>
                                <ul>
                                    {genres.map((genre, index) => (<li key={index}>{genre}</li>))}
                                </ul>
                            </div>
                        );
                    }

                    export default Movie;
                */

    //  4. App0706 Component에서 Movie Component를 렌더링해줌
    //      4-1. Movie import
    //          => import Movie from "./Movie";
    //      4-2. Movie Component 렌더링
    //          => <div>{movies.map((movie) => (<Movie />))}</div>
    //      4-3. Movie Component에 property 보내기
    //          => <div>{movies.map((movie) => (<Movie mediumCoverImage={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres}/>))}</div>
    //      4-4. 콘솔에 key 필요하다는 경고창 뜨기에 key도 추가함
    //          - React에서 map을 사용하는 경우 map안에 있는 Component들을 render할 때 key를 사용함
    //          - key 입력하는 것을 잊지말기!
    //              => <div>{movies.map((movie) => (<Movie key={movie.id} mediumCoverImage={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres}/>))}</div>

                /*
                    import { useState, useEffect } from "react";
                    import Movie from "./Movie";

                    function App0706() {
                        const [loading, setLoading] = useState(true);
                        const [movies, setMovies] = useState([]);

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
                                            <Movie 
                                                key={movie.id}
                                                mediumCoverImage={movie.medium_cover_image} 
                                                title={movie.title} 
                                                summary={movie.summary} 
                                                genres={movie.genres}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    }

                    export default App0706;
                */

    //  5. Movie.js에 PropTypes 사용
    //      5-1. PropTypes import
    //          => import PropTypes from "prop-types";
    //      5-2. Movie Component의 prop인 mediumCoverImage, title, summary, genres들을 PropTypes 설정
    //          - mediumCoverImage는 타입이 string이여야 하고, 필수로 있어야 함
    //          - title은 타입이 string이여야 하고, 필수로 있어야 함
    //          - summary는 타입이 string이여야 하고, 필수로 있어야 함
    //          - genres는 string 타입을 가진 array여야 함, 필수로 있어야 함
                /*
                    Movie.propTypes = {
                        mediumCoverImage: PropTypes.string.isRequired,
                        title: PropTypes.string.isRequired,
                        summary: PropTypes.string.isRequired,
                        genres: PropTypes.arrayOf(PropTypes.string).isRequired,
                    }
                */
}

// 앱 안에서 페이지를 전환하는 방법 - React Router 사용
// App07_07.js
if(true){
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
                // import App0703 from './App07_03';
                // import App0704 from './App07_04';
                // import App0705 from './App07_05';
                // import App0706 from './App07_06';
                import App0707 from './App07_07';

                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(
                    // <App05 />
                    // <App0601 />
                    // <App0602 />
                    // <App0603 />
                    // <App0701 />
                    // <App0702 />
                    // <App0703 />
                    // <App0704 />
                    // <App0705 />
                    // <App0706 />
                    <App0707 />
                );
            */
    //      - App07_07.js
            /*
                import { useState, useEffect } from "react";
                import Movie from "./Movie";

                function App0706() {
                    const [loading, setLoading] = useState(true);
                    const [movies, setMovies] = useState([]);

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
                                        <Movie 
                                            key={movie.id}
                                            mediumCoverImage={movie.medium_cover_image} 
                                            title={movie.title} 
                                            summary={movie.summary} 
                                            genres={movie.genres}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                }

                export default App0706;
            */
    //      - Movie.js
            /*
                import PropTypes from "prop-types";

                function Movie({mediumCoverImage, title, summary, genres}) {
                    return (
                        <div>
                            <img src={mediumCoverImage} alt={title}/>
                            <h2>{title}</h2>
                            <p>{summary}</p>
                            <ul>
                                {genres.map((genre, index) => (<li key={index}>{genre}</li>))}
                            </ul>
                        </div>
                    );
                }

                Movie.propTypes = {
                    mediumCoverImage: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    summary: PropTypes.string.isRequired,
                    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
                }


                export default Movie;
            */
    
    //  2. React Router 사용
    //      - React Router는 페이지를 전환함
    //      - 현재 페이지는 'http://localhost:3000' 혹은 'http://localhost:3000/?'로 되어있는데, 
    //       'http://localhost:3000/movies/movie.id'로 했을 경우 해당 영화에 대한 페이지로 이동이 가능하게 하기
    //      6-1. react-router-dom 설치
    //              => Terminal > New Terminal > 'npm install react-router-dom'
    //          - 내가 만든 프로젝트의 경우에는  'cd react-for-beginners' 로 이동 후 실행하기..ㅎㅎ..ㅜ
    
    //  3. 스크린 단위로 생각해야 하므로 코드를 바꾸거나 이동시켜야 함
    //      - route별로 생각해야 함
    //      - home route의 경우에는 모든 영화를 보여줌
    //      - Moves route의 경우(/Moves/)에는 영화 하나만 보여줌

    //  4. route관련 폴더 및 파일
    //      - src > 'routes' 폴더 생성
    //      - src > routes > 'components' 폴더 생성
    //      - src > routes > components에 Movie.js 파일 이동
    //      - Movie.js의 파일이 이동되었기 때문에 Movie Component를 import하는 파일들도 수정해야함
    //          => import Movie from "./routes/components/Movie";
    //      - src > routes > 'Home.js' 파일 생성
    
    //  5. 생성한 Home.js 작성
    //      - Home route는 기본적으로 App Component 전체를 가지고 있어야 함
    //      - 작성해왔던 App Component 코드를 Home Component로 옮겨야 함.(import 포함)
    //      - App07_07.js 
                /*
                    function App0707() {
                        return null;
                    }

                    export default App0707;
                */
    //      - Home.js
                /*
                    import { useState, useEffect } from "react";
                    import Movie from "./routes/components/Movie";

                    function Home() {
                        const [loading, setLoading] = useState(true);
                        const [movies, setMovies] = useState([]);

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
                                            <Movie 
                                                key={movie.id}
                                                mediumCoverImage={movie.medium_cover_image} 
                                                title={movie.title} 
                                                summary={movie.summary} 
                                                genres={movie.genres}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    }

                    export default Home;
                */

    //  6. 새로운 route 생성
    //      - src > rotes > 'Detail.js' 파일 생성 및 작성
                /*
                    function Detail() {
                        return <h1>Detail</h1>;
                    }

                    export default Detail;
                */

    //  7. App.js는 더 이상 영화들을 보여주지 않고, router를 render함
    //      - router: URL을 보고 있는 Component
    //      - URL이 'http://localhost:3000/'일 경우 Home Component를 보여줌
    //      - URL이 'http://localhost:3000/movies/{movie.id}' 일 경우 Detail Component를 보여줌
    //      - 즉, URL에 따라서 Home을 보여주거나 Detail을 보여줄 예정
}






///* 7.5 - React Router */
/* 영화 앱 프로젝트 */
// react-router-dom 사용법
// App07_07.js
if(true) {
    //  1. 시작
    //      - App07_07.js
            /*
                function App0707() {
                    return null;
                }

                export default App0707;
            */

    //  2. react-router-dom을 사용하기 위해서는 import를 해야 함
    //      - App07_07.js에 import
    //      - Router의 종류에는 Hash Router, Browser Router가 있음 (둘 다 해볼 예정)
    //          => import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

    //  3. App0707.js Component에 Router Component 생성
    //      - 기존에 만들어져있는 Router Component를 사용하기만 하면 됨
    //          =>  function App0707() {
    //                  return <Router></Router>;
    //              }

    //  4. Router Component 안에 Switch Component 사용
    //      - Switch Component 또한 기존에 만들어져 있는 Component로 사용하기만 하면 됨
    //      - Switch Component는 Route를 찾는 Component로, URL을 의미하며 Route를 찾으면 Component를 렌더링함 
    //          => return <Router><Switch></Switch></Router>;

    //  5. Switch Component가 버전 6부터 Routes Component로 변경되었으니 다 바꿔주기
    //              => import { BrowserRouter, Routes, Route } from "react-router-dom";
    //              => return <Router><Routes></Routes></Router>;
    //      5-1. 기존에는 Switch Component 안에 Route Component들을 넣고 그 안에 필요한 Component를 넣어서 사용했지만, 
    //          바뀐 Routes Component는 안에 Route Component를 넣지 않고, element prop에 바로 필요한 Component들을 할당하도록 바뀌었음
    //              => import { BrowserRouter, Routes, router } from "react-router-dom";

    //  6. Route 설정
    //      6-1. 홈화면으로 갈 때 사용하는 Route
    //          - 경로는 "/"
    //          - Home Component를 보여줌
    //              => <Route path="/" element={<Home/>}/>
    //          - 기존에 만들었던 Home Component를 사용하기 위해 Home.js를 import 하기
    //              => import Home from "./routes/Home";
    //      6-2. 영화 상세 페이지로 갈 때 사용하는 Route
    //          - 경로는 "/movie"
    //          - Detail Component를 보여줌
    //              => <Route path="/movie" element={<Detail/>}/>
    //          - 기존에 만들었던 Detail Component를 사용하기 위해 Detail.js를 import 하기
    //              => import Detail from "./routes/Detail";

        /*
            import { BrowserRouter, Routes, Route } from "react-router-dom"; 
            import Home from "./routes/Home";
            import Detail from "./routes/Detail";

            function App0707() {
                return (
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/movie" element={<Detail/>}/>
                        </Routes>
                    </BrowserRouter>
                );
            }

            export default App0707;
        */

    //  참고. 가장 최신 방법을 사용할 경우
        /*
            import Home from "./routes/Home";   
            import Detail from "./routes/Detail";
            import { createBrowserRouter, RouterProvider } from "react-router-dom";

            const router = createBrowserRouter ([
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/movie",
                    element: <Detail />,
                },
            ]);

            function App0707() {
                return (
                    <RouterProvider router={router} />
                );
            }

            export default App0707;
        */



    //  7. Browser Router와 Hash Router 차이
    //      - URL 생긴게 다름
    //      - Browser Router: 보통의 웹사이트 URL (http://localhost:3000/)
    //      - Hash Router: URL 뒤에 무언가를 붙임 (http://localhost:3000/#/)
    //      - 그렇기에 대부분 Browser Router를 사용



    //  여기까지 정리
    //  1. Terminal에 'react-router-dom' 다운로드
    //      => cd react-for-beginners
    //      => npm install react-router-dom
    //  2. 1을 다운로드하면 제공되는 Component 이용하여 
    //      2-1. BrowserRouter Component: 유저에게 보여주고 싶은 것들을 안에 넣고 먼저 렌더링
    //      2-2. Routes Component: 한 번에 하나의 Route만 렌더링하기 위해 사용 (이전 버전에서는 Switch Component였음)
    //      2-3. Route Component: 이동할 URL 경로(path), 사용할 Component(element)를 작성하기 위함 
    


}

// 한 Route에서 다른 Route로 이동하는 방법
// 유저가 영화 제목 클릭 시 해당 영화의 Detail 페이지로 이동
// App07_07.js
if(true) {
    //  - 단순 HTML 태그인 a태그를 이용하여 페이지를 이동하게 하려면?
    //      => a 태그 사용 
    //      => <h2><a href="/movie"/></h2>
    //  - 그런데, 이동은 되지만 페이지 전체가 다시 실행됨
    //  - React를 이용하여 재실행되는건 막아보기
    //      => Link Component 이용
    //      => Link Component는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 Component


    //  2. Movie.js에서 Link Component 사용하기
    //      2-1. Link import
    //          => import { Link } from "react-router-dom";
    //      2-2. 영화 제목 태그 있는 부분에 Link Component 사용하기
    //          => <h2><Link to="/movie">{title}</Link></h2>

}






///* 7.6 - Parameters */
/* 영화 앱 프로젝트 */
// React Router를 이용하여 동적 URL 만들기
// 동적 URL: URL에 변수를 넣을 수 있음
// App07_08.js
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
                // import App0703 from './App07_03';
                // import App0704 from './App07_04';
                // import App0705 from './App07_05';
                // import App0706 from './App07_06';
                // import App0707 from './App07_07';
                import App0708 from './App07_08';

                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(
                    // <App05 />
                    // <App0601 />
                    // <App0602 />
                    // <App0603 />
                    // <App0701 />
                    // <App0702 />
                    // <App0703 />
                    // <App0704 />
                    // <App0705 />
                    // <App0706 />
                    // <App0707 />
                    <App0708 />
                );

            */
    //      - App07_08.js
            /*
                import { BrowserRouter, Routes, Route } from "react-router-dom"; 
                import Home from "./routes/Home";
                import Detail from "./routes/Detail";

                function App0707() {
                    return (
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/movie" element={<Detail/>}/>
                            </Routes>
                        </BrowserRouter>
                    );
                }

                export default App0707;
            */
    //      - Movie.js
            /*
                import PropTypes from "prop-types";
                import { Link } from "react-router-dom";

                function Movie({mediumCoverImage, title, summary, genres}) {
                    return (
                        <div>
                            <img src={mediumCoverImage} alt={title}/>
                            <h2>
                                <Link to="/movie">{title}</Link>
                            </h2>
                            <p>{summary}</p>
                            <ul>
                                {genres.map((genre, index) => (<li key={index}>{genre}</li>))}
                            </ul>
                        </div>
                    );
                }

                Movie.propTypes = {
                    mediumCoverImage: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    summary: PropTypes.string.isRequired,
                    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
                }


                export default Movie;                                                               
            */
    //      - Home.js
            /*
                import { useEffect, useState } from "react";
                import Movie from "./components/Movie";

                function Home() {
                    const [loading, setLoading] = useState(true);
                    const [movies, setMovies] = useState([]);

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
                                        <Movie 
                                            key={movie.id}
                                            mediumCoverImage={movie.medium_cover_image} 
                                            title={movie.title} 
                                            summary={movie.summary} 
                                            genres={movie.genres}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                }

                export default Home;
            */
    //      - Detail.ja
            /*
                function Detail() {
                    return <h1>Detail</h1>;
                }

                export default Detail;
            */

    //  1. App0708 Component에서 상세페이지 기존 URL 뒤에 /:id를 적어줌
    //      => <Route path="/movie/:id" element={<Detail/>}/>
    
    //  2. Movie Component에서 유저를 "/movie/변수"의 경로로 보내기
    //      2-1. Movie Component에 id(movie.id)가 필요한데, props로 받고 있지 않음.  
    //              => function Movie({mediumCoverImage, title, summary, genres}) {...}
    //      2-2. Movie Component의 부모 요소인 Home Component에서 move.id를 넘겨주기
    //          - Home Component는 Movie Component를 렌더링함
    //              => id={movie.id}
    //      2-3. Movie Component는 이제 prop으로 id를 받을 수 있음
    //              => function Movie({id, mediumCoverImage, title, summary, genres}) {...}
    //      2-4. Movie Component에서 id도 propTypes를 설정함
    //              => id: PropTypes.number.isRequired,
    //      2-5. Movie Component에서 Link Component에 있는 링크 수정
    //              => <Link to={`/movie/${id}`}>{title}</Link>
    //      2-6. 브라우저에서 영화제목 클릭 시 URL이 /movie/id값 으로 되었는지 확인

    //  3. URL에 나오는 id값을 App Component에서 알고 싶을 경우에 사용
    //      - 이는 React Router에게 해당 id의 값을 알려달라는 의미
    //          => <Route path="/movie/:id" element={<Detail/>}/>
    //      - 콜론 뒤에 있는 변수는 내가 받게 될 변수의 이름이 됨. 즉 useParams()를 이용했을 때 나오는 변수의 이름
    
    //  4. Movie Component에서 이동되는 URL에 있는 변수를 React Router에 받을 거라고 말해주면(:변수),
    //    Detail Component에서 useParams() 함수를 사용하면 React Router가 이 변수의 값을 넘겨줌
    //      - useParams() 함수를 이용할 때, React Router가 알고 있는 변수명을 중괄호 안에 넣어서 받음
    //          => const { id } = useParams();     
    //             console.log(id);         // 53277
    //             console.log({id});       // {id: '53277'}     

    //  5. useEffect 이용하여 받은 id값을 API에 요청하기
    //      - fetch를 이용하여 API 호출
    //      - URL에 id부분을 ${id}로 설정
    //      - await는 async 함수 내부에 있지 않으면 사용할 수 없으므로, getMovie() 함수 생성하여 async 함수로 만들고, 그 안에 await 코드들을 넣어줌 
    //          => import { useEffect } from "react";
                /*
                    const getMovie = async () => {
                        const json = await (
                            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
                        ).json();
                        console.log(json);
                    }
                    
                    useEffect(() => {
                        getMovie();
                    }, []);
                */


    //  - Detail.js
        /*
            import { useEffect } from "react";
            import { useParams } from "react-router-dom";


            function Detail() {
                const { id } = useParams();

                const getMovie = async () => {
                    const json = await (
                        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
                    ).json();
                    console.log(json);
                }
                
                useEffect(() => {
                    getMovie();
                }, []);

                return <h1>Detail</h1>;
            }

            export default Detail;
        */


}

/* 코드 챌린지 - Detail 내용 만들기 */
//  - Home에서 했던 것처럼 loading을 Detail에 해주기
//  - movie가 state에 없어서 현재 API에서 json을 받아와서 아무것도 안 하고 있는 상태임
//      => json을 state 에 넣어서 해보기
if(true) {
    //  1. Movie Component, useState import
    //          => import { useState, useEffect } from "react";
    //          => import Movie from "./components/Movie";
    //  2. loading 관련 useState 생성
    //          => const [loading, setLoading] = useState(true);
    //  3. movie 관련 useState 생성
    //          => const [movie, setMovie] = useState([]);
    //  4. getMovie 함수 안에서 Movie state 변경 함수 설정
    //          => setMovie(json.data.movie);
    //  5. getMovie 함수 안에서 loading state 변경 함수 설정
    //          => setLoading(false);
    //  6. 마찬가지로, 로딩 중일 때는 'Loading...' 글자 띄우고 로딩이 끝나면 영화정보 띄우기
    //      - summary 속성이 없는 경우가 있어서 summary 속성을 descriptionFull로 변경했음
    //      - Home.js, Movie.js에도 적용함
                /*
                    return (
                        <div>
                            {loading ? (
                                <h1>Loading....</h1>
                            ) : (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    mediumCoverImage={movie.medium_cover_image} 
                                    title={movie.title} 
                                    descriptionFull={movie.description_full} 
                                    genres={movie.genres}
                                />
                            )}
                        </div>
                    );
                */
    //  7. 끝
        /*
            import { useState, useEffect } from "react";
            import { useParams } from "react-router-dom";
            import Movie from "./components/Movie";


            function Detail() {
                const { id } = useParams();
                const [loading, setLoading] = useState(true);
                const [movie, setMovie] = useState([]);


                const getMovie = async () => {
                    const json = await (
                        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
                    ).json();
                    setMovie(json.data.movie);
                    setLoading(false);
                }

                useEffect(() => {
                    getMovie()
                }, []);

                return (
                    <div>
                        {loading ? (
                            <h1>Loading....</h1>
                        ) : (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                mediumCoverImage={movie.medium_cover_image} 
                                title={movie.title} 
                                descriptionFull={movie.description_full} 
                                genres={movie.genres}
                            />
                        )}
                    </div>
                );
            }

            export default Detail;
        */

}







///* 7.7 - Publishing */
/* github pages에 deploy */
if(true) {
    //  1. VS Code에서 'gh-pages' 다운로드
    //      - gh-pages: 결과물을 github pages에 업로드 할 수 있게 해주는 패키지
    //          => 'npm install gh-pages'
    //          => 'npm i gh-pages'

    //  2. package.json에서 "scripts" - "build" 있는지 확인
    //      - 해당 script를 실행하면 웹 사이트의 production ready code를 생성하게 됨
    //      - production ready: 코드가 압축되고 모든게 최적화 된다는 의미
    //          => 'npm run build'

    //  3. 2번이 실행되고나면, 'react-for-beginners' 디렉토리 안에 'build' 폴더가 생성됨
    //      - static 디렉토리 안에 있는 script들은 지금까지 작성한 코드들을 압축한 것
    //      - 이는 브라우저가 이해할 수 있는 코드임

    //  4. package.json 파일에 push할 Github에 대한 내용 추가하기
    //      - 마지막에서 두번째 부분에 추가
    //      - GitHub에서 먼저 Repository 생성 후 하기
    //          => ,"homepage" : "https://내깃허브명.github.io/저장할깃허브레포지토리"
    //          => ,"homepage" : "https://sjin7777.github.io/react-test/"

    //  5. package.json 파일에 script 생성
    //      5-1. "scripts" 부분에 추가
    //              => , "deploy" : "gh-pages -d build"
    //          - deploy가 하는 일: 설치한 gh-pages를 실행시키고, 'build' 디렉토리를 가져감 
    //          - 근데 build를 하고 난 다음에 deploy 하는건 귀찮음
    //      5-2. "scripts" 부분에 또 추가
    //          - deploy를 실행시키면, predeploy가 자동으로 먼저 실행됨
    //          - predeploy는 'npm run build'를 실행시킴
    //              => , "predeploy" : "npm run build" 

    //  6. build 폴더 삭제
    
    //  7. deploy 실행
    //          => 'npm run deploy' 
    //      - deploy를 실행하면 Node.js가 predeploy(npm run build)를 먼저 실행시킴
    //      - predeploy는 'npm run build' 이므로 build인 'react-scripts build'를 실행시킴
    //      - 실행이 끝나면 'gh-pages -d build'가 실행됨
    //      - 'gh-pages -d build'는 gh-pages가 build 폴더를 4번에서 적어놓았던 웹 사이트에 업로드하도록 함

    //  8. 404에러 뜸
    //      - github 설정 => public
    //      - git remote -v 했을 때 아무것도 나오지 않을 경우
    //          => git remote add origin https://github.com/sjin7777/react-test.git
    //      - git remote set-url origin https://github.com/sjin7777/react-test.git
    //      - 해당 프로젝트에 있는 .gitignore 파일에 build 파일도 포함되어 있으면 지워주기
    //      - global user.name 맞는지 확인
    //          => 'git config --global user.name'
    //       - App07_08.js 파일 수정
    //          => <BrowserRouter basename={process.env.PUBLIC_URL}>...</BrowserRouter>
    //          => <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}/>
    //          => <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail/>}/>
    //       - Movie.js 파일 수정
    //          => <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>

    //  9. 다시 7번 실행하고 해당 URL 들어가서 대기 (주소 CTRL + 클릭)
    //      - "https://sjin7777.github.io/react-test"
    



}