import axios from 'axios';

import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Scrol({ title, fetchURL, rowID}) {
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        axios.get(fetchURL).then((response)=> {
            setMovies(response.data.results)
        })
    }, [fetchURL])
    
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className="relative flex item-center group">
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-ponter z-10 hidden group-hover:block top-14' size={40} />   
                
                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hiden relative'>
                    {movies.map((item, id) => (
                        
                        <Movie item={item} />
                    ))}
                </div>
                <MdChevronRight
                 onClick={slideRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-ponter z-10 hidden group-hover:block top-14' size={40} />
            </div>
        </>
    ) 
}

export default Scrol