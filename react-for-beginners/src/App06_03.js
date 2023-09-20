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