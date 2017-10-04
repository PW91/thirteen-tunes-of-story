import React, { Component } from 'react';



export default class PostExcerpt extends Component {

    render(){

        return(
            <div className='post-excerpt'>
                <img src={this.props.person.imgSrc}/>
                <h2>{this.props.person.name}</h2>
            </div>
        )
    }
}
