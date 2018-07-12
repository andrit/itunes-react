import React, {Component} from 'react';

import './modal.css';

export const Modal = (props) => {
    return(
        <div className="info-modal">
            
            <img src={props.artistpic} alt={props.name} />
            <p>Artist Name: {props.name}</p>
            <p>Genre: {props.genre}</p>
            <p>Song Name: {props.track}</p>
            <p>Album: {props.album}</p>
            <button onClick={props.closeModal}>Close</button>
        </div>
    )
}