import React from 'react';
import logo from '../no-bg-logo.svg'


export default function Hero() {
    return (
        <div className="h-screen flex bg-default-black justify-center">
            <img src={logo} alt="" className="w-1/3" />
        </div>
    )
}