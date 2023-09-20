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