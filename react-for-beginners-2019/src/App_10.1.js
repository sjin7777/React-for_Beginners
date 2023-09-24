import React from "react";

function Food({favorite}) {
  // console.log(favorite);
  return (
    <h1>{favorite}</h1>
  );
}


function App() {
  
  return (
    <div>
      <h1>Hello</h1>
      <Food favorite="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="samgiopsal" />
      <Food favorite="chukumi" />
    </div>
  );
}

export default App;
