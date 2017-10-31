/* Have to set the level ticker up here for some reason*/
var levelcc=1;
/* Set pause */
var paused=0;
/* audio vars */
var blindshavechanged = new Audio('http://www.bigewiki.com/jasonsapp/audio/blindshavechanged.mp3');
var breakhasended = new Audio('http://www.bigewiki.com/jasonsapp/audio/breakhasended.mp3');
var breakhasstarted = new Audio('http://www.bigewiki.com/jasonsapp/audio/breakhasstarted.mp3');
var gamehasbeenunpaused = new Audio('http://www.bigewiki.com/jasonsapp/audio/gamehasbeenunpaused.mp3');
var gamehasended = new Audio('http://www.bigewiki.com/jasonsapp/audio/gamehasended.mp3');
var gamehaspaused = new Audio('http://www.bigewiki.com/jasonsapp/audio/gamehaspaused.mp3');
var gamehasstarted = new Audio('http://www.bigewiki.com/jasonsapp/audio/gamehasstarted.mp3');



/********* 3 second alert **********/
function fivesecondalert(){
$("#alertarea1").html(alert1msg);
$("#alertarea1").slideDown("slow");
setTimeout(function(){
$("#alertarea1").slideUp("slow");
},5000);
}

function permalert(){
$("#alertarea1").html(alert1msg);
$("#alertarea1").slideDown("slow");
}


/***************BIG BLIND FUNCTION*****************/
function whatsbigblind(){
    var bigblind;
    var levelnum=document.getElementById("levelnum").innerHTML;

    /* BIGS */
    var lvl1big=document.getElementById("lvl1big").value;
    var lvl2big=document.getElementById("lvl2big").value;
    var lvl3big=document.getElementById("lvl3big").value;
    var lvl4big=document.getElementById("lvl4big").value;
    var lvl5big=document.getElementById("lvl5big").value;
    var lvl6big=document.getElementById("lvl6big").value;
    var lvl7big=document.getElementById("lvl7big").value;
    var lvl8big=document.getElementById("lvl8big").value;
    var lvl9big=document.getElementById("lvl9big").value;
    var lvl10big=document.getElementById("lvl10big").value;
    var lvl11big=document.getElementById("lvl11big").value;
    var lvl12big=document.getElementById("lvl12big").value;
    var lvl13big=document.getElementById("lvl13big").value;
    var lvl14big=document.getElementById("lvl14big").value;
    var lvl15big=document.getElementById("lvl15big").value;
    var lvl16big=document.getElementById("lvl16big").value;
    var lvl17big=document.getElementById("lvl17big").value;
    var lvl18big=document.getElementById("lvl18big").value;
    var lvl19big=document.getElementById("lvl19big").value;
    var lvl20big=document.getElementById("lvl20big").value;

    switch (levelnum) {
      case "1":bigblind = lvl1big;break;
      case "2":bigblind = lvl2big;break;
      case "3":bigblind = lvl3big;break;
      case "4":bigblind = lvl4big;break;
      case "5":bigblind = lvl5big;break;
      case "6":bigblind = lvl6big;break;
      case "7":bigblind = lvl7big;break;
      case "8":bigblind = lvl8big;break;
      case "9":bigblind = lvl9big;break;
      case "10":bigblind = lvl10big;break;
      case "11":bigblind = lvl11big;break;
      case "12":bigblind = lvl12big;break;
      case "13":bigblind = lvl13big;break;
      case "14":bigblind = lvl14big;break;
      case "15":bigblind = lvl15big;break;
      case "16":bigblind = lvl16big;break;
      case "17":bigblind = lvl17big;break;
      case "18":bigblind = lvl18big;break;
      case "19":bigblind = lvl19big;break;
      case "20":bigblind = lvl20big;break;
      default:bigblind = 1;
    }

    if (bigblind<= 1){
      bigblind = document.getElementById("bigblinddisplay").innerHTML;
    }
    document.getElementById("bigblinddisplay").innerHTML = bigblind;


}


/***************SMALL BLIND FUNCTION*****************/
function whatssmallblind(){
    var smallblind;
    var levelnum=document.getElementById("levelnum").innerHTML;

    /* SMALLS */
    var lvl1small=document.getElementById("lvl1small").value;
    var lvl2small=document.getElementById("lvl2small").value;
    var lvl3small=document.getElementById("lvl3small").value;
    var lvl4small=document.getElementById("lvl4small").value;
    var lvl5small=document.getElementById("lvl5small").value;
    var lvl6small=document.getElementById("lvl6small").value;
    var lvl7small=document.getElementById("lvl7small").value;
    var lvl8small=document.getElementById("lvl8small").value;
    var lvl9small=document.getElementById("lvl9small").value;
    var lvl10small=document.getElementById("lvl10small").value;
    var lvl11small=document.getElementById("lvl11small").value;
    var lvl12small=document.getElementById("lvl12small").value;
    var lvl13small=document.getElementById("lvl13small").value;
    var lvl14small=document.getElementById("lvl14small").value;
    var lvl15small=document.getElementById("lvl15small").value;
    var lvl16small=document.getElementById("lvl16small").value;
    var lvl17small=document.getElementById("lvl17small").value;
    var lvl18small=document.getElementById("lvl18small").value;
    var lvl19small=document.getElementById("lvl19small").value;
    var lvl20small=document.getElementById("lvl20small").value;

    switch (levelnum) {
      case "1":smallblind = lvl1small;break;
      case "2":smallblind = lvl2small;break;
      case "3":smallblind = lvl3small;break;
      case "4":smallblind = lvl4small;break;
      case "5":smallblind = lvl5small;break;
      case "6":smallblind = lvl6small;break;
      case "7":smallblind = lvl7small;break;
      case "8":smallblind = lvl8small;break;
      case "9":smallblind = lvl9small;break;
      case "10":smallblind = lvl10small;break;
      case "11":smallblind = lvl11small;break;
      case "12":smallblind = lvl12small;break;
      case "13":smallblind = lvl13small;break;
      case "14":smallblind = lvl14small;break;
      case "15":smallblind = lvl15small;break;
      case "16":smallblind = lvl16small;break;
      case "17":smallblind = lvl17small;break;
      case "18":smallblind = lvl18small;break;
      case "19":smallblind = lvl19small;break;
      case "20":smallblind = lvl20small;break;
      default:smallblind = 1;
    }

    if (smallblind<= 1){
      smallblind = document.getElementById("smallblinddisplay").innerHTML;
    }
    document.getElementById("smallblinddisplay").innerHTML = smallblind;
}


/**********************LEVEL TIME SWITCH CASE***********************/

function howlongislevel(){
  var levelnum=document.getElementById("levelnum").innerHTML;
    var levellength;

    var lvl1length=document.getElementById("lvl1time").value;
    var lvl2length=document.getElementById("lvl2time").value;
    var lvl3length=document.getElementById("lvl3time").value;
    var lvl4length=document.getElementById("lvl4time").value;
    var lvl5length=document.getElementById("lvl5time").value;
    var lvl6length=document.getElementById("lvl6time").value;
    var lvl7length=document.getElementById("lvl7time").value;
    var lvl8length=document.getElementById("lvl8time").value;
    var lvl9length=document.getElementById("lvl9time").value;
    var lvl10length=document.getElementById("lvl10time").value;
    var lvl11length=document.getElementById("lvl11time").value;
    var lvl12length=document.getElementById("lvl12time").value;
    var lvl13length=document.getElementById("lvl13time").value;
    var lvl14length=document.getElementById("lvl14time").value;
    var lvl15length=document.getElementById("lvl15time").value;
    var lvl16length=document.getElementById("lvl16time").value;
    var lvl17length=document.getElementById("lvl17time").value;
    var lvl18length=document.getElementById("lvl18time").value;
    var lvl19length=document.getElementById("lvl19time").value;
    var lvl20length=document.getElementById("lvl20time").value;
    /* BREAKS */
    var break1=document.getElementById("break1").value;
    var break2=document.getElementById("break2").value;
    var break3=document.getElementById("break3").value;

    switch (levelnum) {
      case "1":levellength = lvl1length;break;
      case "2":levellength = lvl2length;break;
      case "3":levellength = lvl3length;break;
      case "4":levellength = lvl4length;break;
      case "5":levellength = lvl5length;break;
      case "6":levellength = lvl6length;break;
      case "7":levellength = lvl7length;break;
      case "8":levellength = lvl8length;break;
      case "9":levellength = lvl9length;break;
      case "10":levellength = lvl10length;break;
      case "11":levellength = lvl11length;break;
      case "12":levellength = lvl12length;break;
      case "13":levellength = lvl13length;break;
      case "14":levellength = lvl14length;break;
      case "15":levellength = lvl15length;break;
      case "16":levellength = lvl16length;break;
      case "17":levellength = lvl17length;break;
      case "18":levellength = lvl18length;break;
      case "19":levellength = lvl19length;break;
      case "20":levellength = lvl20length;break;
      case "Break 1":levellength = break1;break;
      case "Break 2":levellength = break2;break;
      case "Break 3":levellength = break3;break;
    }

    if (levellength<= 0){
      levellength = document.getElementById("levellengthdisplay").innerHTML;
    }
    document.getElementById("levellengthdisplay").innerHTML = levellength;


}

/******Check user input function*******/
function checkuserinput(){
levelminutespassed = document.getElementById("leveltimerminutes").innerHTML;
setleveltime=document.getElementById("levellengthdisplay").innerHTML;
oldsmallblind=document.getElementById("smallblinddisplay").innerHTML;
oldbigblind=document.getElementById("bigblinddisplay").innerHTML;

  if (setleveltime<=levelminutespassed){
    cc1=-1;
    document.getElementById("leveltimerminutes").innerHTML=++cc1;
    document.getElementById("levelnum").innerHTML=++levelcc;

    whatssmallblind();
    whatsbigblind();
    howlongislevel();

    newsmallblind=document.getElementById("smallblinddisplay").innerHTML;
    newbigblind=document.getElementById("bigblinddisplay").innerHTML;

    if (newbigblind != oldbigblind){
      alert1msg="Blinds have changed";
      fivesecondalert();
      blindshavechanged.play();
      oldsmallblind=document.getElementById("smallblinddisplay").innerHTML;
      oldbigblind=document.getElementById("bigblinddisplay").innerHTML;
    }

    if (document.getElementById("levelnum").innerHTML==20){
      $("#inplay").hide();
      $("#alertarea1").slideDown("slow");
      $("#alertarea1").html("Game Over!");
      gamehasended.play();
    }

    if (document.getElementById("levelnum").innerHTML==6){
      if (break1==1){
        alert1msg="Break has ended";
        fivesecondalert();
        breakhasended.play();
      }

      if (break1==0){
        $("#levelnum").html("Break 1");
        levelcc=5;
        break1=1;
        whatssmallblind();
        whatsbigblind();
        howlongislevel();
        alert1msg="Break has started";
        fivesecondalert();
        breakhasstarted.play();
      }
    }

    if (document.getElementById("levelnum").innerHTML==11){
      if (break2==1){
        alert1msg="Break has ended";
        fivesecondalert();
        breakhasended.play();
      }

      if (break2==0){
      $("#levelnum").html("Break 2");
      levelcc=10;
      break2=1;
      whatssmallblind();
      whatsbigblind();
      howlongislevel();
      alert1msg="Break has started";
      fivesecondalert();
      breakhasstarted.play();
      }
    }
    if (document.getElementById("levelnum").innerHTML==16){
      if (break3==1){
        alert1msg="Break has ended";
        fivesecondalert();
        breakhasended.play();
      }

      if (break3==0){
      $("#levelnum").html("Break 3");
      levelcc=15;
      break3=1;
      whatssmallblind();
      whatsbigblind();
      howlongislevel();
      alert1msg="Break has started";
      fivesecondalert();
      breakhasstarted.play();
      }

    }

  }
}

/***********TIMER FUNCTION***************/
function timerstart(){

/******* SET VARS ************/

  /* Setting level time to 1 */
  var setleveltime=1;
  /* Setting the start point */
  var secondstarttime = Math.floor((new Date).getTime()/1000);
  /* Set 10 second ticker */
  var tensecondcc=0;
  var cc1=0;



/***** UPDATE PAGE *******/
  /* Setting the level 10 second timer to 0 */
  document.getElementById("leveltimertens").innerHTML=0;
  /* Setting the level second timer to 0 */
  document.getElementById("leveltimerseconds").innerHTML=0;

/***** ONE SECOND INTERVAL ****/
  setInterval(function(){
    /* Figure out what time it is now */
    var timenow=Math.floor((new Date).getTime()/1000);
    /* Calculate how many seconds it's been */

    if (paused==1){
      secondstarttime=secondstarttime+1;
    }

    var timedifference = timenow-secondstarttime;
    /* Update the second timer */
    document.getElementById("leveltimerseconds").innerHTML=timedifference;
    /* Check if 10 seconds have passed */
    if (timedifference>=10){
      /* Reset the start time */
    secondstarttime = Math.floor((new Date).getTime()/1000);
    /* Update the second timer to 0 */
    document.getElementById("leveltimerseconds").innerHTML=0;
    /* Update the 10 second ticker */
    document.getElementById("leveltimertens").innerHTML=++tensecondcc;
    /* Check if 10 second ticker is 6 or more */
    if (tensecondcc>=6){
      tensecondcc=0;
      document.getElementById("leveltimertens").innerHTML=0;
      document.getElementById("leveltimerminutes").innerHTML=++cc1;
    }
    /* Check against user input */
    checkuserinput();
    /* Stop checking if 10 seconds have passed */
    }

  /* Close the one second interval */
  },1000);





/*****************************/
















    /*************    TOTAL TIME   *************/

    /* Seconds */
    var totalsecondstarttime = Math.floor((new Date).getTime()/1000);
    document.getElementById("totaltimerseconds").innerHTML=0;

    setInterval(function(){
      var totaltimenow = Math.floor((new Date).getTime()/1000);
      var totaltimedifference = totaltimenow-totalsecondstarttime;
      document.getElementById("totaltimerseconds").innerHTML=totaltimedifference;
      if (totaltimedifference>=10){
      totalsecondstarttime = Math.floor((new Date).getTime()/1000);
      document.getElementById("totaltimerseconds").innerHTML=0;
      }
    },1000);

    /* Ten seconds */
    var totaltensecondstarttime = Math.floor((new Date).getTime()/10000);
    document.getElementById("totaltimertens").innerHTML=0;
    cc2=0;

    setInterval(function(){
      var totaltensecondtimenow = Math.floor((new Date).getTime()/10000);
      var totaltensecondtimedifference = totaltensecondtimenow-totaltensecondstarttime;
      document.getElementById("totaltimertens").innerHTML=totaltensecondtimedifference;
      if (totaltensecondtimedifference>=6){
      totaltensecondstarttime = Math.floor((new Date).getTime()/10000);
      document.getElementById("totaltimertens").innerHTML=0;
      document.getElementById("totaltimerminutes").innerHTML=++cc2;
      }
    },10000);
}

/*******BREAK SWITCHES******/
break1=0;
break2=0;
break3=0;



/************OPTIONAL INPUTS*********/
function setoptional(){
  gametitleinput=document.getElementById("gametitleinput").value;
  gamenoteinput=document.getElementById("gamenoteinput").value;

    $("#gametitleoutput").html(gametitleinput);
    $("#gamenoteoutput").html(gamenoteinput);
}



/*********YOU CLICKED YES***************/

$("#yesstart").click(function(){

  $("#confirmalert").hide();
  $("#startup").slideUp("slow");
  $("#inplay").show();
  $(".fa-play").hide();

  alert1msg="Game has started";
  gamehasstarted.play();
  fivesecondalert();




  timerstart()
  whatssmallblind();
  whatsbigblind();
  howlongislevel();
  setoptional();

  });

/* INPUT FUNCTIONS */


  $(".btn-success").click(function(){
    $("#confirmalert").slideDown();
    $(".btn-success").hide();
  });

  $("#nodontstart").click(function(){
    $(".btn-success").show();
    $("#confirmalert").slideUp();
  });


/* PAUSE AND PLAY */

$(".fa-pause").click(function(){
paused=1;
alert1msg="Game is paused";
gamehaspaused.play();
permalert();
$(".fa-pause").fadeOut('slow');
$(".fa-pause").promise().done(function(){
  $(".fa-play").show();
  });
});

$(".fa-play").click(function(){
paused=0;
alert1msg="Game is unpaused";
fivesecondalert();
gamehasbeenunpaused.play();
$(".fa-play").fadeOut('slow');
$(".fa-play").promise().done(function(){
  $(".fa-pause").show();
});
});
