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