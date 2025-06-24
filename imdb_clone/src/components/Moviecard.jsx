import React from 'react'

function Moviecard({poster_path,name}) {
  return (
    <div className=" h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer ml-4 flex flex-col justify-end mb-4" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`}}>
      <div className="bg-amber-50 opacity-70 text-xl text-center">{name}</div>

    </div>
  )
}

export default Moviecard