import React from 'react';
import SuggestionShrimmerCard from './SuggestionShrimmerCard'

const SuggestionShrimmer = () => {
    return (
        <div className='flex flex-col gap-6'>
            {
                Array(50).fill("").map((item,index)=><SuggestionShrimmerCard key={index}/>)
            }
            
        </div>
    );
}

export default SuggestionShrimmer;
