# Movie App 2021 

React JS Fundamentals course 2021


# 클론코딩하면서 알아두면 좋을거 같은 것들 

```js 
function renderFood(dish) {
  return <Food name={dish.name} picture={dish.img} babo={dish.aaa} />;
}

function App() {
  console.log(food.map(renderFood))
  return (
    <div>
      {food.map(renderFood)}
    </div>
    );  
}
//맵 함수를 이용해서 반복작업을 줄여서 각각의 컨포넌트 만들어 주기 
//클론코딩책 p.96
```

```js
function App() {
  
  return (
    <div>
      
      {food.map((dish) => (<Food key={dish.id} name={dish.name} picture={dish.img} rating={dish.rating}/>))}

    </div>
    );  
}

//Food의 타입을 명시
Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
  // rating의 타입은 number이고  isRequired는 필요하다는 뜻이다. 
  //이걸로 타입을 명시해주어 프로그램 작성시 prop보낼때 타입을 명시해줄수 있다. 
};
```
