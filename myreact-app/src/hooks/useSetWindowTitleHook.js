import React, { useEffect } from 'react';


//this hook not returning any value
export const useWindowSetTitle = screen => {
    useEffect(() => {
        //side effects
        document.title = screen;
    })
}