export default class Sticky {
    
        constructor (el, elOffset) {
    
            this.makeItSticky = function (el, elOffset) {

                //console.log(elOffset, window.pageYOffset);
    
                if (window.pageYOffset > elOffset) {
                    el.classList.add('fixed');
    
                } else {
                    el.classList.remove('fixed');
                }
            }
    
            this.stickyBinded = this.makeItSticky.bind(this, el, elOffset);
            window.addEventListener('scroll', this.stickyBinded);
        }
    
        remove () {
            window.removeEventListener('scroll', this.stickyBinded);
        }
    }