import React, { Component } from 'react';
import data from '../../peopleData/data';



export default class AlbumPage extends Component {

    state = {
    	people: data
  	}

    render(){

        return(
            <div className='album-page'>
                <section className='album-page__playlist-section'>
                    <div className='album-page__album'>
                        <div className='album-page__covers-wrapper'>
                            { this.state.people[0].coversImgSrc.map((cover, index) => {

                                const cssClass = 'album-page__cover' + (index + 1);

                                return (
                                    <img 
                                        key={ cover } 
                                        className={ "album-page__cover " + cssClass } 
                                        src={ cover } 
                                        alt={ cover }
                                    />
                                )
                            })}
                        </div>
                        <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fpsz_emo%2Ftest%2F" frameBorder="0" title="test"></iframe>
                    </div>
                    <div className='greenbox'></div>
                </section>
                <div className='whitebox'></div>
            </div>
        )
    }
}
