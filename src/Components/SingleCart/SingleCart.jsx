import React from 'react';

const SingleCart = (props) => {
    const {movieName,watchTime,description,imdbRating,category,poster}=props.movies;
    const handleWatchTime=props.handleWatchTime;
    return (
        <div className="movie-card card text-center w-100 m-auto">
        <div className="movie-poster   w-25 m-auto">
            <img className='w-75' src={poster} alt="" />
        </div>
        <h3> {movieName}</h3>
        <p>{description}</p>
        <div className="timeAndRating d-flex justify-content-around">
            <p>Watch-time:{watchTime}</p>
            <p>Rating:{imdbRating}</p>
        </div>
        <button onClick={()=>handleWatchTime(watchTime)} className="btn btn-info w-75 m-auto mb-3">Book Now</button>
        <button className="btn btn-info w-75 m-auto mb-3">Cancel booking</button>
    </div>
    );
};

export default SingleCart;