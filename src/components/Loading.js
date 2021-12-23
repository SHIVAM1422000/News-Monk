import React, { Component } from 'react';
import Spinner1 from './Spinner1.gif';

export class Loading extends Component {
    render() {
        return (
            <div>
                <img className='text-centre' src={Spinner1} alt="Spinner" />
            </div>
        )
    }
}

export default Loading;

