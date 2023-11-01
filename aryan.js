/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

function $(x){
    switch (x[0]){
        case "#":
            var k=x.substr(1);
            return document.getElementById(k);
        case ".":
            var k=x.substr(1);
            return document.getElementsByClassName(k);
        default:
           return document.getElementsByTagName(x);
    }
}


// alert("Upvote if you like my game\n\nYou have a lamp so use it :)   (Move your finger on the screen)");
function randNum(){
    return Math.floor(Math.random()*10);
}

function go(event){
    var posX=event.touches[0].clientX;
    var posY=event.touches[0].clientY;
    $("#light").style.background=`radial-gradient(circle at ${posX}px ${posY}px ,rgba(255, 255, 140, 0.25) , transparent 20% , rgba(0 , 0 , 0 , 0.96) 30%)`;
}

function goPC(event){
    var posX=event.clientX;
    var posY=event.clientY;
    $("#light").style.background=`radial-gradient(circle at ${posX}px ${posY}px ,rgba(255, 255, 140, 0.25) , transparent 20% , rgba(0 , 0 , 0 , 0.96) 30%)`;
}


var p1=randNum();
var p2=randNum();
var p3=randNum();
//var p4=Math.floor(Math.random()*10);

function position(x,y){
    $(x).innerText=y;
    $(x).style.left=`calc(${Math.ceil(Math.random()*100)}% - 8px)`;
    $(x).style.top=`calc(${Math.ceil(Math.random()*90)}% - 8px)`;
}

function begin(){
    position("#l1",p1);
    position("#l2",p2);
    position("#l3",p3);
    //position("l4",p4);
}

window.onload=function(){
    $("#info").addEventListener("click",rules)
    $("#light").addEventListener("touchmove",function(){
        go(event);
    })
    $("#load").style.opacity="0";
    $("#load").style.transform="translate(-50% , -50%) rotate(-7deg) scale(0)";
    $("#closed").style.left="-100%";
    begin();
    $("#save").addEventListener("click",enterPassword);
    $("#room").addEventListener("dblclick",hiddenClue);
    $("#light").addEventListener("mousemove",function(){
        goPC(event)
    })
}

//dblclick to access this.
function hiddenClue(){
    for(k=0; k< $(".l").length; k++){
        $(".l")[k].style.textShadow="0 0 1px red";
        setTimeout(function(){
            for(k=0; k< $(".l").length; k++){
                $(".l")[k].style.textShadow="none";
                $("#room").removeEventListener("dblclick",hiddenClue);
            }//end of second for.
        },450)//end of timer.
    }//end of first for
}//end of function


//3! possible passwords.
var life=5;
function enterPassword(){
    if ($("#password").value==`${p1}${p2}${p3}` || $("#password").value==`${p1}${p3}${p2}` || $("#password").value==`${p2}${p1}${p3}` /*|| $("#password").value==`${p2}${p3}${p1}` || $("#password").value==`${p3}${p2}${p1}` || $("#password").value==`${p3}${p1}${p2}`*/){
        $("#failed").style.transform="translate(-50% , -50%) rotate(-7deg) scale(1)";
        $("#failed").style.opacity="1";
        $("#failed").style.color="green";
        $("#failed").innerText="You Win!";
        $("#save").removeEventListener("click",enterPassword);
        $("#replayButton").style.top="10%";
        $("#replayButton").innerText="Next Level";
    }
    else{
        $(".dot")[life].style.backgroundColor="red";
        life--;
    }
    if (life < 0){
        $("#failed").style.color="red";
        $("#failed").innerText="Game Over";
        $("#failed").style.transform="translate(-50% , -50%) rotate(-7deg) scale(1)";
        $("#failed").style.opacity="1";
        $("#save").removeEventListener("click",enterPassword);
        $("#replayButton").style.top="10%";
        $("#replayButton").innerText="Replay";
    }
    $("#password").value="";
}


function replay(){
    life=5;
    for(k=0; k<$(".dot").length; k++){
        $(".dot")[k].style.backgroundColor="green";
        $("#failed").style.opacity="0";
        $("#failed").style.transform="translate(-50% , -50%) rotate(-7deg) scale(0)";
    }
    p1=randNum();
    p2=randNum();
    p3=randNum();
    begin();
    $("#room").addEventListener("dblclick",hiddenClue);
    $("#save").addEventListener("click",enterPassword);
    $("#replayButton").style.top="180%";
}

//remember to add different stages.

function rules(){
    alert("The rules:\n\n * You have to find 3 numbers hidden in that place.\n * You have to form a password from those 3 numbers and enter it.\n * Remember, there are 6 possible passwords.\n\nBonus:\n\n * For easier game mode uncomment Javascript line 87.\n * For even easier game, delete Javascript line 77.\n * You can use one hint per round by double clicking the screen.\n * If you like my game please upvote.  :)")
}

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/