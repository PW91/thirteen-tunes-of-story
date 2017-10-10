import React, { Component } from 'react';
import PostExcerpt from '../partials/PostExcerpt';
import data from '../../peopleData/data';



export default class HomePage extends Component {

  	state = {
    	people: data
  	}

    handleClick = (item) => {
      	const flipper = item.target.parentElement.parentElement.parentElement;
      	flipper.classList.toggle('hover');
    }

    render() {

		return (
			<div className='home-page'>
				{ this.state.people.map((person,index) => {
					return (
						<div className="flip-container" onClick={ (e) => this.handleClick(e) }>
							<div className="flipper">
								<div className="front">
									<div className="cover__wrapper">
										{ person.coversImgSrc.map((cover, index) => {

											const cssClass = 'cover' + index;

											return (
												<img className={ "cover " + cssClass } src={ cover } />
											)
										})}
									</div>
								</div>
								<div className="back">
									<div className='playlist'>
										<ol>
											{ person.tunes.map((tune,index) => {
												return (
													<li><span>{tune.artist}</span> - {tune.name}</li>
												)
											})}
										</ol>
										<iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&hide_artwork=1&feed=%2Fpsz_emo%2Ftest%2F" frameborder="0" ></iframe>
										<div className='button'>CHECK</div>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		)
    }
}
