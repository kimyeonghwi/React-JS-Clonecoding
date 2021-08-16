import React from "react";
import PropTypes from 'prop-types'

function Food({name , picture ,rating}) {

  return (
  <div>
    <h2>I love {name}</h2>
    <h4>{rating}/5 </h4>
    <img src={picture} alt={name}/>
  </div>
  
  );
}
const food = [
{ id: 1,
  name : 'kimci',
  img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.E8lZ_WyIAXWARAgDLCtLRgHaFj%26pid%3DApi&f=1',
  rating: 4.9,
},
{ id: 2,
  name : '삼겹살 ',
  img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.E8lZ_WyIAXWARAgDLCtLRgHaFj%26pid%3DApi&f=1',
  rating: 5,
},
{ id:3,
  name : '우동',
  img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.E8lZ_WyIAXWARAgDLCtLRgHaFj%26pid%3DApi&f=1',
  rating: 3,
},

];

function App() {
  
  return (
    <div>
      
      {food.map((dish) => (<Food key={dish.id} name={dish.name} picture={dish.img} rating={dish.rating}/>))}

    </div>
    );  
}


Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
};

export default App;
