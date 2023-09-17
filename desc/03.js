'use strict';


///* 3.0 - Understanding State */
/* State */
/* React로 카운트 세보기 (좋지 않은 방식) */
// 04.react_state1.html
if(true) {
    // state: 데이터가 저장되는 곳
    //  1. JSX로 작성한 index.html을 react_JSX.html에 복붙하고, index.html에는 필요한 부분만 남김
    //      1-1. React Element 생성하는 Container 선언 및 할당 
    //          => 그 element는 div 태그이고 h3태그와 button 태그를 담고 있음
    //          => div React Element가 또다른 두개의 React Element인 h3과 button을 생성함
    //          (이 JSX 코드가 변환된 걸 확인하려면 개발자도구 > Elements > head 태그에서 확인)

    /*  
        <script type="text/babel">
            const root = document.querySelector('#root');

            const Container = () => (
                <div>
                    <h3>Total clicks: 0</h3>
                    <button>Click me!</button>
                </div>
            );

            ReactDOM.render(<Container />, root); 
        </script>
    */

    //  2. React로 카운트 세보기 (좋지 않은 방식)
    //      2-1. 변수 counter 선언 및 초기값 0 할당
    //          => let counter = 0; 
    //      2-2. h3 태그에 있는 횟수 텍스트를 중괄호를 이용하여 변수 counter로 담기
    //          => <h3>Total clicks: {counter}</h3>
    //      2-3. 카운트 세는 함수 생성
                /*  
                    function countUp() {
                        counter = counter + 1;
                    }
                */
    //      2-4. countUp 함수를 Button 클릭 시 호출되도록 (이벤트리스너 추가하는 것처럼) button props 추가
    //          - props에 함수를 추가하였기에 클릭 시에 countUp 함수를 호출하고, countUp은 카운트를 변경함
    //          => <button onClick={countUp}>Click me!</button>
    //      2-5. UI에서는 횟수가 증가되지 않음
    //          - Container를 렌더링하고 root에 담는데, 렌더링한 Container는 counter 값으로 0을 가짐 (페이지가 막 로드 되었기 때문)
    //          - Container를 한번 렌더링할 뿐, UI를 새로고침 해주는 코드가 없음
    //          - 즉, countUp 함수를 호출할 때마다 아래 코드를 호출해야 함
    //              => ReactDOM.render(<Container />, root); 
    //          - 그렇기에 countUp 함수에 추가하여 수정함 (Container를 리렌더링)
                /*  
                    function countUp() {
                        counter = counter + 1;
                        ReactDOM.render(<Container />, root); 
                    }
                */
                
    //      >> 정리
    //          1. 애플리케이션이 시작될 떄 Container를 렌더링 (Container 컴포넌트를 root에 담아줌)
    //          2. 렌더링할 때, counter의 값은 0
    //          3. counter를 증가시키는 함수인 countUp 함수 생성
    //          4. countUp 함수를 버튼 클릭 시 동작하는 이벤트리스너로 추가(button props에 추가)
    //          5. countUp 함수에 Container를 리렌더링하게 하는 코드 추가
    //          6. Container를 리렌더링해주면 함수가 다시 호출되기 때문에 counter의 값은 초기값인 0이 아니라 클릭한 횟수로 변경됨
    //          7. 리렌더링하는 함수를 따로 하여 재사용성이 가능하도록 코드 변경
                /*  
                    <script type="text/babel">
                        let counter = 0;
                        const root = document.querySelector('#root');

                        function render() {
                            ReactDOM.render(<Container />, root); 
                        }

                        function countUp() {
                            counter = counter + 1;
                            render();
                        }

                        const Container = () => (
                            <div>
                                <h3>Total clicks: {counter}</h3>
                                <button onClick={countUp}>Click me!</button>
                            </div>
                        );

                        render();
                    </script>
                */
                
//          >> 변경한 코드로 재정리
//              1. 애플리케이션 시작 시 counter의 값은 0(초기값)이고, render() 함수 실행
//              2. render() 함수를 실행하면 Container Component(counter와 연결되어 있는 h3 태그, button 태그)를 root에 담아줌
//              3. 버튼에 이벤트리스너를 등록하면, 버튼 클릭 시 countUp() 함수가 호출됨
//              4. countUp() 함수는 counter를 증가시키고 다시 render() 함수를 호출해줌
//              5. countUp() 함수에 render() 함수를 호출하는 코드가 있기에 똑같은 과정이 반복되고, 또다시 Container를 root에 담아줌
//              6. Container Component를 사용하면, 업데이트된 counter를 가지고 있으니 바뀐 counter로 UI가 변경됨
//          >> render()가 처음 호출될 때 render() 함수는 Container Component를 root div에 담아주고,
//             ReactDOM.render(<Container />, root)가 최초로 호출되면 Container 함수가 호출되고, 
//             Container 함수가 호출되면 React Element가 반환됨
//             React Element는 counter와 연결되어 있는 h3태그와 button 태그를 의미

//          >> render()는 유저에게 UI를 보여주기에 애플리케이션이 처음 실행할 때 호출해줌, 
//             UI에 있는 데이터가 변경되어 UI를 다시 업데이트하고 싶으면 다시 호출하기 (데이터 변경하는 함수에 render() 호출하는 코드 넣기)  

//          >> 버튼 클릭 시 Container Component 전체를 리렌더링하는거지만, render()를 처음 호출할 때를 제외하고는 사실 변한 데이터만 변경되는 것!
//              - render() 다시 호출하는거라면, 새 Container Component를 생성하는 것(전체 생성)이 아님!
//               새로 렌더링하더라도 전체를 전부 재생성하는게 아니라 바뀐 부분만 새로 생성해줌

//          >>>> 이 방식은 계속 render() 함수를 호출하여 리렌더링해야하기 때문에 최고의 방법은 아님


}



///* 3.1 - setState part One */
/* React로 카운트 세보기 (좋은 방식) - 1 */
// 05.react_state2.html
if(true) {
    //  1. 04.react_state1.html을 05.react_state2.html에 복붙하여 05.react_state2.html에 작성 및 수정

    //  2. Container를 App으로 변경
        /*  
            <script type="text/babel">
                let counter = 0;
                const root = document.querySelector('#root');

                function render() {
                    ReactDOM.render(<App />, root); 
                }

                function countUp() {
                    counter = counter + 1;
                    render();
                }

                const App = () => (
                    <div>
                        <h3>Total clicks: {counter}</h3>
                        <button onClick={countUp}>Click me!</button>
                    </div>
                );

                render();
            </script>
        */

    //  3. 데이터가 바뀔 때 render() 함수를 매번 호출하도록 설정하는게 귀찮음
    //      - ReactDOM.render(<App />, root);  함수를 계속 불러줄 필요 없이 
    //       counter가 0인 시점에서 최초로 렌더링하고 counter 값을 증가시킬 때마다 데이터만 리렌더링하길 원함
    //      - React내에서 데이터를 보관하고, 자동으로 리렌더링을 일으킬 수 있는 방법으로 처음부터 시작
            /*  
                <script type="text/babel">
                    const root = document.querySelector('#root');

                    function App() {
                        return (
                            <div>
                                <h3>Total clicks: 0</h3>
                                <button>Click me!</button>
                            </div>
                        );
                    } 

                    ReactDOM.render(<App />, root); 
                </script>

            */
    
    //  4. App 함수안이자, return문 전에 data라는 상수를 생성하고 React.useState(arg1, arg2)를 값으로 넣음
    //      - React.useState(arg1, arg2): arg1은 data의 초기값, arg2는 arg1를 바꿀 때 사용하는 함수를 넣음
    //      - 이전에 사용했던걸 생각하면 됨. counter라는 data를 주고, 그 counter 값을 바꿀 수 있는 함수를 줌  
    //          let counter = 0;
    //          function counterUp() {}
    //          React.useState(counter, counterUp)

            /*  
                function App() {
                    const data = React.useState();      // [undefined, ƒ]
                    const data = React.useState(0);     // [0, ƒ]
                    

                    const counter = data[0];
                    const modifier = data[1];

                    return (
                        <div>
                            <h3>Total clicks: 0</h3>
                            <button>Click me!</button>
                        </div>
                    );
                } 
            */


    /* 참고. 배열을 꺼내서 사용하고 싶을 경우에는 구조 분해 할당 방법을 사용 */
    {
        //  - a,b,c를 여러번 사용할 수 있어서 좋음
        //  - 주의할 점은 따옴표를 사용하지 않음. 구조 분해 할당은 변수 선언이기 때문!
        //  - 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식

        // 방법 1
        //  1. 값이 있는 배열들 먼저 선언 및 할당
        //      => const food = ['tomato', 'potato'];
        //  2. 빈 배열을 먼저 열어주고, 배열 할당
        //      => const [] = food;
        //  3. 빈 배열에 차례대로 'tomato' 요소의 이름, 'potato' 요소의 이름을 할당
        //      => const [bad, good] = food;
        
        // 이렇게 하는 건, 이와 같음
        //  => const bad = food[0];
        //  => const good = food[1];

        // 방법 2
        //  1. 값이 있는 배열을 먼저 선언 및 할당
        //      => const food = ['tomato', 'potato'];
        //  2. food 배열에 있는 요소의 인덱스를 이용하고, 그 요소에 이름을 붙여 한개씩 할당
        //      => const bad = food[0];
        //      => const good = food[1];
        
        {
            const x = [1,2,3];
            const[a,b,c] = x;
            
            console.log(a);     // 1
            console.log(b);     // 2
            console.log(c);     // 3
        }
        {
            const food = ['tomato', 'potato'];
            const [bad, good] = food;

            console.log(bad);       // 'tomato'
            console.log(good);      // 'potato'
        }        

    }


    //  5. 구조 분해 할당 방법을 사용하여 배열에서 요소들을 꺼내고, 이름을 부여하기
    //      - 구조 분해 할당 방법 사용 전
        /*  
            function App() {
                const data = React.useState(0);    
                const counter = data[0];
                const modifier = data[1];

                return (
                    <div>
                        <h3>Total clicks: {counter}</h3>
                        <button>Click me!</button>
                    </div>
                );
            } 
        */
    
    //      - 구조 분해 할당 방법 사용 후
        /*  
            function App() {
                const [counter, modifier] = React.useState(0);

                return (
                    <div>
                        <h3>Total clicks: {counter}</h3>
                        <button>Click me!</button>
                    </div>
                );
            } 
        */
    

}



///* 3.2 - setState part Two */
/* React로 카운트 세보기 (좋은 방식) - 2 */
// 05.react_state2.html
if(true) {
    // 1. onClick 함수 생성 후 작동 확인
    //  - 작동하는지 확인을 위해 React.useState(0)을 할당했던 상수를 let으로 잠시 변경
    //  - button 태그에 onClick 속성 넣고 생성한 onClick 함수를 넣어서 이벤트 등록
        /*  
            <script type="text/babel">
                const root = document.querySelector('#root');

                function App() {
                    let [counter, modifier] = React.useState(0);
                    const onClick = () => {
                        counter = counter + 1;
                        console.log(counter);
                    }

                    return (
                        <div>
                            <h3>Total clicks: {counter}</h3>
                            <button onClick={onClick}>Click me!</button>
                        </div>
                    );
                } 
                    
                ReactDOM.render(<App />, root); 
            </script>
        */

    //  2. 데이터 변경시 UI가 업데이트되도록 리렌더링 하기
    //  - 이전에는 ReactDOM.render(<App />, root); 을 한번 더 호출해서 해결했지만, 다른 방법을 사용해서 리렌더링 일으키기
    //  - React.useState(0)을 할당했던 상수를 const로 다시 변경
    //  - React.useState 함수는 counter 같은 데이터를 숫자형 데이터로 건네줄거고, 그 데이터 값을 바꿀 함수도 함께 줌
    //   그 함수를 이용해서 데이터를 변경했을 때, 데이터 값이 변경되고, Component도 동시에 리렌더링 됨

    //  - counter라는 데이터를 받아서, return()에 그 데이터를 {counter}로 담음
    //      > 참고로, return()부분이 사용자가 보게 될 Component
    //  - 버튼이 클릭되면, counter 값을 바꿔줄 함수를 호출할건데, counter의 새로운 값(counter + 1)을 가지고 해당 함수를 호출해줌
        /*  
            <script type="text/babel">
                const root = document.querySelector('#root');

                function App() {
                    const [counter, modifier] = React.useState(0);
                    const onClick = () => {
                        modifier(counter + 1);
                    }

                    return (
                        <div>
                            <h3>Total clicks: {counter}</h3>
                            <button onClick={onClick}>Click me!</button>
                        </div>
                    );
                } 
                    
                ReactDOM.render(<App />, root); 
            </script>
        */

    //  3. 오직 변경된 부분만을 업데이트 해줌
    //      - React는 변경된 부분을 파악해서 HTML에서 그 부분만 업데이트함
}




///* 3.3 - Recap */
// 05.react_state2.html
if(true) {
    //  1. React Component 안에서 데이터를 변경하는 방법과, 그 데이터를 변경했을 때 React가 화면에 refresh(리렌더링)하여 보여주는 것을 확인함 
    //  2. modifier 함수를 사용하여 Component의 state(애플리케이션 데이터)를 변경할 때, Component는 새로운 값을 가지고 다시 한번 렌더링 됨
    //      - modifier 함수를 가지고 state를 변경할 때, Component 전체가 새로운 값을 가지고 재생성(리렌더링) 됨
    //      - 데이터가 바뀔 때마다 Component를 리렌더링하고 UI를 refresh
    //  3. state가 바뀌면 리렌더링이 일어나고, React가 Component를 refresh 한다는 것을 반드시 기억하기
}




///* 3.4 - State Functions */
