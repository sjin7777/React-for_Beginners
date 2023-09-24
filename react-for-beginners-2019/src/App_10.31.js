import React from "react";

function Food({name, image}) {
  return (
    <div>
      <h1>{name}</h1>
      <img alt={name} src={image}/>
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    name: "pasta",
    image: "https://en.wikipedia.org/wiki/Pasta"
  },
  {
    name: "pizza",
    image: "https://en.wikipedia.org/wiki/Pizza"
  },
  {
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
]

function renderFood(dish) {
  return <Food name={dish.name} image={dish.image}/>
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood) }
    </div>
  );
}

export default App;
