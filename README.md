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

```js
//클래스형 컴포넌트만들었고 그걸 활용해보았다.
class App extends React.Component {
  
  state = {
    isLoading : true,
  }
  //async 와 await 는 한쌍이다 데이터 가져올때까지 기다려 달라는것과 같은 것이다.
  getMovies = async () => {
    const movies = await axios.get('https://yts.mx/api/v2/movie_details.json?movie_id=10');
  }

  componentDidMount(){
    //axios.get('https://yts.mx/api/v2/movie_details.json?movie_id=10');
    this.getMovies();
  }

  render(){
    const {isLoading} = this.state;

    return(
        <div> {isLoading ? '로딩중': '로딩완료'} </div>
    );
  }
}

export default App;

```