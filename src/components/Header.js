import React from 'react';
import './style/header.css'

export default function Header(props) {
    return (
        <div className='header'>
            {props.appTitle}
        </div>
    );
}