import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Utils from '../../utils/Utils';



export default class PersonAlbum extends Component {

    handleClick = (e) => {
        e.target.classList.toggle('hover');
    }

    handleMouseEnter = (e) => {
       // const covers = Array.prototype.slice.call(e.target.querySelectorAll('.cover'));
       // this.intervalController(true, covers);
    }

    componentDidMount() {
        //const covers = Array.prototype.slice.call(document.querySelectorAll('.cover'));
        //this.intervalController(true, covers);
    }

    handleMouseOut = (e) => {
        this.intervalController(false);
        //e.target.classList.remove('hover');
    }

    intervalController(flag, covers) {
        if (flag) {
            this.shuffleCovers(covers);

            this.id = setInterval(() =>this.shuffleCovers(covers), 5000);
        } else {
            clearInterval(this.id);
        }
    }

    shuffleCovers(covers) {
        const shuffledCovers = Utils.shuffleArray(covers);
        
        shuffledCovers[0].style.top='0';
        shuffledCovers[0].style.left='0';
        shuffledCovers[0].style.width='30%';  
        shuffledCovers[0].style.height='30%';  
        shuffledCovers[0].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[1].style.top='0';
        shuffledCovers[1].style.left='25%'; 
        shuffledCovers[1].style.width='30%';  
        shuffledCovers[1].style.height='30%';   
        shuffledCovers[1].style.zIndex=Math.floor(Math.random()*100);       

        shuffledCovers[2].style.top='0';
        shuffledCovers[2].style.left='50%';
        shuffledCovers[2].style.width='30%';  
        shuffledCovers[2].style.height='30%';  
        shuffledCovers[2].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[3].style.top='0';
        shuffledCovers[3].style.left='70%'; 
        shuffledCovers[3].style.width='30%';  
        shuffledCovers[3].style.height='30%';   
        shuffledCovers[3].style.zIndex=Math.floor(Math.random()*100);   
        
        shuffledCovers[4].style.top='25%';
        shuffledCovers[4].style.left='0'; 
        shuffledCovers[4].style.width='30%';  
        shuffledCovers[4].style.height='30%';   
        shuffledCovers[4].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[5].style.top='20%';
        shuffledCovers[5].style.left='20%'; 
        shuffledCovers[5].style.width='60%';  
        shuffledCovers[5].style.height='60%';  
        shuffledCovers[5].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[6].style.top='20%';
        shuffledCovers[6].style.left='70%'; 
        shuffledCovers[6].style.width='30%';  
        shuffledCovers[6].style.height='30%';   
        shuffledCovers[6].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[7].style.top='50%';
        shuffledCovers[7].style.left='0';
        shuffledCovers[7].style.width='30%';  
        shuffledCovers[7].style.height='30%';  
        shuffledCovers[7].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[8].style.top='45%';
        shuffledCovers[8].style.left='70%';
        shuffledCovers[8].style.width='30%';  
        shuffledCovers[8].style.height='30%';  
        shuffledCovers[8].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[9].style.top='70%';
        shuffledCovers[9].style.left='0';
        shuffledCovers[9].style.width='30%';  
        shuffledCovers[9].style.height='30%';  
        shuffledCovers[9].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[10].style.top='70%';
        shuffledCovers[10].style.left='20%';
        shuffledCovers[10].style.width='30%';  
        shuffledCovers[10].style.height='30%';  
        shuffledCovers[10].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[11].style.top='70%';
        shuffledCovers[11].style.left='45%';
        shuffledCovers[11].style.width='30%';  
        shuffledCovers[11].style.height='30%';  
        shuffledCovers[11].style.zIndex=Math.floor(Math.random()*100); 

        shuffledCovers[12].style.top='70%';
        shuffledCovers[12].style.left='70%';
        shuffledCovers[12].style.width='30%';  
        shuffledCovers[12].style.height='30%';
        shuffledCovers[12].style.zIndex=Math.floor(Math.random()*100); 
    }

    render(){

        const { person } = this.props;

        return (
            <div className='album__wrapper'>
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
                                    const zIndex = Math.floor(Math.random()*100);

                                    return (
                                        <img 
                                            key={ cover } 
                                            className={ "cover " + cssClass } 
                                            src={ cover } 
                                            alt={ cover }
                                            style={{
                                                zIndex: zIndex
                                            }}
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
                            </div>
                        </div>
                    </div>
                </div>
                <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&hide_artwork=1&feed=%2Fpsz_emo%2Ftest%2F" frameborder="0" title='test'></iframe>
            </div>
        )
    }
}