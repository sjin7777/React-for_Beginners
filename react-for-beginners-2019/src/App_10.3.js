import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    id: 2,
    name: "pasta",
    image: "https://en.wikipedia.org/wiki/Pasta"
  },
  {
    id: 3,
    name: "pizza",
    image: "https://en.wikipedia.org/wiki/Pizza"
  },
  {
    id: 4,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
]

function Food({name, image}) {
  return (
    <div>
      <h1>{name}</h1>
      <img alt={name} src={image}/>
    </div>
  );
}


function App() {
  return (
    <div>
      {foodILike.map((item) => (
        <Food key={item.id} name={item.name} image={item.image} />
      ))}
    </div>
  );
}

export default App;
