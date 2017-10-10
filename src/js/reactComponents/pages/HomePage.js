import React, { Component } from 'react';
import PersonAlbum from '../partials/PersonAlbum';
import data from '../../peopleData/data';



export default class HomePage extends Component {

  	state = {
    	people: data
  	}

    render() {

		return (
			<div className='home-page'>
				{ this.state.people.map(person => {
					return (
						<div key={ person.id }>
							<PersonAlbum person={ person }/>
						</div>
					)
				})}
			</div>
		)
    }
}
