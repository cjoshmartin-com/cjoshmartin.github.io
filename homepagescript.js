//this was inspaired by this script https://github.com/mxstbr/sirke.is/blob/master/script.js

var occupation = ['Student','IT Assistant','Job Board Deveopler', 'FSA Webmaster', 'Breakdancer'];
var copy = occupation.slice();
var pauseTime = 3000;
var newOccupation;
var elem;

window.onload = function() {

  elem = document.getElementById('occupation');

  setJobs();
}

function setJobs(preElem){
    if (occupation.length == 0){
        occupation = copy.slice();
    }//end of if

    //gets random Job
    var oneJob = occupation[Math.floor(Math.random() * occupation.length)];
    //deletes Job
    occupation.splice(occupation.indexOf(oneJob),1);



    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    } // end of while

    elem.appendChild(document.createTextNode(oneJob));
    newOccupation = new Timer( setJobs, pauseTime);

}// end of setJobs function

//makes timeout function
var Timer = function(callback,delay) {
    var id,started, remaining = delay, running
    this.start =function() {
      running = true;
      start = new Date();
      id = setTimeout(callback,remaining);
    }//end of start

    this.pause =function() {
      running = false;
      clearTimeout(id);
      remaining -= new Date() - started;

    } //end of pause
    this.getTimeleft = function() {
      if (running) {
        this.pause();
        this.start();
      }// end of if
      return remaining;
    }// end of getTimeleft
    this.start();
}// end of Timer
