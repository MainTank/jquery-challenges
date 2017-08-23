/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){


  //varibles delaired with jQuery
  $(function(){
    var resetButton = $("#reset");
    var shot1Button = $("#teamone-shoot");
    var shot2Button = $("#teamtwo-shoot");
    var resetCounter = $("#num-resets");
    var team1Score = $("#teamone-numhits");
    var team2Score = $("#teamtwo-numhits");
    var team1Shots = $("#teamone-numshots");
    var team2Shots = $("#teamtwo-numshots");
    var shot1AudioPlay =   $("#shot1");
    var shot2AudioPlay =   $("#shot2");

//reset button created with jQuery
    resetButton.click(function(){
       resetCounter.html(parseInt(resetCounter.html()) + 1);
       team1Score.html(0);
       team2Score.html(0);
       team1Shots.html(0);
       team2Shots.html(0);
    })

//shot button team 1 jQuery
    shot1Button.click(function(){

    // shot1AudioPlay.play();
      var ranScoreCheck = Math.random() < 0.5 ? true : false;
       team1Shots.html(parseInt(team1Shots.html()) + 1);

       if (ranScoreCheck == true){
         team1Score.html(parseInt(team1Score.html()) + 1);
         let ranScoreCheck =  Math.random() < 0.5 ? true : false
       }


    })

//shot button team 2 jQuery
    shot2Button.click(function(){

    //shot2AudioPlay.play();
      var ranScoreCheck = Math.random() < 0.5 ? true : false;
       team2Shots.html(parseInt(team2Shots.html()) + 1);

       if (ranScoreCheck == true){
         team2Score.html(parseInt(team2Score.html()) + 1);
         ranScoreCheck =  Math.random() < 0.5 ? true : false
       }


    })
  })

})();
