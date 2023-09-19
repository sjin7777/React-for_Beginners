'use strict';

/* react-for-beginners-basic */






///* 4.0 - Props */
/* Props : 부모 Component로부터 자식 Component에 데이터를 보낼 수 있게 해주는 방법 */
// 09.react_props1.html
if(true) {
    // 지금까지 만들어본 MinutesToHour Componet와 KmToMiles Component들은 부모 Component인 App Component의 데이터를 필요로 하지 않음
    // 두 자식 Component는 독립적으로 존재할 수 있음
    // 그렇기에 부모 Component로부터 자식 Component로 데이터를 보내는 연습해보기

    //  1. 기존 코드 거의 다 지우고 여기서부터 시작
        /*  
            <script type="text/babel">
                const root = document.querySelector('#root');

                function App() {
                    return <div></div>;
                }

                ReactDOM.render(<App />, root); 
            </script>
        */

    //  Props를 이해하기 위해서는 Props로 해결이 가능하게 될 문제들을 직접 겪어봐야 함
    //      - Component는 JSX를 반환하는 함수라고 생각하기
    

    //  2. 알고 있던 방법대로 각각의 버튼마다 Component(함수형 Component) 생성 후 App Component에 넣어서 렌더링
    //      2-1. SaveBtn (저장 버튼)
            /*  
                function SaveBtn() {
                    return <button>Save Changes</button>
                }

                function App() {
                    return (
                        <div>
                            <SaveBtn />
                        </div>
                    );
                }
            */
    //      2-2. ConfirmBtn (확인 버튼)
            /*  
                function SaveBtn() {
                    return <button>Save Changes</button>
                }
                function ConfirmBtn() {
                    return <button>Confirm</button>
                } 

                function App() {
                    return (
                        <div>
                            <SaveBtn />
                            <ConfirmBtn />
                        </div>
                    );
                }
            */


    //  3. button 태그의 style 변경하기
    //      - JavaScript Object 형식 사용
            /*  
                function SaveBtn() {
                    return (
                        <button style={{
                            backgroundColor: 'royalblue',
                            color: 'white',
                            padding: '10px 20px',
                            border: 0,
                            borderRadius: 10
                        }}>
                        Save Changes
                        </button>
                    );
                }
                function ConfirmBtn() {
                    return (
                        <button style={{
                            backgroundColor: 'royalblue',
                            color: 'white',
                            padding: '10px 20px',
                            border: 0,
                            borderRadius: 10
                        }}>
                        Confirm
                        </button>
                    );
                } 
            */
    //      - button 태그들마다 style을 복붙하는 것 대신에 보다 좀 더 설정이 가능한 Component가 필요


    //  4. 두 버튼 Component를 제거하고, Btn이라는 이름의 Component 생성
        /*  
            function Btn() {
                return (
                    <button style={{
                        backgroundColor: 'royalblue',
                        color: 'white',
                        padding: '10px 20px',
                        border: 0,
                        borderRadius: 10
                    }}>
                    Button
                    </button>
                );
            }

            function App() {
                return (
                    <div>
                        <Btn />
                        <Btn />
                    </div>
                );
            }
        */
    //      - 두 버튼의 style은 똑같으나 두 버튼에 보이는 text 내용이 달랐으면 좋겠음 


    //  5. syntax(구문)을 이용하여 Component에 Props를 추가하여 데이터를 전달하기 
    //      - Btn Component에 'text'(이름은 마음대로 설정 가능) 라는 정보를 전달하기 ('text'를 Btn Component에게 전달)
    //      - 이를 설정하면 원하는 props만 변경하면서 Component를 재사용할 수 있음
    //      - 첫번째 버튼의 'text'의 value(값)은 'Save Changes'
    //        두번째 버튼의 'text'의 value(값)은 'Confirm'으로 설정
        /*  
            function App() {
                return (
                    <div>
                        <Btn text="Save Changes" />
                        <Btn text="Confirm" />
                    </div>
                );
            }
        */

    //      - 직접 만들고 사용하는 Component들은 만들때 괄호로 argument(인자)를 받음
    //       대부분의 사람들은 이를 'props'라고 부름
    //      - props는 Component로부터 전달 받는 Properties
    //      - 즉, Btn() 함수를 불러서 text 인자를 보내는 것과 같음 => Btn({text: 'Save Changes'}), Btn({text: 'Confirm'}) 
    //       Btn()은 함수이므로 어떤 prop이든 Btn Component에 보내면, props들은 Btn 함수의 첫번째 argument(인자) 속으로 들어가게 됨
    //      - Btn() 함수를 부르고 있다고 생각하기 

    //  6. Btn Component가 'text'를 사용 
    //      - props 정보를 Btn() 함수에 전송
            /*  
                function Btn(props) {
                    return (
                        <button style={{
                            backgroundColor: 'royalblue',
                            color: 'white',
                            padding: '10px 20px',
                            border: 0,
                            borderRadius: 10
                        }}>
                        Button
                        </button>
                    );
                }
            */
    
    //  7. React가 렌더링하는 부분에서 실제로 하는 작업은 Btn() 함수를 호출하여 렌더링할 때 넣어준 것들을 첫번째 인자로서 넣어줌
    //           => <Btn text="Save Changes" />
    //      - Btn( {<text:"Save Changes"} ) 위 코드가 이런 식으로 되어있다고 생각하기
    //      - React는 자동으로 렌더링하는 곳에 넣는 모든 props들을 모조리 오브젝트 형태로, 함수의 첫번째 argument로 넣어짐 
    //      - 두번째 이자는 없음. props는 첫 번째이자 유일한 인자이며, Component가 전달 받는 유일한 인자인걸 기억하기
    //      - Props는 렌더링하는 곳에서 보낸 모든 것들을 가지고 있는 오브젝트임
    //      - props는 원하면 여러개 넣어도 됨
    //          => <Btn text="Save Changes" x={false} />


    //  8. 렌더링한 곳에서 입력한 props 값(커스텀 Btn Component의 props값)을 Component에서 사용해보기
    //      - 'text'라는 key를 가지고 있음
    //      - 같은 Btn Component를 사용하지만, App Component에 의해 설정되고 있음
    //      - 단 하나의 Component가 있지만, UI가 다르도록 (재사용이 가능하도록) 만들었음
        /*  
            function Btn(props) {
                return (
                    <button style={{
                        backgroundColor: 'royalblue',
                        color: 'white',
                        padding: '10px 20px',
                        border: 0,
                        borderRadius: 10
                    }}>
                    {props.text}
                    </button>
                );
            }
            function App() {
                return (
                    <div>
                        <Btn text="Save Change"/>
                        <Btn text="Confirm"/>
                    </div>
                );
            }
        */
    
    //      - 위 코드의 지름길
    //      - property를 Object로부터 꺼내는 것. props는 object이기 때문에 props안에 'text'인 key가 있다는 사실을 알고 있어서 사용 가능함
    //      - 즉, Btn 함수 Component의 첫 번째 인자인 Object로부터 'text'를 받아내고 있는 것
    //      - 대부분의 사람들은 Component 인자에 props를 직접 쓰지 않고 중괄호에 오브젝트에 있는 key들을 써서 필요한 것을 받아내서 사용 => 인자: {text}
    //      - 마찬가지로, 버튼 내용에도 {text}만 사용
        /*  
            function Btn({text}}) {
                return (
                    <button style={{
                        backgroundColor: 'royalblue',
                        color: 'white',
                        padding: '10px 20px',
                        border: 0,
                        borderRadius: 10
                    }}>
                    {text}
                    </button>
                );
            }
            function App() {
                return (
                    <div>
                        <Btn text="Save Change"/>
                        <Btn text="Confirm"/>
                    </div>
                );
            }
        */


    //  9. 새로운 prop 추가해보기 
    //      9-1. App Component에서 Btn Component에 'big' props 추가
        /*  
            function App() {
                return (
                    <div>
                        <Btn text="Save Change" big={true}/>
                        <Btn text="Confirm"/>
                    </div>
                );
            }
        */
    //      9-2. Btn Component 인자에 추가
    //          - Btn Component안에 console.log(text, big)로 로그 찍으면
    //           첫번쨰 Btn의 big은 true, 두번째 Btn의 big은 undefined로 나옴
        /*  
            function Btn({text, big}) {
                console.log(text, big);
                return (
                    <button style={{
                        backgroundColor: 'royalblue',
                        color: 'white',
                        padding: '10px 20px',
                        border: 0,
                        borderRadius: 10
                    }}>
                    {text}
                    </button>
                );
            }
        */
    //      9-3. big이 존재하는 경우 fontSize 18, 존재하지 않는 경우 16으로 설정해보기
        /*  
            function Btn({text, big}) {
                return (
                    <button style={{
                        backgroundColor: 'royalblue',
                        color: 'white',
                        padding: '10px 20px',
                        border: 0,
                        borderRadius: 10,
                        fontSize: big ? 18 : 16
                    }}>
                    {text}
                    </button>
                );
            }
        */

}




///* 4.1 - Memo */
/* 부모 Component가 state(상태)를 변경할 때 자식 Component에 발생하는 일 */
/* Btn에 onClick function 달아주기 */
//  - onClick function은 App Component에 있는 어떠한 state를 바꾸어줄 것

// 10.react_props2.html
if(true) {
    /*  
        <script type="text/babel">
            const root = document.querySelector('#root');
            
            function Btn({text}) {
                return (
                    <button 
                        style={{
                            backgroundColor: 'royalblue',
                            color: 'white',
                            padding: '10px 20px',
                            border: 0,
                            borderRadius: 10,
                        }}>
                        {text}
                    </button>
                );
            }
            function App() {
                return (
                    <div>
                        <Btn text="Save Change"/>
                        <Btn text="Confirm"/>
                    </div>
                );
            }

            ReactDOM.render(<App />, root); 
        </script>
    */
    
    //  1. App Component에 새로운 state 생성 (초기값을 "Save Change"로 설정)
    //      => const [value, setValue] = React.useState("Save Change");

    //  2. App Component에서 첫번째 커스텀 Btn Component의 'text'를 state에 연결
    //      => const [value, setValue] = React.useState("Save Change");
    //         <Btn text={value} />

    //  3. 버튼 클릭시 실행되는 changeValue function 생성
    //      - 클릭 시 값을 'Revert Changes'로 재설정
    //          => const changeValue = () => setValue("Revert Changes");

    //  4. 3에서 생성한 함수를 App Component에서 첫번째 커스텀 Btn Component에 onClick으로 추가
    //      - 커스텀 Btn Component로 들어가는 prop은 실제 Event Listener가 아님!
    //      - onClick은 prop의 이름일 뿐이고, Btn Component 안으로 전달되고 있을 뿐임 
    //       (단지 하나의 prop일뿐, HTML 요소인 button 태그를 위한 Event Listener가 아님)
    //          => <Btn text={value} onClick={changeValue}/>
    //      - 커스텀 Btn Component가 아닌 Btn Component에서 HTML 요소인 button 태그의 속성인 onClick에 넣어야 Event Listener임!
    //          => 예시) function Btn({text,changeValue}) { return (<button onClick={changeValue} ... ></button>) };

    //  5. 헷갈리지 않도록 커스텀 Btn Component에 전달하는 prop인 onClick의 이름을 changeValue로 변경하고,
    //     Btn Component에서 HTML 요소 button 태그의 속성 onClick에 넣어서 Event Listener 추가
    //      - 커스텀 Btn Coponent는 changeValue라는 prop을 갖게 되고, 
    //        changeValue라는 onClick 리스너를 가지게 됨
        /*  
            <script type="text/babel">
                const root = document.querySelector('#root');
                
                function Btn({text, changeValue}) {
                    return (
                        <button 
                            onClick={changeValue}
                            style={{
                                backgroundColor: 'royalblue',
                                color: 'white',
                                padding: '10px 20px',
                                border: 0,
                                borderRadius: 10,
                            }}>
                        {text}
                        </button>
                    );
                }
                function App() {
                    const [value, setValue] = React.useState("Save Change");
                    const changeValue = () => setValue("Revert Changes");

                    return (
                        <div>
                            <Btn text={value} changeValue={changeValue}/>
                            <Btn text="Confirm"/>
                        </div>
                    );
                }

                ReactDOM.render(<App />, root); 
            </script>
        */

    //  6. 'Save Change' 버튼 클릭 시 버튼 내용이 'Revert Changes'로 변경되는지 확인
    //      - 커스텀 Component의 prop에 넣는다고 해서, 실제 Component return 안으로는 들어가지 않음을 기억하기!
    //      - 실제 Component 인자에 직접 넣어서 HTML 태그의 요소 안에 있는 속성의 값으로 사용하기
    //      - 커스텀 Component의 prop의 이름을 변경하면, 실제 Component에서 사용한 prop의 이름들도 다 변경해주는걸 잊지말기

    //  7. 다시 prop의 이름인 changeValue 를 onClick으로 변경
        /*  
            <script type="text/babel">
                const root = document.querySelector('#root');
                
                function Btn({text, onClick}) {
                    return (
                        <button 
                            onClick={onClick}
                            style={{
                                backgroundColor: 'royalblue',
                                color: 'white',
                                padding: '10px 20px',
                                border: 0,
                                borderRadius: 10,
                            }}>
                            {text}
                        </button>
                    );
                }
                function App() {
                    const [value, setValue] = React.useState("Save Change");
                    const changeValue = () => setValue("Revert Changes");

                    return (
                        <div>
                            <Btn text={value} onClick={changeValue}/>
                            <Btn text="Confirm"/>
                        </div>
                    );
                }

                ReactDOM.render(<App />, root); 
            </script>
        */


}

/* React.memo() */
// 11.react_memo.html
if(true) {
    //  1. 언제 렌더링 되는지 확인하려면, Component 안에 console.log(props)로 찍어보기
    //      => function Btn({text}) {console.log(text, 'was rendered') return (...);}
    //          - 버튼 안에 있는 내용들이 차례대로 나옴 'Save Change was rendered' 'Confirm was rendered'
    
    //  2. 버튼을 클릭했을 경우에는 button태그에 있는 onClick 이벤트 리스너에 담긴 props onClick 함수가 불러와짐(function call)
    //      - App Component에서 설정한 커스텀 Btn Component의 prop인 onClick의 값 changeValue 함수가 불러와지는 것!
    //      - onClick 함수가 call될 때, value가 재설정됨
    //          => const changeValue = () => setValue('Revert Changes')

    //  3. value가 변경되면 리렌더링됨
    //      - 데이터를 수정하는 함수가 불러와질 때마다 다시 화면이 그려짐

    //  4. 버튼 클릭
    //      => function Btn({text}) {console.log(text, 'was rendered') return (...);}
    //          - 버튼 안에 있는 내용들이 차례대로 나옴 'Revert Changes was rendered' 'Confirm was rendered'

    //  5. 부모 Component인 App Component의 state(상태)가 변경될 때마다 App Component안에 있는 return 값들을 새로 그려줌
    //      - App Component안에 있는 changeValue 함수는 App Component의 자식 Component들이 이용하여 상태를 바꿔줄 수 있는 함수
    
    //  6. Component안에 있는 console.log(props)로 찍어보았을 떄, 
    //    첫 화면 뜰 때 'Save Change was rendered' 'Confirm was rendered' 이 두개가 나오고,
    //    첫번째 버튼 클릭 시에는 'Revert Changes was rendered' 'Confirm was rendered' 이 두개가 나옴 
    //      -  첫번째 버튼 클릭 시에 버튼 내용이 변경되는 첫번째 버튼의 값이 찍히는건 맞지만 (다시 그리기 때문에), 
    //        두번째 버튼의 내용은 변경되지 않았는데도 찍힘 (다시 그릴 필요가 없음)
    //      - Component state가 바뀐다면 render가 됨
    //       부모인 App이 state를 변경하고 있고, 그렇기에 모든 자식들이 다시 그려짐

    //  7. 두번째 Btn Component가 다시 그려지는 것을 막으려면
    //      - React Memo는 props가 변경되지 않는 한에서, Component를 다시 그릴지 말지를 결정할 수 있음
    //      - 첫번째 버튼은 내용이 변경되므로 props가 변경되기 때문에, 다시 그려야 함
    //       첫번째 버튼의 props는 state와 연결되어 있기 때문에 state가 변경된다면 props가 바뀌기 때문에 다시 그리기!
    //      - changeValue는 state를 바꿀거고, 그건 리렌더링을 발생시켜야만 함
    //          => <Btn text={value} onClick={changeValue}/>
    //      - 두번째 버튼의 props는 state와 연결되어 있기 때문에 props가 변경되지 않으므로 다시 그릴지 말지를 결정할 수 있음
    //          => <Btn text="Confirm"/>

    //  8. React.memo()를 이용해서 다시 그려지는 것을 막기
    //      - MemorizedBtn은 memorized version의 Btn이 됨
    //          => const MemorizedBtn = React.memo(Btn)
    //      - App Component 안에 있는 커스텀 Btn Componentd의 이름을 MemorizedBtn로 변경해줌
            /*  
                function App() {
                    const [value, setValue] = React.useState("Save Change");
                    const changeValue = () => setValue("Revert Changes");

                    return (
                        <div>
                            <MemorizedBtn text={value} onClick={changeValue}/>
                            <MemorizedBtn text="Confirm"/>
                        </div>
                    );
                }
            */
    
    //  9. 첫 화면 시에 찍히는 로그 확인해보고, 첫번째 버튼 클릭 시에도 찍히는 로그 확인
    //      - 첫 화면 시 'Save Change was rendered' 'Confirm was rendered' 두개 찍히고
    //      - 첫번째 버튼 클릭 시 'Revert Changes was rendered'만 찍힘


    //  즉, 부모 Component에 어떤 state라도 변경이 있으면, 모든 자식들은 리렌더링됨(다시 그려짐)
    //      - 이것은 나중에 애플리케이션이 느려지는 원인이 될 수 있음
    //      - 그렇기에 React.memo()를 이용해서 Component들이 다시 그려지는 것을 컨트롤할 수 있음
    //       (props가 변경되지 않는다면 다시 그릴 필요 없고, props가 변경되면 반드시 다시 그려야 함)

}





///* 4.2 - Prop Types */
/* 커스텀 Component props를 추가하기전에, 해당 Component type 설정하기 */
// 12.react_prop_types.html
if(true) {
    /*  
        <script type="text/babel">
            const root = document.querySelector('#root');
            
            function Btn({text}) {
                return (
                    <button 
                        style={{
                            backgroundColor: 'royalblue',
                            color: 'white',
                            padding: '10px 20px',
                            border: 0,
                            borderRadius: 10,
                        }}>
                        {text}
                    </button>
                );
            }
            
            function App() {
                return (
                    <div>
                        <Btn text="Save Changes" />
                    </div>
                );
            }

            ReactDOM.render(<App />, root); 
        </script>
    */
    //  1. 커스텀 Btn Component props에 fontSize 추가하고 값 할당
    //      => <Btn text="Save Changes" fontSize={18}/>

    //  2. Btn Component에 인자로 fontSize를 받아오고, Btn Component 안에 있는 있는 Html 요소인 button 태그 style 속성에 추가 
    //      => 'fontSize: fontSize' 이렇게 key와 value가 같으면 한번만 사용해도 됨
        /*  
            function Btn({text, fontSize}) {
                return (
                    <button 
                        style={{
                            backgroundColor: 'royalblue',
                            color: 'white',
                            padding: '10px 20px',
                            border: 0,
                            borderRadius: 10,
                            fontSize,
                        }}>
                        {text}
                    </button>
                );
            }
        */
    
    //  3. 만약 fontSize의 값으로 string이 들어갈 경우, 에러가 나게 됨
    //    코드 상에서는 에러가 나지 않지만, Component 내에서는 에러임. 원하는 대로 작동을 할 수 없기 때문
    //         => <Btn text={14} fontSize={"Continue"} />
    
    //  4. PropTypes 패키지 설치
    //      - PropTypes 패키지는 어떤 타입의 prop을 받고 있는지 체크해줌
    //      - React가 커스텀 Component props의 값이 설정한 타입과 다른 경우에 에러를 띄워줌
    //      - script 태그쪽에 URL 복붙
    //          => https://unpkg.com/prop-types@15.7.2/prop-types.js
    //          => <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>

    //  5. React에게 props의 타입이 무엇인지 알려주기
    //      - 4에서 PropType을 설치했으므로 Component 이름을 이용해서 propTypes Object에 접근할 수 있음
    //      - propTypes는 각기 다른 타입들을 검사하는 것이 가능함
    //      - object안에 'key: value' 형식으로 'prop 이름: propTypes.prop type' 작성하기
            /*  
                Btn.propTypes = {
                    text: PropTypes.string,
                    fontSize: PropTypes.number,
                }
            */

    //  6. App Component안에 있는 두번째 커스텀 Btn Component로 인하여 에러가 나야 하는데 에러가 안 남 
    //      - 댓글보고 설치했던 react script를 변경함
    //      - 이전 script: <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    //      - 이후 script: <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
    //      - 콘솔에 에러 찍히는거 확인
    //          => Warning: Failed prop type: Invalid prop `text` of type `number` supplied to `Btn`, expected `string`.at Btn (<anonymous>:5:19)
    //          => Warning: Failed prop type: Invalid prop `fontSize` of type `string` supplied to `Btn`, expected `number`.at Btn (<anonymous>:5:19)

    //  7. 에러가 발생하도록 만들었던 두번째 커스텀 Btn Component를 타입에 맞게 수정
    //      - 에러가 나지 않음을 확인
        /*  
            function App() {
                return (
                    <div>
                        <Btn text="Save Changes" fontSize={18}/>
                        <Btn text={"Continue"} fontSize={14} />
                    </div>
                );
            }
        */

    //  8. 만약, 커스텀 Component에서 원하는 prop들을 무조건 가지고 render 해야한다고 설정하려면 
    //    propType을 사용할 때, isRequired 옵션을 추가함
    //      - isRequired 옵션이 추가된 prop은 반드시 render 해야함 
    //      - isRequired 옵션을 추가했는데, 해당 prop을 render하지 않는 경우 에러 발생
    //          => Warning: Failed prop type: The prop `fontSize` is marked as required in `Btn`, but its value is `undefined`.at Btn (<anonymous>:5:19)
        /*  
            Btn.propTypes = {
                text: PropTypes.string,
                fontSize: PropTypes.number.isRequired,
            }
            
            function App() {
                return (
                    <div>
                        <Btn text="Save Changes" fontSize={18}/>
                        <Btn text={"Continue"} fontSize={14} />
                        <Btn text={"GO"} />
                    </div>
                );
            }
        */

    //  9. props중 text만 필수, fontSize는 필수 아님으로 설정
    /*  
        Btn.propTypes = {
            text: PropTypes.string.isRequired,
            fontSize: PropTypes.number,
        }
    */

    //  10. Component의 인자의 기본값 설정 가능(이건 React가 아닌 JS문법)
    //      - 정의되지 않은 변수에 관한 기본값 주기
    //      - 만약, fontSize가 undefined(존재하지 않는다면)이면, 기본값을 16으로 주기
    //      - 이는 세번째 커스텀 Btn Component에서만 발생됨. fontSize가 prop으로서 설정되어 있지 않기 때문
    //          => function Btn({text, fontSize = 16}) {}
    //            <Btn text={"GO"} />
        /*  
            <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            
            <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
            <script type="text/babel">
                const root = document.querySelector('#root');
                
                function Btn({text, fontSize = 16}) {
                    return (
                        <button 
                            style={{
                                backgroundColor: 'royalblue',
                                color: 'white',
                                padding: '10px 20px',
                                border: 0,
                                borderRadius: 10,
                                fontSize,
                            }}>
                            {text}
                        </button>
                    );
                }

                Btn.propTypes = {
                    text: PropTypes.string.isRequired,
                    fontSize: PropTypes.number,
                }
                
                function App() {
                    return (
                        <div>
                            <Btn text="Save Changes" fontSize={18}/>
                            <Btn text={"Continue"} fontSize={14} />
                            <Btn text={"GO"} />
                        </div>
                    );
                }

                ReactDOM.render(<App />, root); 
            </script>
        */

}





///* 4.3 - Recap */
if(true) {
    //  1. Btn Component에 기본 스타일 설정하고, 버튼들은 이 Component를 사용할 때, fontSize와 text만 변경하여 사용하기
        /*  
            function Btn({text, fontSize = 16}) {
                return (
                    <button 
                        style={{
                            backgroundColor: 'royalblue',
                            color: 'white',
                            padding: '10px 20px',
                            border: 0,
                            borderRadius: 10,
                            fontSize,
                        }}>
                        {text}
                    </button>
                );
            }
        */
    
    //  2. Component들을 여러개 만드는 것이 아닌 prop들을 받을 수 있는 커스텀 Btn Component들을 만듦
    //      - prop들은 인자를 사용하며, Component에 데이터를 보내기 위한 통로일뿐임
    //      - App Component에서 설정된 커스텀 Btn Component prop들은 
    //       렌더링되고 있는 Btn Component의 부모인 App Component로부터 전달되고 있음
    //      - 커스텀 Btn Component들은 text와 fontSize라는 두개의 prop을 받고 있음
        /*  
            function App() {
                return (
                    <div>
                        <Btn text="Save Changes" fontSize={18}/>
                        <Btn text={"Continue"} fontSize={14} />
                        <Btn text={"GO"} />
                    </div>
                );
            }
        */

    //  3. 커스텀 Btn Component에서 설정한 prop은 실제 Btn Component 함수의 첫번째 인자 안에서 접근이 가능함 
    //      - 첫번쨰 인자 안에서, 전달된 모든 prop들을 하나의 Object로서 받는다는 의미
    //      - 커스텀 Component에서 설정한 prop의 이름과 실제 Component 함수가 받을 prop의 이름은 동일해야 함
    //      - 두 개의 방법중 아무거나 사용
    //          방법1. 인자에 props를 넣을 경우 
    //              => {props.text}, {props.fontSize}로 사용
    //              => function Btn(props) {.... {props.text}..... {props.fontSize}...};
            /*  
                function Btn(props) {
                    return (
                        <button 
                            style={{
                                backgroundColor: 'royalblue',
                                color: 'white',
                                padding: '10px 20px',
                                border: 0,
                                borderRadius: 10,
                                fontSize: props.fontSize,
                            }}>
                            {props.text}
                        </button>
                    );
                }
            */
    //          방법2. 인자에 {text, fontSize}를 넣을 경우
    //              => {text}, {fontSize}로 사용
    //              => function Btn({text, fontSize}) {.... {text}..... {fontSize}...};
            /*  
                function Btn({text, fontSize}) {
                    return (
                        <button 
                            style={{
                                backgroundColor: 'royalblue',
                                color: 'white',
                                padding: '10px 20px',
                                border: 0,
                                borderRadius: 10,
                                fontSize,
                            }}>
                            {text}
                        </button>
                    );
                }
            */

    //  4. propType 패키지 설치하여 이용
    //      - 어떤 prop을 받는지 검사함
    //      - 에러가 나면 콘솔로그로 알려줌 (타입 에러일 경우, 필수값인데 값이 없을 경우)
    //      4-1. 커스텀 Component props의 타입들을 설정할 수 있음
    //      4-2. 커스텀 Component props 중에 반드시 render 해야하는 prop이 있다면 설정할 수 있음 (isRequired 사용)
            /*  
                Btn.propTypes = {
                    text: PropTypes.string.isRequired,
                    fontSize: PropTypes.number,
                }
            */
}
