import React from "react";
import axios from "axios";


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
