import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';

const Home = ({handleWatchTime}) => {

    const [movies,setMovies]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[])
    return (
        
          <div className="movie-container">
            {
                movies.map(movie=><SingleCart
                    handleWatchTime={handleWatchTime}
                    movies={movie}></SingleCart>)
            }
            
          </div>
         
    );
};

export default Home;