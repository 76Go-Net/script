const closemenu = document.querySelector(".closemenu");
const menu = document.getElementById('menu');
var cpu = 0;
const nav = document.querySelector("nav");
const navicon=document.querySelector(".choiceable");
var icon=navicon.getElementsByTagName("img");
const systemcontrols =document.getElementById("SystemControls");
var arrow= systemcontrols.getElementsByTagName("div");
const select =[
    {
        option :"Sharmel"
    },
     {
         option:"Personal Infomation"
     },
     {
         option:"Following Pages"
     },
     {
         option:"System Theme"
     },
     {
         option:"System Controls"
     },
     {
         option:"Report Problem"
     },
     {
         option:"Terms and Policy"
     },
     {
         option:"What is new"
     }
    ];
function menution(){
    cpu += 1;
    menu.classList.add("closemenu");
    nav.style.right = 0;
    if (cpu == 2) {
        nav.style.right=-330;
        menu.classList.remove("closemenu");
        return cpu = 0;
    }
}
window.onload = function() {
    let body = document.querySelector("body");
    body.style.width = window.innerWidth;
    body.style.height = window.innerHeight;
      try {
          icon[0].src="Source/error.jpg";
          icon[1].src="Source/error.jpg";
          icon[2].src="Source/error.jpg";
          icon[3].src="Source/error.jpg";
      } catch (e) {
          alert(e);
      }
    let settings =select.map(function(opt){
        return "<div class='options'>"+"<span>"+"&rightarrow;"+"</span>"+opt.option+"</div>";
    });
    systemcontrols.innerHTML=settings.join(" ");
    for (var i = 0; i <arrow.length; i++) {
        arrow[1].onmouseover=()=>{
            open("https://link25.github.io/personal.html");
            arrow[1].style.background="#949494";
            menution();
            setTimeout(function() {
                arrow[1].style.background="white";
            },2100);
        }
        arrow[2].onmouseover=()=>{
            open("https://link25.github.io/follow_pages.html");
             arrow[2].style.background="#949494";
            menution();
             setTimeout(function() {
                arrow[2].style.background="white";
            },2100);
        }
        arrow[3].onmouseover =()=>{
             open("https://link25.github.io/SystemTheme.html");
              arrow[3].style.background="#949494";
            menution();
             setTimeout(function() {
                arrow[3].style.background="white";
            },2100);
        }
        arrow[4].onmouseover=()=>{
             open("https://link25.github.io/SystemControls.html");
              arrow[4].style.background="#949494";
            menution();
             setTimeout(function() {
                arrow[4].style.background="white";
            },2100);
        }
        arrow[5].onmouseover =()=>{
             open("https://link25.github.io/rp.html");
              arrow[5].style.background="#949494";
            menution();
             setTimeout(function() {
                arrow[5].style.background="white";
            },2100);
        }
        arrow[6].onmouseover =()=>{
             open("https://link25.github.io/tnp.html");
              arrow[6].style.background="#949494";
            menution();
             setTimeout(function() {
                arrow[6].style.background="white";
            },2100);
        }
        arrow[7].onmouseover =()=>{
             open("https://link25.github.io/new.html");
              arrow[7].style.background="#949494";
            menution();
             setTimeout(function() {
                arrow[7].style.background="white";
            },2100);
        }
        }
    }
  
 function opento(i){
     switch (i) {
         case 0:
            open("https://www.google.com/");
             break;
        case 1:
            open("https://hub.github.io/uptodate/");
            break;
        case 2:
            open("https://word.github.io/word/");
            break;
        case 3:
            open("https://search/github.io/search/")
     }

 }
 