//change the background of canvas when button is clicked
let htmlbutton = document.getElementById('html');
let cssbutton = document.getElementById('css');
let jsbutton = document.getElementById('js');
let bsbutton = document.getElementById('bootstrap');
let reactbutton = document.getElementById('react');
let tsbutton = document.getElementById('TS');
let sassbutton = document.getElementById('sass');
let gitbutton = document.getElementById('git');
let VScodebutton = document.getElementById('VScode');

var aux = 0;   
var t;


    function buttonswitch(addborder, backgroundadd, buttonfadein, zindex, buttontext, SMPTEbars, buttoncolor, buttonfontcolor, buttonfontsize, buttonfontweight, buttontextshadow, buttonlineheight, textboxfontsize, textboxdescription
    ){
        let btnicon = document.getElementById('reflection-wrapper');
        let background = document.getElementById("reflection");
        let infobox = document.getElementById("btn-info-text");
        let whitenoise = document.getElementById("knowledge-box");
        let fadeintext = document.getElementById("btn-info");
            if (aux = 0) {
                document.getElementById("static").style.visibility="hidden";
                document.getElementById("scan").style.visibility="hidden";                
                aux = 1;
            } 


          
            background.style.border=addborder;
            background.classList.add(backgroundadd);
            background.style.animation=buttonfadein;

            fadeintext.style.animation=buttonfadein;
            
            btnicon.style.zIndex=zindex;           
            btnicon.style.animation=buttonfadein;
            btnicon.innerHTML=buttontext;
            btnicon.style.backgroundImage=SMPTEbars;
            btnicon.style.backgroundColor=buttoncolor;
            btnicon.style.color=buttonfontcolor;
            btnicon.style.fontSize=buttonfontsize;
            btnicon.style.fontWeight=buttonfontweight;
            btnicon.style.textShadow=buttontextshadow;
            btnicon.style.lineHeight=buttonlineheight;


            infobox.style.animation=buttonfadein;        
            infobox.style.fontSize=textboxfontsize;
            infobox.innerHTML=textboxdescription;
            


            btnicon.style.fontFamily="'Press Start 2P', cursive";
            btnicon.classList.add('no-before');  //Remove before
            document.getElementById("wavy").style.display="none"; 
            btnicon.style.display="flex";
            btnicon.style.justifyContent="center";
            btnicon.style.alignItems="center";
            btnicon.style.flexDirection="column";
            btnicon.style.border="none";
            whitenoise.style.animation= "white-noise 1.2s ease 1";
            infobox.style.animation="shine 1.2s ease infinite"
            btnicon.style.animation="buttonreflectiontextanim 3s ease-out infinite";
        }




htmlbutton.addEventListener('click', function(){
    buttonswitch(
        "black solid 10px", "htmlbg", "hide 0.5s ease-in 1", "2", "HTML <i class='fas fa-code' style='font-size:5rem'></i>", "none", "black", "white", "3rem", "600", "2px 2px 5px orange, 3px 3px 4px orange, 4px 4px 5px orange", "5rem", "1.7rem", "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."
    )
    let background = document.getElementById("reflection");
    background.classList.remove("cssbg");
    background.classList.remove("jsbg");
    background.classList.remove("bsbg");
    background.classList.remove("reactbg");
    background.classList.remove("tsbg");
    background.classList.remove("sassbg");
    background.classList.remove("gitbg");
    background.classList.remove("VScodebg");
})

cssbutton.addEventListener('click', function(){
    buttonswitch(
        "black solid 10px", "cssbg", "hide 0.5s ease 1", "2","CSS<i class='fab fa-css3' style='font-size:5rem'></i>", "none", "black", "white", "3rem", "600", "2px 2px 3px blue, 3px 3px 4px blue, 4px 4px 5px blue", "4rem", "1.7rem", "'Stands for 'Cascading Style Sheet.' Cascading style sheets are used to format the layout of Web pages. They can be used to define text styles, table sizes, and other aspects of Web pages that previously could only be defined in a page's HTML."
    )
    let background = document.getElementById("reflection");
    background.classList.remove("jsbg");
    background.classList.remove("bsbg");
    background.classList.remove("reactbg");
    background.classList.remove("tsbg");
    background.classList.remove("sassbg");
    background.classList.remove("gitbg");
    background.classList.remove("VScodebg");
})

jsbutton.addEventListener('click', function(){
    buttonswitch(
        "black solid 10px", "jsbg", "hide 0.5s ease 1", "2", "<p style='text-align:center'>JavaScript <span style='font-size:6rem'>JS</span></p>", "none", "black", "white", "1.4rem", "600", "2px 2px 3px #bab449, 3px 3px 4px #bab449, 4px 4px 5px #bab449", "5rem", "1.7rem", "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS."
    )
    let background = document.getElementById("reflection");
    background.classList.remove("bsbg");
    background.classList.remove("reactbg");
    background.classList.remove("tsbg");
    background.classList.remove("sassbg");
    background.classList.remove("gitbg");
    background.classList.remove("VScodebg");
})

bsbutton.addEventListener('click', function(){
    buttonswitch(
        "black solid 10px", "bsbg", "hide 0.5s ease 1", "2", "Bootstrap <i class='fab fa-bootstrap' style='font-size:9rem'></i>", "none", "black", "white", "1.4rem", "600", "2px 2px 3px #9312de, 3px 3px 4px #9312de, 4px 4px 5px #9312de", "4rem", "1.7rem", "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components."
    )
    let background = document.getElementById("reflection");
    background.classList.remove("reactbg");
    background.classList.remove("tsbg");
    background.classList.remove("sassbg");
    background.classList.remove("gitbg");
    background.classList.remove("VScodebg");
})

reactbutton.addEventListener('click', function(){
    buttonswitch(
        "black solid 10px", "reactbg", "hide 0.5s ease 1", "2", "React.js <i class='fab fa-react' style='font-size:9rem'></i>", "none", "black", "white", "1.7rem", "600", "2px 2px 3px #47e2ed, 3px 3px 4px #47e2ed, 4px 4px 5px #47e2ed", "4rem", "1.6rem", "React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application’s view layer. In Model View Controller (MVC) architecture, the view layer is responsible for how the app looks and feels. "
    )
    let background = document.getElementById("reflection");
    background.classList.remove("tsbg");
    background.classList.remove("sassbg");
    background.classList.remove("gitbg");
    background.classList.remove("VScodebg");
})

tsbutton.addEventListener('click', function(){
    buttonswitch(
        "black solid 10px", "tsbg", "hide 0.5s ease 1", "2", "<p style='text-align:center'>TypeScript <span style='font-size:6rem'>TS</span></p>", "none", "black", "white", "1.4rem", "600", "2px 2px 3px #126ade, 3px 3px 4px #126ade, 4px 4px 5px #126ade", "5rem", "1.7rem", "TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code."
    )
    let background = document.getElementById("reflection");
    background.classList.remove("sassbg");
    background.classList.remove("gitbg");
    background.classList.remove("VScodebg");
})

sassbutton.addEventListener('click', function(){
    buttonswitch(
        "black solid 10px", "sassbg", "hide 0.5s ease 1", "2","SASS <i class='bx bxl-sass' style='font-size:9rem'></i>", "none", "black", "white", "3rem", "600", "2px 2px 3px #ad0c98, 3px 3px 4px #ad0c98, 4px 4px 5px #ad0c98", "4rem", "1.7rem", "Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster."
    )
    let background = document.getElementById("reflection");
    background.classList.remove("gitbg");
    background.classList.remove("VScodebg");
})

gitbutton.addEventListener('click', function(){
    buttonswitch(
        "black solid 10px", "gitbg", "hide 0.5s ease 1", "2", "Git <i class='fab fa-git-alt' style='font-size:9rem'></i>", "none", "black", "white", "3rem", "600", "2px 2px 3px #ed4c07, 3px 3px 4px #ed4c07, 4px 4px 5px #ed4c07", "4rem", "1.6rem", "Git is the most commonly used version control system. Git tracks the changes you make to files, so you have a record of what has been done, and you can revert to specific versions should you ever need to. Git also makes collaboration easier, allowing changes by multiple people to all be merged into one source."
    )
    let background = document.getElementById("reflection");
    background.classList.remove("VScodebg");
})

VScodebutton.addEventListener('click', function(){
    buttonswitch(
        "black solid 10px", "VScodebg", "hide 0.5s ease 1", "2", "VScode<i class='bx bxl-visual-studio' style='font-size:9rem'></i>", "none", "black", "white", "2rem", "600", "2px 2px 3px #329fd1, 3px 3px 4px #329fd1, 4px 4px 5px #329fd1", "4rem", "1.7rem", "Visual Studio Code is a lightweight but powerful source code editor. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). "
    )
})

document.getElementById("knowledge-box").addEventListener("animationend", function(){
    document.getElementById("knowledge-box").style.animation="running"; // animation is end
  });

  document.getElementById("btn-info").addEventListener("animationend", function(){
    document.getElementById("btn-info").style.animation="running";
  });
document.getElementById('reflection-wrapper').addEventListener("animationend", function(){
    document.getElementById('reflection-wrapper').style.animation="running";
});

document.getElementById('reflection').addEventListener("animationend", function(){
    document.getElementById('reflection').style.animation="running";
});

document.getElementById('btn-info-text').addEventListener("animationend",
function(){
    document.getElementById('btn-info-text').style.animation="running";
})
