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
