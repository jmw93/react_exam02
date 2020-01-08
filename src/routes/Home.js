import React, {Component} from 'react';

import './Home.css';
import Movie from '../components/Movie.js'

    
class Home extends Component {

  state= {
  

  }
   componentDidMount(){
    this._getMovies();
  }


   _getMovies =async () => {
    const movies = await this._callApi();
    
    this.setState({
      movies
      //new js에서는 movies로 써도무방함.
    });
  }

  _callApi(){
    
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=download_count")
    .then(response=>response.json())
    .then(json=> {return json.data.movies})
    .catch(err=>console.log(err));
 
  }
   _renderMovies=()=>{
    const movies =this.state.movies.map((movie,index)=> {
      
      return <Movie 
      id={movie.id}
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      genres ={movie.genres}
      key={movie.id}
      synopsis={movie.synopsis}/>
    });
    return movies;
   }

  render(){
    const {movies} = this.state; 
    return(
    <div className={movies ? "App" : "App-loading"}>
        {this.state.movies ? this._renderMovies() : "Loading"}
    </div>

    );
  }
}

export default Home;
