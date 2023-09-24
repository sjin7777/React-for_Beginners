'use strict';

/* react-for-beginners-2019 */





///* 11.0 - Class Components and State */
// App_11.0.js
{
    // function Component가 아닌 Class Component로 생성하기

    //  1. App class Component는 반드시 React class Component를 상속받아야 함
    //      - React.Component 안에는 state를 포함한 많은 것들을 가지고 있음
    //      - 매번 Component를 만들 때마다 모든 것을 다 구현하고 싶지 않기 때문에 extends 해줌
    //          => class App extends React.Component{ ... }

    //  2. React class Component는 function이 아니기 때문에 return을 가지고 있지 않음
    //      - render method를 가지고 있음
    //      - React Component를 extends 했기 때문에 App Component 안에도 있음
    //      - render(){} 안에 return 넣고 리턴하고자 하는 값 넣으면 됨
    //          => render() { return (리턴하고자 하는 것들) }
    //          => render() { return ( <h1>I am a Class Component</h1> )}

    //  3. function Component vs. class Component
    //      3-1. function Component
    //          - 무언가를 return함
    //          - screen에 표시됨
    //      3-2. class Component
    //          - React.Component로부터 확장(extends)되어야 render() 메서드를 사용할 수 있음
    //          - render() 메서드를 사용하여 screen에 표시함
    //          - react는 자동적으로 모든 class component의 render method를 실행함

    //  4. class Component에서 가장 중요한 것 - state
    //      - state는 object
    //      - state 사용 이유: Component의 data를 넣을 공간이 있고 이 data는 변함

    //  5. class 안에 state 생성
    //      - count라는 data 생성
    //          => state = { count: 0 }
    //      - count 렌더링할 때는 this.state.데이터명
    //          => <h1>The number is: {this.state.count}</h1>

    //  6. class 안에 있는 return에 2개의 button 생성
    //      - add button
    //          => <button>Add</button>
    //      - minus button
    //          => <button>Minus</button>

    //  7. class 안에 2개의 function 생성
    //      - add function
    //          => add = () => {};
    //      - minus function
    //          => minus = () => {};

    //  8. 버튼마다 onClick prop의 값으로 생성한 함수 추가(this.함수명)
    //      - this.add()나 this.minus()로 적지 않는 이유: 즉시 호출이 아닌 클릭되었을 때 호출되어야 하기 때문
    //          => <button onClick={this.add}>Add</button>
    //          => <button onClick={this.minus}>Minus</button>


}





///* 11.1 - All you need to know about State */
// App_11.1.js
{
    //  1. state data를 직접 변경하면 안 됨
    //      - 직접 변경시에는 render function을 refresh 하지 않기 때문!
    //      - 즉, 매번 state의 상태를 변경할 때, react는 render function을 호출해서 바꾸어주어야 함
    //      - 예를들어 이런 식으로 하면 안 됨
    //          => add = () => { this.state.count++; }
    //          => minus = () => { this.state.count--; }

    //  2. this.setState()를 사용하여 간접적으로 변경
    //      - state는 object이기 때문에, setState는 새로운 state를 받아와야 함
    //          => this.setState({count:1});        // add 버튼 클릭 시 브라우저에 보이는 숫자가 1이 됨
    //          => this.setState({count:-1});       // minus 버튼 클릭 시 브라우저에 보이는 숫자가 -1이 됨

    //  3. 새로운 state로 변경하는 방법
    //      - setState()를 호출하면 react는 state를 refresh하고 render()를 호출함
    //          => add = () => { this.setState({count: this.state.count+1}); }
    //          => minus = () => { this.setState({count: this.state.count-1}); }
    
    //  4. 더 나은 방법
    //      - 현재 state를 가져오는 방법
    //      - 외부 상태에 의존하지 않는 가장 좋은 방법
    //          => add = () => { this.setState(current => ({count: current.count+1}) ); }
    //          => minus = () => { this.setState(current => ({count: current.count-1}) ); }

}





///* 11.2 - Component Life Cycle */
// App_11.2.js
{
    //  - React.Component에서 사용하는 유일한 function은 render() 뿐임
    //  - 그렇지만 React.Component는 render말고도 많은걸 가지고 있음
    //  - lifeCycle method도 가지는데, lifeCycle method는 기본적으로 react가 Component를 생성하고 없애주는 method
    //  - Component 생성될 때, render 전에 호출되는 함수들이 있고,
    //   Component가 render된 후, 호출되는 함수들도 있음
    //   Component가 update될 때, 호출되는 함수들도 있음

    //  1. mounting
    //      - Component 생성할 때 실행
    //      a-0. constructor() 호출    => JavaScript에서 class를 만들 때 호출됨
    //      a-1. constructor() 생성
    //          - 생성 시 에러가 발생한다면? ES6부터 class 정의 후 class 안에서 this를 사용하기 위해서는 constructor()에 super()가 있어야 한다
    //              => super(); 추가
    //      a-2. constructor와 super의 인자로 props를 가져옴
    //              => consturctor(props) { super(props) }
    //      a-3. constructor(props) 안과 render() 안에 콘솔 로그 찍어보기
    //          - constructor는 시작 전에 호출 되어 로그 찍힘 
    //          - 그 다음에 render가 실행되어 render()를 호출됨
    
    //      b-0. getDerivedStateFromProps()     => 해당 프로젝트에서 다루지 않을거기에 넘어감 (잘 사용되지도 않음)
    
    //      c-0. render()
    //      d-0. componentDidMount()
    
    //  - 즉, Component가 mount될 때, screen에 표시될 때, Website에 갈 때, constructor()를 호출함
    //  - Component가 render된 이후, componentDidMount() 실행


    //  2. updating
    //      - state를 변경할 때 실행
    //      a. getDerivedStateFromProps()     => 해당 프로젝트에서 다루지 않을거기에 넘어감 (잘 사용되지도 않음)
    //      b. shouldComponentUpdate()        
    //          - setState를 호출할때마다 발생함
    //      c. render()
    //          - shouldComponentUpdate() 실행된 이후에 rendering
    //      d. getSnapshotBeforeUpdate()      => 해당 프로젝트에서 다루지 않을거기에 넘어감 (잘 사용되지도 않음)
    //      e. componentDidUpdate()
    //          - render() 이후 실행

    //  - 즉, setState를 호출하면, Component를 호출 → render() → 업데이트 완료 → componentDidUpdate()


    //  3. unmounting
    //      - Component가 종료될 때 실행
    //      - componentWillUnmount()

}





///* 11.3 - Planning the Movie Component */
// App_11.3.js
{
    //  - movie component 구성
    //  1. loading 관련 state 생성
    //      - application을 mount(생성)하면 상태는 기본적으로 로딩 중인 상태
    //          => state = { isLoading: true }
    
    //  2. loading 상태에 따라서 렌더링
    //      - isLoading이 true라면 "Loading..."
    //      - isLoading이 false라면 "We are ready"
    //          => <div> { this.isLoading ? "Loading..." : "We are ready"} </div>

    //  3. 만약 this.isLoading이라고 직접적으로 사용하고 싶지 않다면 ES6 업데이트시에 새로 나온 방법으로 변경
    //      - render() 안이고, return 하기 전에 먼저 선언
    //          => const { isLoading } = this.state;
    //      - return 하는 곳에 작성
    //          => <div> { isLoading ? "Loading..." : "We are ready"} </div>

    //  4. render할 때 호출되는 life cycle method는?
    //      - componentDidMount()

    //  5. componentDidMount() 안에 setTimeout() 이용하기 (delay function 용)
    //      - setTimeout() 안에서 isLoading의 값을 false로 변경
    //          => this.setState({isLoading : false})
    
    //  6. componentDidMount() 안에서 data를 fetch
    //      - API로부터 data fetching이 완료되면 isLoading이 false가 되면서, "We are ready" 대신 movie를 render
    //      - 다음 영상~~

    //  7. movie들을 담을 movies를 state에 추가
    //      => state = { isLoading: true, movies: [] }

}
