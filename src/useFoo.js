import { useState, useEffect } from 'react';

const reducer = (state, val) =>  val;

export function useFoo() {
    const [state, dispatch] = useReducer(reducer);
    
    useEffect(() => {
        dispatch('hello world');
    }, []);

    return [state];
}
