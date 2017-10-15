import React, { Component } from 'react';
import PersonAlbum from '../partials/PersonAlbum';
import data from '../../peopleData/data';
import Sticky from '../../utils/Sticky';



export default class HomePage extends Component {

  	state = {
			people: data,
			person: data[0]
	  }
	  
	componentDidMount() {
		const buttonsEl = document.querySelector('.arrow__wrapper');
		const offsetValue1 = buttonsEl.offsetTop;

		const logoEl = document.querySelector('.logo__wrapper');
		const offsetValue2 = logoEl.offsetTop;

		//const iframeEl = document.querySelector('iframe');
		//const offsetValue3 = iframeEl.offsetTop;
		
		this.sticky1 = new Sticky(buttonsEl, offsetValue1);
		this.sticky2 = new Sticky(logoEl, offsetValue2);
		//this.sticky3 = new Sticky(iframeEl, offsetValue3);
		

		//logoEl.style.transform = 'scale(0.5)';
		
	}

    render() {

		return (
			<div className='home-page'>
				<header className='header'>
					<div className='logo__wrapper'>
						<h1><span>13</span>TUNES</h1>
						<h1><span>OF</span>STORY</h1>
					</div>
					<div className='header__text'>
						<p>"Human is a story. Musis is a form of telling it."</p>
					</div>
					<div className='arrow__wrapper'>
						<div className='arrow arrow__prev'>
							PREV
						</div>
						<div className='arrow arrow__next'>
							NEXT
						</div>
					</div>
				</header>
				<div className='home-page__box'>
					<PersonAlbum person={ this.state.person }/>
					<div className='home-page__helper'>
					</div>
					<div className='home-page__info-wrapper'>
						<div className='home-page__info'>
							<h1>PAWEL</h1>
							<p>Ut in elit odio. Ut faucibus finibus pellentesque. Nam feugiat justo sed vulputate ultrices. Duis venenatis viverra nisi, eget venenatis turpis pharetra ut. Phasellus gravida bibendum felis, in viverra tortor vehicula ut. Phasellus in dolor tortor. Maecenas ut blandit quam. Aenean sollicitudin eros neque, et laoreet quam faucibus in. Praesent id maximus est, nec rutrum libero. Donec tincidunt turpis quis nunc sollicitudin, ut egestas ex tempus. Cras scelerisque dui nec est mattis scelerisque. Aliquam tristique maximus auctor. Phasellus a viverra diam. Mauris vestibulum facilisis purus sit amet ultricies. Ut eu blandit ex, sit amet consequat nisi. In viverra nec magna sed interdum.

Maecenas gravida enim in augue aliquam, a porttitor magna finibus. Nunc tempor lorem enim, mollis mollis augue vehicula sed. Vivamus sed sem lacinia, mattis quam at, commodo ante. Mauris sit amet faucibus leo, quis sagittis nulla. Phasellus quis facilisis urna, a tincidunt eros. Aliquam scelerisque purus vel varius pellentesque. Nam rhoncus dignissim tortor, eget mattis ligula. Suspendisse non sollicitudin sapien. Nam et erat lacus. Nulla nunc eros, faucibus vitae interdum et, semper ac ligula. Cras ac nunc sem. Aenean pretium, erat ac tristique elementum, neque ex mollis leo, ac rhoncus turpis nunc in diam. Donec rutrum neque nec bibendum posuere. Aliquam fermentum eros metus, sit amet dictum dui condimentum sit amet. Donec tristique vel purus vel accumsan. Ut convallis, dolor dictum pharetra semper, neque turpis mollis enim, et faucibus massa augue et ligula.</p>
						</div>
					</div>
				</div>
			</div>
		)
    }
}
