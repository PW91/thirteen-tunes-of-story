import React, { Component } from 'react';
import Header from './partials/Header';



export default class Layout extends Component {

    render(){

        const { children } = this.props;

        return(
            <div className='layout'>
                <div className='wrap'>
                    { children }
                </div>
            </div>
        )
    }
}
