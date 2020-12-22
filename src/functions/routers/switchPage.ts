import React from 'react';
import { route } from '../../App';


const toChangePageIndex = (buttonType:"next"|"previous",currentPage) => {
    return (buttonType=="next")?  Math.min(currentPage+1,route.length) : Math.max(currentPage-1,0) 
}

export default toChangePageIndex;