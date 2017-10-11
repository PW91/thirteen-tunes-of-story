import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Utils from '../../utils/Utils';



export default class PersonAlbum extends Component {

    handleClick = (e) => {
        e.target.classList.toggle('hover');
    }

    handleMouseEnter = (e) => {
        const covers = Array.prototype.slice.call(e.target.querySelectorAll('.cover'));
        this.intervalController(true, covers);
    }

    handleMouseOut = (e) => {
        this.intervalController(false);
        //e.target.classList.remove('hover');
    }

    intervalController(flag, covers) {
        if (flag) {
            this.shuffleCovers(covers);

            this.id = setInterval(() =>this.shuffleCovers(covers), 3000);
        } else {
            clearInterval(this.id);
        }
    }

    shuffleCovers(covers) {
        const shuffledCovers = Utils.shuffleArray(covers);
        
        shuffledCovers[0].style.top='0px';
        shuffledCovers[0].style.left='0px';
        shuffledCovers[0].style.width='130px';  
        shuffledCovers[0].style.height='130px';  
        shuffledCovers[0].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[1].style.top='0px';
        shuffledCovers[1].style.left='90px'; 
        shuffledCovers[1].style.width='130px';  
        shuffledCovers[1].style.height='130px';   
        shuffledCovers[1].style.zIndex=Math.floor(Math.random()*100);       

        shuffledCovers[2].style.top='0px';
        shuffledCovers[2].style.left='180px';
        shuffledCovers[2].style.width='130px';  
        shuffledCovers[2].style.height='130px';  
        shuffledCovers[2].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[3].style.top='0px';
        shuffledCovers[3].style.left='270px'; 
        shuffledCovers[3].style.width='130px';  
        shuffledCovers[3].style.height='130px';   
        shuffledCovers[3].style.zIndex=Math.floor(Math.random()*100);   
        
        shuffledCovers[4].style.top='90px';
        shuffledCovers[4].style.left='0px'; 
        shuffledCovers[4].style.width='130px';  
        shuffledCovers[4].style.height='130px';   
        shuffledCovers[4].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[5].style.top='70px';
        shuffledCovers[5].style.left='70px'; 
        shuffledCovers[5].style.width='260px';  
        shuffledCovers[5].style.height='260px';  
        shuffledCovers[5].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[6].style.top='90px';
        shuffledCovers[6].style.left='270px'; 
        shuffledCovers[6].style.width='130px';  
        shuffledCovers[6].style.height='130px';   
        shuffledCovers[6].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[7].style.top='180px';
        shuffledCovers[7].style.left='0px';
        shuffledCovers[7].style.width='130px';  
        shuffledCovers[7].style.height='130px';  
        shuffledCovers[7].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[8].style.top='180px';
        shuffledCovers[8].style.left='270px';
        shuffledCovers[8].style.width='130px';  
        shuffledCovers[8].style.height='130px';  
        shuffledCovers[8].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[9].style.top='270px';
        shuffledCovers[9].style.left='0px';
        shuffledCovers[9].style.width='130px';  
        shuffledCovers[9].style.height='130px';  
        shuffledCovers[9].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[10].style.top='270px';
        shuffledCovers[10].style.left='90px';
        shuffledCovers[10].style.width='130px';  
        shuffledCovers[10].style.height='130px';  
        shuffledCovers[10].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[11].style.top='270px';
        shuffledCovers[11].style.left='180px';
        shuffledCovers[11].style.width='130px';  
        shuffledCovers[11].style.height='130px';  
        shuffledCovers[11].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[12].style.top='270px';
        shuffledCovers[12].style.left='270px';
        shuffledCovers[12].style.width='130px';  
        shuffledCovers[12].style.height='130px';
        shuffledCovers[12].style.zIndex=Math.floor(Math.random()*100); 
    }

    render(){

        const { person } = this.props;

        return (
            <div className="album" 
                onClick={ this.handleClick }
                onMouseEnter={ this.handleMouseEnter }
                onMouseOut={ this.handleMouseOut }
            >
                <div className="album__flipper">
                    <div className="album__front">
                        <div className="album__covers-wrapper">

                            { person.coversImgSrc.map((cover, index) => {

                                const cssClass = 'cover' + (index + 1);

                                return (
                                    <img 
                                        key={ cover } 
                                        className={ "cover " + cssClass } 
                                        src={ cover } 
                                        alt={ cover }
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="album__back">
                        <div className='album__playlist-wrapper'>
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
                            <Link to='album' className='album__button'>CHECK</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}