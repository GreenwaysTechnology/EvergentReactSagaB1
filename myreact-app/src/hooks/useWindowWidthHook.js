import React, { useState, useEffect } from 'react';
//custom hook
//Custom hook may return value or may not
export const useWindowWidth = () => {
    //declare variable to hold currnt window width
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        //handler function
        const handlerResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handlerResize)
        //component will unmount
        return () => {
            window.removeEventListener('resize', handlerResize)
        }
    })
    return width;

}