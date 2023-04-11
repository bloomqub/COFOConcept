import { Container } from 'react';
import React, { Component } from "react";
import './CSSCOMPONENTS/ProgramsContainer.css';

export default class ProgramsContainer extends Component {
    render() {
        return (
            <div className='programs-container'>
                <div className='subscription-container1'>
                    <div className='text-container1'>
                        <h3>$9.99/Month</h3>
                    </div>
                </div>
                <div className='subscription-container2'>
                    <div className='text-container2'>
                        <h3>$14.99/Month</h3>
                    </div>
                </div>
            </div>
        )
    }
}