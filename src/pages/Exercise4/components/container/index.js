import React, { useEffect } from 'react';
import Navbar from '../navbar/navbar';
import './style.css';
import Principal from '../principal/principal';

export default function Container() {

    useEffect(() => {
        fetch('https://openweathermap.org/api')
        .then(res => res)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="container">
            <Navbar />
            <Principal />
        </div>
    );
}
