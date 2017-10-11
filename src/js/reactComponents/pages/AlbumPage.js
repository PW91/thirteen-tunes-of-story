import React, { Component } from 'react';
import data from '../../peopleData/data';



export default class AlbumPage extends Component {

    state = {
    	person: data[2]
  	}

    render(){

        const { person } = this.state;

        return(
            <div className='album-page'>
                <section className='album-page__personal-section'>
                    <img src={person.portraitImgSrc} className='album-page__person-img'/>
                    <div className='album-page__person-data'>
                    <div>
                        <h6>name:</h6>
                        <h1>{person.name}</h1>
                    </div>
                    <div>
                    <h6>age:</h6>
                    <h1>{person.year}</h1>
                    </div>
                    </div>
                </section>
                <section className='album-page__play-section'>
                    <div className='album-page__player-wrapper'>
                        <div className='album-page__album'>
                            <div className='album-page__covers-wrapper'>
                                { person.coversImgSrc.map((cover, index) => {

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
                        </div>
                        <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fpsz_emo%2Ftest%2F" frameBorder="0" title="test"></iframe>
                    </div>
                    <div className='greenbox'></div>
                    <div className='album-page__playlist-wrapper'>
                        <ol className='playlist'>
                            { person.tunes.map(tune => {
                                return (
                                    <li 
                                        key={ tune.id } 
                                        className='playlist__tune'
                                    >
                                        <span>{ tune.artist }</span> { tune.name }
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                </section>
                <div className='whitebox'></div>
            </div>
        )
    }
}
