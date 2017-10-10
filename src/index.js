import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './js/reactComponents/pages/HomePage';
import Layout from './js/reactComponents/Layout';
import registerServiceWorker from './registerServiceWorker';
import './App.css';



const root = document.getElementById('root');

ReactDOM.render(
	<Layout>
	<Router>
		<Switch>
			<Route exact={true} path='/' component={HomePage}/>
		</Switch>
	</Router>
	</Layout>,
root);

document.addEventListener('DOMContentLoaded', function() {
	var wrappers = document.querySelectorAll('.cover__wrapper');

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
	  
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
	  
		  // Pick a remaining element...
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex -= 1;
	  
		  // And swap it with the current element.
		  temporaryValue = array[currentIndex];
		  array[currentIndex] = array[randomIndex];
		  array[randomIndex] = temporaryValue;
		}
	  
		return array;
	  }	

	  function changeIt(items) {
		var covers = shuffle(items);
		
		covers[0].style.top='0px';
		covers[0].style.left='0px';
		covers[0].style.width='100px';  
		covers[0].style.height='100px';  

		covers[1].style.top='0px';
		covers[1].style.left='100px'; 
		covers[1].style.width='100px';  
		covers[1].style.height='100px';         

		covers[2].style.top='0px';
		covers[2].style.left='200px';
		covers[2].style.width='100px';  
		covers[2].style.height='100px';  

		covers[3].style.top='0px';
		covers[3].style.left='300px'; 
		covers[3].style.width='100px';  
		covers[3].style.height='100px';     
		
		covers[4].style.top='100px';
		covers[4].style.left='0px'; 
		covers[4].style.width='100px';  
		covers[4].style.height='100px';   

		covers[5].style.top='100px';
		covers[5].style.left='100px'; 
		covers[5].style.width='200px';  
		covers[5].style.height='200px';  

		covers[6].style.top='100px';
		covers[6].style.left='300px'; 
		covers[6].style.width='100px';  
		covers[6].style.height='100px';   

		covers[7].style.top='200px';
		covers[7].style.left='0px';
		covers[7].style.width='100px';  
		covers[7].style.height='100px';  

		covers[8].style.top='200px';
		covers[8].style.left='300px';
		covers[8].style.width='100px';  
		covers[8].style.height='100px';  

		covers[9].style.top='300px';
		covers[9].style.left='0px';
		covers[9].style.width='100px';  
		covers[9].style.height='100px';  

		covers[10].style.top='300px';
		covers[10].style.left='100px';
		covers[10].style.width='100px';  
		covers[10].style.height='100px';  

		covers[11].style.top='300px';
		covers[11].style.left='200px';
		covers[11].style.width='100px';  
		covers[11].style.height='100px';  

		covers[12].style.top='300px';
		covers[12].style.left='300px';
		covers[12].style.width='100px';  
		covers[12].style.height='100px';  
	}

	function intervaling(flag, el) {

		console.log('to jest wrap', el);
		if (flag) {

			var cov = el.querySelectorAll('.cover');
			var covers = Array.prototype.slice.call(cov);

			changeIt(covers);

			window.id = setInterval(function() {;
				changeIt(covers);
			}, 3000)
		} else {
			clearInterval(window.id);
		}
	}



		wrappers[0].addEventListener('mouseenter', function () {
			intervaling(true, wrappers[0]);
		});
	
		wrappers[0].addEventListener('mouseout', function () {
			intervaling(false, wrappers[0], );
		});

		wrappers[1].addEventListener('mouseenter', function () {
			intervaling(true, wrappers[1]);
		});
	
		wrappers[1].addEventListener('mouseout', function () {
			intervaling(false, wrappers[1]);
		});

		wrappers[2].addEventListener('mouseenter', function () {
			intervaling(true, wrappers[2]);
		});
	
		wrappers[2].addEventListener('mouseout', function () {
			intervaling(false, wrappers[2]);
		});

		wrappers[3].addEventListener('mouseenter', function () {
			intervaling(true, wrappers[3]);
		});
	
		wrappers[3].addEventListener('mouseout', function () {
			intervaling(false, wrappers[3]);
		});

});

	/*console.log('jestem tu');
	
		var cov = document.querySelectorAll('.cover');
	
		var covers = Array.prototype.slice.call(cov);
	
		var wrapper = document.querySelector('.cover__wrapper'); 

		console.log(cov, wrapper)
	
	
		function intervaling(flag) {
			if (flag) {
				console.log('pierwszy');
				changeIt();
	
				window.id = setInterval(function() {;
					changeIt();
				}, 3000)
			} else {
				clearInterval(window.id);
			}
		}
	
		wrapper.addEventListener('mouseenter', function () {
			console.log('wchodze');
			intervaling(true);
		});
	
		wrapper.addEventListener('mouseout', function () {
			intervaling(false);
		});

	
	
	
	
		function shuffle(array) {
			var currentIndex = array.length, temporaryValue, randomIndex;
		  
			// While there remain elements to shuffle...
			while (0 !== currentIndex) {
		  
			  // Pick a remaining element...
			  randomIndex = Math.floor(Math.random() * currentIndex);
			  currentIndex -= 1;
		  
			  // And swap it with the current element.
			  temporaryValue = array[currentIndex];
			  array[currentIndex] = array[randomIndex];
			  array[randomIndex] = temporaryValue;
			}
		  
			return array;
		  }
	
	
		function changeIt() {
			covers = shuffle(covers);
			
			covers[0].style.top='0px';
			covers[0].style.left='0px';
			covers[0].style.width='100px';  
			covers[0].style.height='100px';  
	
			covers[1].style.top='0px';
			covers[1].style.left='100px'; 
			covers[1].style.width='100px';  
			covers[1].style.height='100px';         
	
			covers[2].style.top='0px';
			covers[2].style.left='200px';
			covers[2].style.width='100px';  
			covers[2].style.height='100px';  
	
			covers[3].style.top='0px';
			covers[3].style.left='300px'; 
			covers[3].style.width='100px';  
			covers[3].style.height='100px';     
			
			covers[4].style.top='100px';
			covers[4].style.left='0px'; 
			covers[4].style.width='100px';  
			covers[4].style.height='100px';   
	
			covers[5].style.top='100px';
			covers[5].style.left='100px'; 
			covers[5].style.width='200px';  
			covers[5].style.height='200px';  
	
			covers[6].style.top='100px';
			covers[6].style.left='300px'; 
			covers[6].style.width='100px';  
			covers[6].style.height='100px';   
	
			covers[7].style.top='200px';
			covers[7].style.left='0px';
			covers[7].style.width='100px';  
			covers[7].style.height='100px';  
	
			covers[8].style.top='200px';
			covers[8].style.left='300px';
			covers[8].style.width='100px';  
			covers[8].style.height='100px';  
	
			covers[9].style.top='300px';
			covers[9].style.left='0px';
			covers[9].style.width='100px';  
			covers[9].style.height='100px';  
	
			covers[10].style.top='300px';
			covers[10].style.left='100px';
			covers[10].style.width='100px';  
			covers[10].style.height='100px';  
	
			covers[11].style.top='300px';
			covers[11].style.left='200px';
			covers[11].style.width='100px';  
			covers[11].style.height='100px';  
	
			covers[12].style.top='300px';
			covers[12].style.left='300px';
			covers[12].style.width='100px';  
			covers[12].style.height='100px';  
		}
		  
	
	
	});*/

registerServiceWorker();
