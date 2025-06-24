import React from 'react'
import Moviecard from './Moviecard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Pagination from './Pagination'

function Movies() {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=59af75de003937def5f683f24889a4f2&language=en-US&page=1`).then((res)=>{
            setMovies(res.data.results)
        },[])
    })
    return (
        <>
       
            <div className='text-2xl text-green-700 font-bold p-3 text-center margin-top-3'>
                Trending Movies
            </div>
            <div className='flex flex-wrap justify-around'>
                {movies.map((movie)=>{
                    return(
                         <Moviecard poster_path={movie.poster_path} name={movie.original_title}/>
                    )
                })}

              

             
                </div>
                <Pagination/>
                
                </>

    )
}

export default Movies
//https://api.themoviedb.org/3/movie/popular?api_key=59af75de003937def5f683f24889a4f2&language=en-US&page=1