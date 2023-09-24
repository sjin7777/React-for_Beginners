import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "pasta",
    image: "https://en.wikipedia.org/wiki/Pasta",
    rating: 4.9
  },
  {
    id: 3,
    name: "pizza",
    image: "https://en.wikipedia.org/wiki/Pizza",
    rating: 4.8
  },
  {
    id: 4,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 5.5
  },
]

function Food({name, image,rating}) {
  return (
    <div>
      <h1>{name}</h1>
      <h4>{rating}/5.0</h4>
      <img alt={name} src={image}/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
}


function App() {
  return (
    <div>
      {foodILike.map((item) => (
        <Food key={item.id} name={item.name} image={item.image} rating={item.rating}/>
      ))}
    </div>
  );
}

export default App;
