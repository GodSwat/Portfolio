var htmlanim = document.getElementById("html");
var cssanim = document.getElementById("css");
var jsanim = document.getElementById("js");
var bsanim = document.getElementById("bootstrap");
var reactanim = document.getElementById("react");
var tsanim = document.getElementById("TS");
var sassanim = document.getElementById("sass");
var gitanim = document.getElementById("git");
var VScodeanim = document.getElementById("VScode");

var aux = 0;

setInterval(function(){
    if (aux > 8) {
        aux = 0;
    }    
    switch(aux) {
        case 0:
            htmlanim.style.animation="htmltransition 1s ease-out 1";
             break;
        case 1:
            cssanim.style.animation="csstransition 1s ease-out 1";
             break;
        case 2:
            jsanim.style.animation="jstransition 1s ease-out 1";
             break;
        case 3:
            bsanim.style.animation="bstransition 1s ease-out 1";
             break;
        case 4:
            reactanim.style.animation="reacttransition 1s ease-out 1";
             break;
        case 5:
            tsanim.style.animation="tstransition 1s ease-out 1";
             break;
        case 6:
            sassanim.style.animation="sasstransition 1s ease-out 1";
            break;
        case 7:
            gitanim.style.animation="gittransition 1s ease-out 1";
            break;
        case 8:
            VScodeanim.style.animation="VScodetransition 1s ease-out 1";
            break;
    }
        aux = aux+1; 
}, 500)

htmlanim.addEventListener("animationend", function(){
    htmlanim.style.animation="running"; // animation is end
  });
  cssanim.addEventListener("animationend", function(){
    cssanim.style.animation="running"; // animation is end
  });

  jsanim.addEventListener("animationend", function(){
    jsanim.style.animation="running"; // animation is end
  });

  bsanim.addEventListener("animationend", function(){
    bsanim.style.animation="running"; // animation is end
  });

  reactanim.addEventListener("animationend", function(){
    reactanim.style.animation="running"; // animation is end
  });

  tsanim.addEventListener("animationend", function(){
    tsanim.style.animation="running"; // animation is end
  });

  sassanim.addEventListener("animationend", function(){
    htmlanim.style.animation="running"; // animation is end
  });

  sassanim.addEventListener("animationend", function(){
    sassanim.style.animation="running"; // animation is end
  });

  gitanim.addEventListener("animationend", function(){
    gitanim.style.animation="running"; // animation is end
  });

  VScodeanim.addEventListener("animationend", function(){
    VScodeanim.style.animation="running"; // animation is end
  });




