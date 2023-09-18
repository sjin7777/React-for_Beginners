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
/* 사용자의 input을 어떻게 얻는지, form을 만들었을때 state는 어떤 식으로 작용하는지를 배울 예정 */
/* 앱의 state를 바꾸는 방법 */
// 06.react_state3.html
if(true) {
    //  1. counter라고 설정한 현재 state를 이용해서 다음 state를 위한 계산을 해주고 있음
    //      - counter의 state를 이용해서 새로운 counter state를 계산하고 있음
    //       counter가 다른 곳에서 update 될 수 있기 때문에 이와 같은 방법은 좋지 않음 
        /*  
            const [counter, modifier] = React.useState(0);
            const onClick = () => {
                modifier(counter + 1);
            }
        */

    //  2. state를 바꾸는 방법은 2가지가 있음
    //  2-1. 원하는 숫자 입력하기 (modifier를 이용해서 원하는 값을 직접 넣기)
    //      - modifier함수를 설정해서 새 값으로 변경하기
    //      => 클릭 시 원하는 값으로 변경은 되지만, 다시 클릭하면 값이 변경되지 않음
        /*  
            const [counter, modifier] = React.useState(0);
            const onClick = () => {
                modifier(987);
            }
        */
    
    //  2-2. 함수 전달하기(이전 값을 이용해서 현재 값을 계산하기)
    //      - 이전 값을 바탕으로 현재 값을 설정하고 싶다면 modifier에 함수를 넣음
    //      - modifier() 함수의 첫 번째 argument는 현재 값이고, 이 함수의 return 값이 새로운 state가 됨
    //      - 이 함수가 뭘 return을 하던지 그게 새로운 state가 됨
    //      - modifier(counter + 1); 와 똑같이 현재의 state를 가지고 새로운 값을 계산하지만, 이 방법이 더 안전함
    //       이런 식으로 함수를 사용했을 때, React가 이 current가 확실히 현재 값이라는 것을 보장하고 있기 때문
        /*  
            const [counter, modifier] = React.useState(0);
            const onClick = () => {
                modifier((current) => current + 1);
            }
        */

    //  3. state 기반으로 계산을 하고 싶다면 2-2처럼 함수를 이용해야 함
    //      - 그래서 다음 state의 값이 현재 값을 바탕으로 나올 수 있도록 함
    //      - 즉, 현재 state를 바탕으로 다음 state를 계산하고 싶다면, 함수를 사용해야 함
    //      - 그래야 현재 state인 현재 counter 값을 줄거고, 예상하지 못한 업데이트가 발생해도 혼동을 주는 것을 방지해줌

}




///* 3.5 - Inputs and State */
/* Unit conversion (단위 변환) 앱 만들기 */
/* 분 => 시 */
// 07.converter.html
if(true) {
    //  1. 아래 코드에서부터 시작
    /* 
        <script type="text/babel">
            const root = document.querySelector('#root');

            function App() {
                return (
                    <div>
                        <h1>Super Converter</h1>
                    </div>
                );
            } 
                
            ReactDOM.render(<App />, root); 
        </script>
    */
    
    //  2. 분을 시간 단위로 변환
    //  2-1. type이 number이고, 분을 나타내는 input과 시간을 나타내는 input 생성
    //      - Minutes라고 되어 있는 input에 분을 쓰면, Hours라고 되어 있는 input의 값인 시간 단위가 갱신
    //      - Houres라고 되어 있는 input에 시간을 쓰면, Minute라고 되어 있는 input의 값인 분 단위가 갱신
        /*  
            function App() {
                return (
                    <div>
                        <h1>Super Converter</h1>
                        <input type="number" placeholder="Minutes" />
                        <input type="number" placeholder="Hours" />
                    </div>
                );
            } 
        */
    
    //      - JSX는 HTML과 비슷하지만 몇 가지의 다른 점이 존재함
    //          => 태그의 속성으로 클래스 이름을 작성할 때, HTML에서는 class=""이지만, JSX에서는 className=""
    //          => label 태그를 사용하고 input과 연결할 때, HTMP에서는 for=""이지만, JSX에서는 htmlFor=""
    
    //  2-2. JSX 형식으로 label 태그와 속성 추가하기
        /*  
            function App() {
                return (
                    <div>
                        <h1>Super Converter</h1>

                        <label htmlFor="minutes">Minutes</label>
                        <input type="number" id="minutes" placeholder="Minutes" />

                        <label htmlFor="hours">Hours</label>
                        <input type="number" id="hours" placeholder="Hours" />
                        
                    </div>
                );
            } 
        */
    
    //  2-3. minutes에 필요한 state 생성
    //      - React code로 minutes input에 어떤 숫자를 적었는지 추적이 가능함
    //      - React.useState()는 array를 제공하고, 첫 번째 element가 현재의 값이 됨 (초기값은 설정하지 않아도 됨)
    //          => const [minutes, setMinutes] = React.useState();

    //  2-4. minutes에 있는 value를 input에게 주기
    //      - minutes의 값을 넣어주는 input이 있고, 그 값은 minutes가 됨. 그 minutes는 state에 있음 
    //          => <input type="number" id="minutes" placeholder="Minutes" value={minutes}/>

    //  2-5. 사용자가 다른 값을 입력할 때마다 minute input의 value를 업데이트하기
    //      - 사용자가 input에 새로운 값을 입력할 때마다 state를 업데이트하기 
    //      - 값이 변경될 때마다 감지해야 하므로 이벤트는 'change'
    //      - onChange() 함수 생성 후 minutes input 속성에 이벤트리스너 추가
    //      - event를 이용하여 input에 입력한 값을 출력함
            /*  
                function App() {
                    const [minutes, setMinutes] = React.useState();
                    const onChange = (event) => {
                        console.log(event.target.value);
                    }
                    return (
                        <div>
                            <h1>Super Converter</h1>

                            <label htmlFor="minutes">Minute</label>
                            <input type="number" id="minutes" placeholder="Minutes" value={minutes} onChange={onChange}/>

                            <label htmlFor="hours">Hours</label>
                            <input type="number" id="hours" placeholder="Hours" />

                        </div>
                    );
                }             
            */

    //  2-6. event.target.value로 얻은 값을 minutes에 넣어줌
    //      - 데이터를 업데이트 해야하므로 setState함수인 setMinutes 함수에 넣어줌
        /*  
            function App() {
                const [minutes, setMinutes] = React.useState();
                const onChange = (event) => {
                    setMinutes(event.target.value);
                }
                return (
                    <div>
                        <h1>Super Converter</h1>

                        <label htmlFor="minutes">Minute</label>
                        <input type="number" id="minutes" placeholder="Minutes" value={minutes} onChange={onChange}/>

                        <label htmlFor="hours">Hours</label>
                        <input type="number" id="hours" placeholder="Hours" />

                    </div>
                );
            } 

        */
    
    //  2-7. 잘 작동하는지 확인하기 위해 <h4>태그 생성하여 minutes 값 넣어주기
    //      => <h4>You want to convert {minutes}</h4>


    //  정리
    //  - React.useState()를 이용하면, 데이터를 얻을 수 있고 데이터 업데이트도 할 수 있음
    //  - array 배열로 나오게 되는데, array의 첫번째 item은 value이고, 두번째 item은 value를 수정하고, component를 새로고침할 때 사용하는 함수
    //      => const [minutes, setMinutes] = React.useState();
    //      - 위 코드는 state로 minutes라는 값을 가지고 있는데, 이 값을 input의 value로 넣어줌
    //      - 그렇게 하면 input의 value는 state의 value와 같아짐
    //  - input에 변화가 생길 때마다 그 변화를 감지해야 함. 여기서의 변화란, input에 무언가가 입력되었을 때를 의미함
    //   그렇기에 onChange라는 event를 리스닝 한 것
    //  - input에 변화가 생기면 onChange 함수를 실행시켜줌
    //  - JavaScript처럼 대상을 찾을 때, event를 이용하여 타겟 값을 찾음 (React에서 form을 다루는 방법)
    //      => const onChange = (event) => { console.log(event.target.value); }
    //  - 얻어낸 타겟 값을 setMinutes()함수 안에 넣어서 업데이트 될 때마다, 리렌더링되도록 함
    //  - 잘 작동되는지 확인하기 위해 h4 태그 생성 후 minutes 값 넣고 확인
    //      => 입력한 input의 value값을 바탕으로 Component가 업데이트 됨

}





///* 3.6 - State Practice part One */
/* 분 => 시 */
// 07.converter.html
if(true) {
    //  setState의 default 값을 0으로 설정
    //      => const [minutes, setMinutes] = React.useState(0);
    //  분과 시간을 div로 따로따로 묶어서 정리

    //  복습
    //  1. React.useState()를 이용하여 state 생성함. 생성한 state는 배열임 (인자에 값을 넣으면 그게 데이터의 초기값)
    //      => React.useState(0);

    //  2. 생성한 state 배열의 첫 번째 요소는 데이터이고, 두 번째 요소는 데이터를 수정하기 위한 함수임
    //      => const [minutes, setMinutes] = React.useState(0);

    //  3. input의 value를 state로 연결해줌
    //      - 어디서든 input의 value를 수정이 가능해지므로 유용함
    //      - input 값을 외부에서도 수정해주기 위해서 input의 value를 연결시켜주는 것
    //          => <input type="number" id="minute" placeholder="Minute" value={minutes} />

    //  4. 데이터를 업데이트 해주는 onChange 함수 생성
    //      - 여기서의 데이터는 input에서 리스닝하는 데이터를 의미함. 
    //      - 유저가 input에 값을 입력하면 change 이벤트가 발생함
    //      - input에 onChange 함수를 추가하여 onChange 함수를 실행시킴
    //      - 입력한 값(input value)을 event.target.value를 이용하여 얻게 되고, 데이터인 minutes의 값이 업데이트 됨 (input이 업데이트 됨)
            /* 
                const onChange = (event) => {
                    setMinutes(event.target.value);
                }
                <input type="number" id="minutes" placeholder="Minutes" value={minutes} onChange={onChange}/>
            */
    
    //  5. input의 value가 state이고, 이 state의 default값은 설정해놓은 0 임을 기억하기
    //      - input 태그에 있는 onChange 속성을 제거하고, state에 연결된 input value({minutes})를 남기게 된다면,
    //       input value는 {minutes}이므로 초기값인 0으로만 설정됨. UI에서 값을 변경할 수 없음
    //      - input에 onChange 함수를 지웠기 때문에 input이 키보드 이벤트를 감지한다고 해도 업데이트 되지 않음
    //          => <input type="number" id="minutes" placeholder="Minutes" value={minutes} />

    //  6. setMinutes()는 event가 발생했을 때, 값을 업데이트해주고 UI에 보여줌

}

/* hours 설정 */
if(true) {
    //  1. hours input의 값으로 minutes 넣기 
    //      - state인 minutes를 값으로 리스닝하는 input이 두개가 됨
    //          => <input type="number" id="hours" placeholder="Hours" value={minutes} />
    //      - 이 상태에서 minutes input 부분을 입력하게 되면 hours input도 똑같이 입력됨
    //       hours input의 값을 수정하는 것도 불가능함. onChange event 설정을 하지 않았기 때문

    //  2. hours input의 값을 시간으로 표현하려면 현재 값인 minutes에서 60을 나누어야 함
    //          => <input type="number" id="hours" placeholder="Hours" value={minutes / 60} />

    //  3. state를 setMinutes()에서 바꿔주고 있기 때문에 새로 업데이트 된 값으로 모든 코드가 다시 한번 렌더링 되는 것
    //      - 전체를 렌더링 하는 것이 아닌 hours의 value만 리렌더링 되고 있음

    //  4. hours 값을 반올림
    //          => <input type="number" id="hours" placeholder="Hours" value={Math.round(minutes / 60)} />

    //  5. hours input은 onChange event가 없기 때문에 UI에서 수정이 불가능하다는 점 기억하기

    //  6. Reset 버튼 생성
    //      - 클릭 시 Reset되는 버튼
    //      - state를 리스닝하거나 연결한 모든 것들을 0으로 설정
    //      - reset() 함수를 생성하여 button 태그 props로 추가하기
    //          => const reset = () => setMinutes(0);
    //             <button onClick={reset}>Reset</button>

}





///* 3.7 - State Practice part Two */
/* 시 => 분 */
//  - 단위 변환을 뒤집어보는 함수(flip function) 생성
// 07.converter.html
/* Flip */
if(true) {
    //  1. 변환을 뒤집어주는 버튼인 Fliped 버튼 생성
    //          => <button onClick={onFlip}>Flip</button>

    //  2. state 제어
    //      2-1. 새로운 State 조작하기 위해 새로 생성
    //          - default 값이 false인 state
    //              => const [flipped, setFlipped] = React.useState(false);
    //      2-2. onFlip() 함수 생성
    //          - flipped의 값이 true라면 false 반환
    //          - flipped의 값이 false라면 true 반환
    //              => const onFlip = () => setFlipped(!flipped);
    //      2-3. onFilp() 함수 수정
    //          - 현재 state 값을 넣어주고, 결과는 그 반대를 도출하라고 명령 (더 안전함)
    //              => const onFlip = () => setFlipped((current) => !current);

    //  3. input 속성인 disabled 제어
    //      - state값으로 input을 enabled할지, disabled할지 결정할 수 있음
    //      - flipped의 값이 false이면 hours의 disabled 값이 true여야 하고, minutes의 disabled 값이 false여야 함 
    //       (minutes의 값을 입력 후 hours로 변환해야 하므로 hours의 값을 수정 못하도록 설정) 
    //      - 만약 flip 버튼을 누른다면, Hours input을 사용한다는 의미리고, minutes는 diabled 해줘야 함

    //      - flipped 단순히 true 혹은 false인 변수인데, flip 버튼 클릭 시 onFlip 함수 실행됨
    //      - onFlip 함수는 현재 값을 받아서 그 반대의 값을 내놓는 것
    //      - 새로 생성한 state로 minutes와 hours의 input을 disabled 할 건지, enabled 할 건지 결정할 수 있음

        /*  
            function App() {
                const [minutes, setMinutes] = React.useState(0);
                const [flipped, setFlipped] = React.useState(false);

                const onChange = (event) => {
                    setMinutes(event.target.value);
                }

                const reset = () => setMinutes(0);
                const onFlip = () => setFlipped((current) => !current);

                return (
                    <div>
                        <h1>Super Converter</h1>

                        <div>
                            <label htmlFor="minute">Minutes</label>
                            // <input type="number" id="minute" placeholder="Minute" value={minutes} onChange={onChange} disabled={flipped === true} />
                            <input type="number" id="minute" placeholder="Minute" value={minutes} onChange={onChange} disabled={flipped}/>
                        </div>
                        <div>
                            <label htmlFor="hours">Hours</label>
                            // <input type="number" id="hours" placeholder="Hours" value={Math.round(minutes / 60)} disabled={flipped === false} />
                            <input type="number" id="hours" placeholder="Hours" value={Math.round(minutes / 60)} disabled={!flipped}/>
                        </div>
                        <button onClick={reset}>Reset</button>
                        <button onClick={onFlip}>Flip</button>
                    </div>
                );
            } 
        
        */
}

/* hours input의 change event listener */
if(true) {
    //  1. minutes input에 있는 onChange()를 hours input에 추가함
    //          => <input type="number" id="hours" placeholder="Hours" value={Math.round(minutes / 60)} onChange={onChange} disabled={!flipped}/>

    //  2. hours input의 value 값이 flipped 상태에 따라 값이 바뀌어야 함.
    //      - 즉, minutes input value 값을 입력하고, hours input value 값은 그에 맞게 변환되어야 함
    //      - 삼항연산자를 이용해서 값 설정하기, filpped가 true면 value는 minutes, false면 value는 Math.round(minute / 60)
    //      - 여기서의 minutes은 state에 있는 값을 그대로 보여준다는 의미
    //          => <input type="number" id="hours" placeholder="Hours" value={flipped ? minute : Math.round(minutes / 60)} onChange={onChange} disabled={!flipped}/>

    //  3. minute input의 value 값도 flipped 상태에 따라 값이 바뀌도록 함
    //          => <input type="number" id="minutes" placeholder="Minutes" value={flipped ? (minutes * 60) : minute} onChange={onChange} disabled={!flipped}/>

    //  4. 헷갈리므로 state에 있는 데이터와 함수명 변경 (minutes뿐만 아니라 hours도 사용하기 때문에 헷갈림)
        /*  
            <script type="text/babel">
                const root = document.querySelector('#root');

                function App() {
                    const [amount, setAmount] = React.useState(0);
                    const [flipped, setFlipped] = React.useState(false);

                    const onChange = (event) => {
                        setAmount(event.target.value);
                    }

                    const reset = () => setAmount(0);
                    const onFlip = () => {
                        setFlipped((current) => !current);
                    }

                    return (
                        <div>
                            <h1>Super Converter</h1>

                            <div>
                                <label htmlFor="minutes">Minutes</label>
                                <input type="number" id="minutes" placeholder="Minutes" value={flipped ? (amount * 60) : amount} onChange={onChange} disabled={flipped}/>
                            </div>
                            <div>
                                <label htmlFor="hours">Hours</label>
                                <input type="number" id="hours" placeholder="Hours" value={flipped ? amount : Math.round(amount / 60)} onChange={onChange} disabled={!flipped}/>
                            </div>
                            <button onClick={reset}>Reset</button>
                            <button onClick={onFlip}>Flip</button>
                        </div>
                    );
                } 
                    
                ReactDOM.render(<App />, root); 
            </script>
        */

    //  5. flip 버튼을 클릭할 때마다 변환된 값이 변경되는 문제 발견
    //  - onFlip() 함수에 reset()도 추가
        /*  
            const onFlip = () => {
                reset();
                setFlipped((current) => !current);
            }
        */

}




///* 3.8 - Recap */
// 07.converter.html
if(true) {
    //  1. Component에 초기값이 false인 새로운 state 하나 더 추가했음
    //      - 이 state는 flip 했는지 안했는지를 확인해줌
    //      - flip이란 단위변환을 의미
    //          => const [flipped, setFlipped] = React.useState(false);

    //  2. flipped 값을 반대로 전환시키는 onFlip 함수 생성
    //      - flipped 데이터의 상태에 따라서 input을 disabled 또는 enabled로 바꿔줌
    //      - flipped가 true이면 minutes input은 disabled이며, 시에서 분으로 변환 중인 상태임을 의미
    //       flipped가 false라면 hours input은 disabled이며, 분에서 시로 변환 중인 상태임을 의미
    //          => const onFlip = () => { setFlipped((current) => !current);}
    
    //  3. 유저는 enabled된 input에서 amount를 변경할 수 있음 
    //      - flipped 상태에 따라서 amount 값을 다르게 보여줌
    //      - Minutes input과 Hours input 둘 다 onChange 함수를 가지고 있고, 이 함수는 input에 입력한 값을 state에 전달함
    //      - 두 input 중 enabled 상태엔 input에서 amount state를 수정하는 것
    //      - flipped와 amount 조합하여 사용

    //      3-1. Minutes input
    //          flipped 상태라면 시에서 분으로 단위 변환중이므로 그 값은 (amount * 60)
    //          flipped 상태가 아니라면 input에 입력한 amount 값을 그대로 보여줌
    //              => <input type="number" id="minutes" placeholder="Minutes" value={flipped ? (amount * 60) : amount} onChange={onChange} disabled={flipped}/>
    //      3-2. Hours input
    //          flipped 상태라면 input에 입력한 amount 값을 그대로 보여줌
    //          flipped 상태가 아니라면 분에서 시로 단위 변환중이므로 그 값은 Math.round(amount / 60)
    //              => <input type="number" id="hours" placeholder="Hours" value={flipped ? amount : Math.round(amount / 60)} onChange={onChange} disabled={!flipped}/>

    //  4. 강의 내용에는 flipped라 적혀있는거 inverted로 다 바꾸었는데 헷갈려서 기존 그대로 놔뒀음

    //  5. flipped(inverted) 상태에 따라 버튼에 적혀있는 내용 다르게 보여주기
    //      => <button onClick={onFlip}>{flipped ? "Turn back" : "Invert"}</button>

}





///* 3.9 - Final Practice and Recap */
/* 두 개의 단위 변환기를 만들고, 사용자가 원하는 단위 변환기를 선택할 수 있게 하기 */
// 08.converter_upgrade.html
if(true) {
    //  1. 07.converter.html를, 08.converter_upgrade.html에 복붙하고, App Component를 하나 더 추가 
    //      - 첫번째 App Component의 이름을 MinutesToHours로 변경 (이전까지 만들었던 Component)
    //      - MinutesToHours에서는 <h1>Super Converter</h1> 삭제
    //      - App Components는 여러 변환기들을 고를 수 있게 해주도록 만들어야 함 기존 코드 삭제하여 이 코드부터 시작
        /*  
            <script type="text/babel">
                const root = document.querySelector('#root');

                function MinutesToHours() {
                    const [amount, setAmount] = React.useState(0);
                    const [inverted, setInverted] = React.useState(false);

                    const onChange = (event) => {
                        setAmount(event.target.value);
                    }

                    const reset = () => setAmount(0);
                    const onInvert = () => {
                        reset();
                        setInverted((current) => !current);
                    }

                    return (
                        <div>
                            <div>
                                <label htmlFor="minutes">Minutes</label>
                                <input type="number" id="minutes" placeholder="Minutes" value={inverted ? (amount * 60) : amount} onChange={onChange} disabled={inverted}/>
                            </div>
                            <div>
                                <label htmlFor="hours">Hours</label>
                                <input type="number" id="hours" placeholder="Hours" value={inverted ? amount : Math.round(amount / 60)} onChange={onChange} disabled={!inverted}/>
                            </div>
                            <button onClick={reset}>Reset</button>
                            <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
                        </div>
                    );
                } 

                function App() {
                    return (
                        <div>
                            <h1>Super Converter</h1>
                        </div>
                    );
                } 
                    
                ReactDOM.render(<App />, root); 
            </script>
        */

    //  2. App Component안에 다른 Component 렌더링 해보기 (분할 정복; Divide and Conquer)
    //      - Component안에 또 다른 Component를 렌더링 할 수 있다는 특징 이용해보기
        /*  
            function App() {
                return (
                    <div>
                        <h1>Super Converter</h1>
                        <MinutesToHours />
                    </div>
                );
            } 
        */
    
    //  3. KmToMiles Component 새로 생성
        /*  
            function KmToMiles() {
                return <h3>KM 2 M</h3>
            }
        */

    //  4. App Component안에 전환 스위치 생성
    //      - App Component가 시/분 변환기에서 km/miles 변환기로 전환할 수 있게 하도록 하기
    //      - 아래척럼 두 개의 컴포넌트를 렌더링되게 하지 말고, 선택시 하나의 컴포넌트만 렌더링되게 하기
        /*  
            function App() {
                return (
                    <div>
                        <h1>Super Converter</h1>
                        <MinutesToHours />
                        <KmToMiles />
                    </div>
                );
            } 
        */

    //  5. select 함수를 만들어서 원하는 단위 변환을 선택(select) 할 수 있도록 함
    //      - 3개의 Component 중 하나인 App Component은 ReactDOM.render(<App />, root); 를 이용해서 root div를 그려주는 역할을 담당함 (가장 중요한 역할)
    //      - 이 App Component는 그 안에 다른 2개의 Component들을 렌더링하고 있음 (MinutesToHours Component, KmToMiles Component)
    //      5-1. App Component가 state를 가지도록 설정함
    //          => const[index, setIndex] = React.useState(0);
    //      5-2. App Component안에 있는 두개의 Component를 잠시 숨김
        /*  
            function App() {
                const [index, setIndex] = React.useState(0);

                return (
                    <div>
                        <h1>Super Converter</h1>
                    </div>
                );
            } 
        */
    //      5-3. HTML 태그인 select 태그 사용하기
    //          - value값을 index 값으로 설정한 option 태그를 select 태그 안에서 사용함
        /*  
            function App() {
                const [index, setIndex] = React.useState(0);
                return (
                    <div>
                        <h1>Super Converter</h1>
                        <select>
                            <option value="0">Minutes & Hours</option>    
                            <option value="1">Km & Miles</option>    
                        </select>
                    </div>
                );
            } 
        */
    //      5-4. select안에 event를 리스닝 하기
    //          - onSelect() 함수 생성하고, select 태그 속성에 생성한 함수를 event listener
    //          - 선택한 option의 값 알아내기
        /*  
            function App() {
                const [index, setIndex] = React.useState(0);
                const onSelect = (event) => {
                    console.log(event.target.value);
                };
                return (
                    <div>
                        <h1>Super Converter</h1>
                        <select onChange={onSelect}>
                            <option value="0">Minutes & Hours</option>    
                            <option value="1">Km & Miles</option>    
                        </select>
                    </div>
                );
            } 
        */
    //      5-5. 선택한 option의 value를 state 안에 넣기
    //          - onSelect 함수에서 select 태그 안에 있는 option 태그의 value를 setIndex 처리
    //          - 나중에 수정할 경우를 대비해서 select 태그에도 value를 index로 설정 
        /*  
            function App() {
                const [index, setIndex] = React.useState(0);
                const onSelect = (event) => {
                    setIndex(event.target.value);
                };
                return (
                    <div>
                        <h1>Super Converter</h1>
                        <select value={index} onChange={onSelect}>
                            <option value="0">Minutes & Hours</option>    
                            <option value="1">Km & Miles</option>    
                        </select>
                    </div>
                );
            } 
        */
    

    //  6. 초기값을 숫자 0이 아닌 문자열 "0"으로 수정
    //      => const [index, setIndex] = React.useState("0");


    //  7. 두 개의 Component 중에서 어떤 걸 보여줄 지 선택 (Component 안에 JSX를 사용해서 보여줌)
    //      - index의 값이 "0"이라면 MinutesToHours Component를 보여주고, 그게 아니라면 null
    //      - index의 값이 "1"이라면 KmToMiles Component를 보여주고, 그게 아니라면 null
    //      - 이는 index의 변화를 리스닝 해주고 있는 것
        /*  
            function App() {
                const [index, setIndex] = React.useState("0");
                const onSelect = (event) => {
                    setIndex(event.target.value);
                };
                return (
                    <div>
                        <h1>Super Converter</h1>
                        <select value={index} onChange={onSelect}>
                            <option value="0">Minutes & Hours</option>    
                            <option value="1">Km & Miles</option>    
                        </select>
                        <hr />
                        {index === "0" ? <MinutesToHours /> : null}
                        {index === "1" ? <KmToMiles /> : null}
                    </div>
                );
            } 
        */
    //      - 이처럼 input이 있고 그 값이 바뀌는 변화가 일어나면 state가 업데이트 되고, 보여지는 Component도 바뀌게 하기
    //      - select의 change event 리스닝은 유저가 option을 선택하면, setIndex를 이용해서 그 숫자를 state안에 넣음
    //      - 데이터를 수정하기 위해 modifier 함수를 사용한다면, modifier 함수를 사용할 떄, Component는 새로운 데이터와 함께 새로고침 된다는 것을 기억하기


    //  8. select 태그 안에 처음으로 보여질 option 추가하고, 초기값도 변경하기
    //      - state를 변화시킬 때 모든게 새로고침 된다는 것을 기억하기
    //      - React는 리렌더링이 필요한 부분을 리렌더링 해줌
    //      - state를 변화시키면 App Component에서 return되는 부분이 새로운 데이터와 함께 다시 실행됨
    /*  
        <script type="text/babel">
            const root = document.querySelector('#root');

            function MinutesToHours() {
                const [amount, setAmount] = React.useState(0);
                const [inverted, setInverted] = React.useState(false);

                const onChange = (event) => {
                    setAmount(event.target.value);
                }

                const reset = () => setAmount(0);
                const onInvert = () => {
                    reset();
                    setInverted((current) => !current);
                }

                return (
                    <div>
                        <div>
                            <label htmlFor="minutes">Minutes</label>
                            <input type="number" id="minutes" placeholder="Minutes" value={inverted ? (amount * 60) : amount} onChange={onChange} disabled={inverted}/>
                        </div>
                        <div>
                            <label htmlFor="hours">Hours</label>
                            <input type="number" id="hours" placeholder="Hours" value={inverted ? amount : Math.round(amount / 60)} onChange={onChange} disabled={!inverted}/>
                        </div>
                        <button onClick={reset}>Reset</button>
                        <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
                    </div>
                );
            } 
            function KmToMiles() {
                return <h3>KM 2 M</h3>
            }

            function App() {
                const [index, setIndex] = React.useState("xx");
                const onSelect = (event) => {
                    setIndex(event.target.value);
                };
                return (
                    <div>
                        <h1>Super Converter</h1>
                        <select value={index} onChange={onSelect}>
                            <option value="xx">Select your units</option>    
                            <option value="0">Minutes & Hours</option>    
                            <option value="1">Km & Miles</option>    
                        </select>
                        <hr />

                        {index === "xx" ? "Pleas select your units" : null}
                        {index === "0" ? <MinutesToHours /> : null}
                        {index === "1" ? <KmToMiles /> : null}
                    </div>
                );
            } 
                
            ReactDOM.render(<App />, root); 
        </script>
    */
}

/* Km & Miles Component 생성 */
if(true) {
    /*  
        <script type="text/babel">
            const root = document.querySelector('#root');

            function MinutesToHours() {
                const [amount, setAmount] = React.useState(0);
                const [inverted, setInverted] = React.useState(false);

                const onChange = (event) => {
                    setAmount(event.target.value);
                }

                const reset = () => setAmount(0);
                const onInvert = () => {
                    reset();
                    setInverted((current) => !current);
                }

                return (
                    <div>
                        <div>
                            <label htmlFor="minutes">Minutes</label>
                            <input type="number" id="minutes" placeholder="Minutes" value={inverted ? (amount * 60) : amount} onChange={onChange} disabled={inverted}/>
                        </div>
                        <div>
                            <label htmlFor="hours">Hours</label>
                            <input type="number" id="hours" placeholder="Hours" value={inverted ? amount : Math.round(amount / 60)} onChange={onChange} disabled={!inverted}/>
                        </div>
                        <button onClick={reset}>Reset</button>
                        <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
                    </div>
                );
            } 
            function KmToMiles() {
                const [amount, setAmount] = React.useState(0);
                const [inverted, setInverted] = React.useState(false);

                const onChange = (event) => setAmount(event.target.value);
                const reset = () => setAmount(0);
                const onInvert = () => {
                    reset();
                    setInverted((current) => !current);
                }

                return (
                    <div>
                        <div>
                            <label htmlFor="km">Km</label>
                            <input type="number" id="km" placeholder="Km" value={inverted ? (amount / 0.62137) : amount} onChange={onChange} disabled={inverted}/>
                        </div>    
                        <div>
                            <label htmlFor="miles">Miles</label>
                            <input type="number" id="miles" placeholder="miles" value={inverted ? amount : (amount * 0.62137)} onChange={onChange} disabled={!inverted}/>
                        </div>
                        <button onClick={reset}>Reset</button>
                        <button onClick={onInvert}>{inverted ? "Km => Miles" : "Miles => KM"}</button>
                    </div>
                );
            }

            function App() {
                const [index, setIndex] = React.useState("xx");
                const onSelect = (event) => {
                    setIndex(event.target.value);
                };
                return (
                    <div>
                        <h1>Super Converter</h1>
                        <select value={index} onChange={onSelect}>
                            <option value="xx">Select your units</option>    
                            <option value="0">Minutes & Hours</option>    
                            <option value="1">Km & Miles</option>    
                        </select>
                        <hr />

                        {index === "xx" ? "Pleas select your units" : null}
                        {index === "0" ? <MinutesToHours /> : null}
                        {index === "1" ? <KmToMiles /> : null}
                    </div>
                );
            } 
                
            ReactDOM.render(<App />, root); 
        </script>
    */
}
