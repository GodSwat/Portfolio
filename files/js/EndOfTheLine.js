let OFFbutton = document.getElementById('OFF');
let ONbutton = document.getElementById('ON');

function EOTLswitch(border, finalebg, textcolor, finalemessage, MMbg, TDbg, AWbg, boxshadow, finaletextsize, finaleborder, zindex, transparentbg, ONcolor, ONbg, ONshadow, ONpointer, OFFcolor, OFFbg, OFFshadow, OFFpointer, currentstatus, hidepointer){
    let creditwindow = document.getElementById('credit');
    let AWwindow = document.getElementById('additionalworks');
    let finale = document.getElementById('finale');
    let finaletext = document.getElementById('finaletext');
    let switchstatus = document.getElementById('switchOFFstatus');

    ONbutton.style.color=ONcolor;
    ONbutton.style.background=ONbg;
    ONbutton.style.boxShadow=ONshadow;
    ONbutton.style.cursor=ONpointer;

    OFFbutton.style.color=OFFcolor;
    OFFbutton.style.background=OFFbg;
    OFFbutton.style.boxShadow=OFFshadow;
    OFFbutton.style.cursor=OFFpointer;

    creditwindow.style.border=border;
    creditwindow.style.color=textcolor;

    document.getElementById('thanksMarazza').style.border=border;
    document.getElementById('thanksMarazza').style.background=MMbg;
    document.getElementById('thanksMarazza').style.boxShadow=boxshadow;
    document.getElementById('thanksMarazza').style.cursor=hidepointer;


    document.getElementById('AWimg').style.border=border;
    document.getElementById('AWimg').style.boxShadow=boxshadow;
    document.getElementById('AWimg').style.background=AWbg;
    document.getElementById('AWimg').style.cursor=hidepointer;

    document.getElementById('thanksTD').style.border=border;
    document.getElementById('thanksTD').style.boxShadow=boxshadow;
    document.getElementById('thanksTD').style.background=TDbg;
    document.getElementById('thanksTD').style.cursor=hidepointer;

    document.getElementById('switchOFF').style.zIndex=zindex;
    creditwindow.style.zIndex=zindex;
    AWwindow.style.zIndex=zindex;
    finale.style.zIndex=zindex;

    creditwindow.style.backgroundColor=transparentbg;
    AWwindow.style.backgroundColor=transparentbg;
    finale.style.backgroundColor=transparentbg;

    AWwindow.style.border=border;
    AWwindow.style.color=textcolor;    

    finale.style.border=finaleborder;
    finale.style.backgroundColor=finalebg;
    finale.style.color=textcolor;
    finaletext.innerHTML=finalemessage;
    finaletext.style.fontSize=finaletextsize;
    finaletext.style.color="white";

    switchstatus.innerHTML=currentstatus;
}

ONbutton.addEventListener('click', function(){
    EOTLswitch(
       "white solid 2px", "rgba(0, 0, 0, 0.76)", "white", '"Bis Vincit, Qui Se Vincit In Victoria"', "url(/files/images/MM.webp)", "url(/files/images/T.webp","url(/files/images/comingsoon.webp", "white 5px 5px 8px", "5.1rem", "white solid 2px", "6", "", "white", "#00ff00", "0 0 10px #00ff00, 0 0 40px #00ff00, 0 0 80px #00ff00", "not-allowed","#ff0000", "black", "none", "pointer", "The switch is now <span id='statuscolor'>ON</span>.", "pointer"
    )
    let switchstatus = document.getElementById('statuscolor');
    switchstatus.style.color="#00ff00";
})

OFFbutton.addEventListener('click', function(){
    EOTLswitch(
       "transparent solid 2px", "rgba(0, 0, 0, 0.76)", "transparent", "Thank you for your time and checking out my site, hope you've liked it!", "none","none", "none", "transparent 5px 5px 8px", "", "", "", "transparent", "#00ff00", "black", "none", "pointer" ,"white", "#ff0000", "0 0 10px #ff0000, 0 0 40px #ff0000, 0 0 80px #ff0000", "not-allowed", "The switch is now <span id='statuscolor'>OFF</span>.", "default"
    )
})