import React, { Component } from 'react';
import PostExcerpt from '../partials/PostExcerpt';
import peopleData from '../../../peopleData';



export default class HomePage extends Component {

  state = {
    people: peopleData
  }

    render(){

      console.log(this.state.people);

        return(
            <div className='home-page'>
              { this.state.people.map(person => {
                return (
                  <div key={ person.id }>
                    <PostExcerpt person={ person }/>
                  </div>
                )
              })}

            </div>
        )
    }
}
