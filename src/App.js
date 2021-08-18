import React from "react";
import axios from "axios";


class App extends React.Component {
  
  state = {
    isLoading : true,
  }
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
