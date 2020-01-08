import React from 'react';
import './Movie.css';
import propTypes from 'prop-types';
import {Link} from "react-router-dom";

function Movie({id,title,poster,genres,synopsis}){
    
        return(
           <Link
           to ={{
               pathname:`/movie/${id}`,
               state:{
                   id,
                   title:title,
                   poster,
                   genres,
                   synopsis
               }
           }}> 
                <div className="Movie">
                    <div className="Movie_Column">
                    <MoviePoster poster={poster} alt={title}/>
                    </div>

                    <div className="Movie_Column">
                        <h1>{title}</h1>
                        <div className ="Movie_Genres">
                        {genres.map((genre,index) => <MovieGenre genre={genre} key={index}></MovieGenre>)}
                        </div>
                        <div className="Movie_Synopsis">
                        <p>{synopsis.slice(0,140)}...</p>
                        </div>
                    </div>
                </div>
            </Link>

        )
    }
function MovieGenre({genre,alt}){
    return(
        <span className="Movie_Genre">{genre} </span>
    )
}
//함수를 선언할때 this 가생기고, 실제 실행시 바뀐다
//render를 다른객체가 가져가면 그안에 this를 한 모든것이 바뀐다 따라서 항상 컴포넌트가 실행함
// class MoviePoster extends Component{
//     render(){
//         return(
//             <img src={this.props.poster} alt="Movie poster"/>
//         )

//     }
// }

function MoviePoster({poster,alt}){
    return(
        <img src ={poster} alt={alt} title={alt} className="Movie_Poster"/>
    )
}
//props 만있는 dumb Component 이기때문에 함수형으로 바꿔주는게 좋다. state가없는 컴포넌트는 함수로 return 하는게 좋음 메모리관리차원


Movie.propTypes ={
    title:propTypes.string,
    poster:propTypes.string,
    genres:propTypes.array.isRequired,
    synopsis:propTypes.string.isRequired 
};

MoviePoster.propTypes={
    poster:propTypes.string
};

export default Movie;