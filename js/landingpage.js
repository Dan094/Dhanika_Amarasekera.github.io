var innerBox = document.querySelector(".innerBox");
var catbox = document.querySelector(".catbox");
var poster = document.querySelector(".poster");

var gallerysection = document.querySelector("#gallery");


// Go to Catagory Section  

var posters = document.getElementById('posters');
var postersCat = document.getElementById('posterCat');




var arrowbut = document.getElementById('#arrow');

function catShow (){
    window.scrollTo({
         top: 1000,
         behavior: 'smooth'
    });
}


// Landingpage image slide show

$(document).ready(function(){
          $(function(){

        var dataArray=new Array();
              
        dataArray[0]="imgs/img0.png";
        dataArray[1]="imgs/img1.png";
        dataArray[2]="imgs/img2.png";
        dataArray[3]="imgs/img3.png";
        dataArray[4]="imgs/img4.png";
        dataArray[5]="imgs/img5.png";
              
        var Num=0;

        window.setInterval(function(){
            $('#skull').attr('src',dataArray[Num]);
            Num++; 
            if (Num==6) Num=0; 
        },5000);   
              
               $("#skull").animate({opacity: "1"});
              
    });
    
    })


// === Landing page element move left


var aboutMeImg = document.getElementById('BioImg');
var aboutDesb = document.getElementById('BioDesb');
var aboutPage = document.querySelector('.AboutMe');
var SocialLinks = document.querySelector('.ContactFrom');
var InquieryForm = document.querySelector('.inquieryForm');

function moveElements () {
    
  
var Bigtext = document.querySelector('#container');
var floatingImg = document.querySelector('#floatingImg');
var textbox = document.querySelector('#text');
    
  Bigtext.style.animationName = "logoMovement";
  Bigtext.style.animationDuration = "1100ms";
  Bigtext.style.animationIterationCount  = "1";

    
  floatingImg.style.animationName = "moveout";
  floatingImg.style.animationDuration = "1100ms";
  floatingImg.style.animationIterationCount= "1";
     
  textbox.style.animationName = "moveout";
  textbox.style.animationDuration = "1100ms";
  textbox.style.animationIterationCount= "1";
  textbox.style.animationDelay= "0ms";
    
  // show all about me page elements
   
  aboutMeImg.style.animationName="imgAppear";
  aboutMeImg.style.animationDuration="1200ms";

  aboutDesb.style.animationName="moveUp";
  aboutDesb.style.animationDuration="1000ms";
    
    // show all social link page elements
    
  SocialLinks.style.animationName ="closeSocialLinks";
  SocialLinks.style.animationDuration ="1000ms";

      
  InquieryForm.style.animationName ="removeInquiery";
  InquieryForm.style.animationDuration ="1000ms";  


}

function showElements () {
    
  
var Bigtext = document.querySelector('#container');
var floatingImg = document.querySelector('#floatingImg');
var textbox = document.querySelector('#text');
    
    
    Bigtext.style.animationName = "logoMovementBack";
  Bigtext.style.animationDuration = "1100ms";
  Bigtext.style.animationIterationCount  = "1";
    
  floatingImg.style.animationName = "movein";
  floatingImg.style.animationDuration = "1100ms";
  floatingImg.style.animationIterationCount= "1";
     
  textbox.style.animationName = "movein";
  textbox.style.animationDuration = "1100ms";
  textbox.style.animationIterationCount= "1";
  textbox.style.animationDelay= "0ms";

  aboutMeImg.style.animationName="imgDisappear";
  aboutMeImg.style.animationDuration="1200ms";
    
  aboutDesb.style.animationName="moveDown";
  aboutDesb.style.animationDuration="1200ms";
    
 // show all social link page elements
    
  SocialLinks.style.animationName ="closeSocialLinks";
  SocialLinks.style.animationDuration ="1000ms";
    
     
  InquieryForm.style.animationName ="removeInquiery";
  InquieryForm.style.animationDuration ="1000ms";

}
    

function closeAboutMe () {
    
  
var floatingImg = document.querySelector('#floatingImg');
var textbox = document.querySelector('#text');
var Bigtext = document.querySelector('#container');

    
    
  Bigtext.style.animationName = "logoMovement";
  Bigtext.style.animationDuration = "1100ms";
  Bigtext.style.animationIterationCount  = "1";
    
  floatingImg.style.animationName = "moveout";
  floatingImg.style.animationDuration = "1100ms";
  floatingImg.style.animationIterationCount= "1";
     
  textbox.style.animationName = "moveout";
  textbox.style.animationDuration = "1100ms";
  textbox.style.animationIterationCount= "1";
  textbox.style.animationDelay= "0ms";

  aboutMeImg.style.animationName="imgDisappear";
  aboutMeImg.style.animationDuration="1200ms";
    
  aboutDesb.style.animationName="moveDown";
  aboutDesb.style.animationDuration="1200ms";
    
    
   // show all social link page elements
    
  SocialLinks.style.animationName ="bringSocialLinks";
  SocialLinks.style.animationDuration ="1000ms";
     
  InquieryForm.style.animationName ="bringInquiery";
  InquieryForm.style.animationDuration ="1000ms";
  

}
  

var DarkMode = document.querySelector('.darkModeBut');

var ld = document.getElementById('ld');
var la = document.getElementById('la');
var ln = document.getElementById('ln');
var st1 = document.getElementById('st1');
var st2 = document.getElementById('st2');


var theme = 0;
var theme = 1;

DarkMode.addEventListener('click', function(){
    theme = 0
    
    if (theme == 0 ){
        
        DarkMode.src="svgs/icons/Normalmode.svg"
        document.body.style.backgroundColor = "#313131";
        document.body.style.color = "white";
        ld.src="svgs/W_letterD.svg";
        la.src="svgs/W_letterA.svg";
        ln.src="svgs/W_letterN.svg";
        st1.src="svgs/W_letterstroke.svg";
        st2.src="svgs/W_letterstrokeb.svg";
        
    } else if (theme == 1 ) {
        DarkMode.src="svgs/icons/Normalmode.svg"
        document.body.style.backgroundColor = "white";
        document.body.style.color = "white";
        ld.src="svgs/letterD.svg";
        la.src="svgs/letterA.svg";
        ln.src="svgs/letterN.svg";
        st1.src="svgs/letterstroke.svg";
        st2.src="svgs/letterstrokeb.svg";
    }
    
});


function hamBut() {
    var menu = document.querySelector('.menu');
    var closeBut = document.querySelector('.close');
    var st1 = document.querySelector('.str1');
    var st2 = document.querySelector('.str2');
    var st3 = document.querySelector('.str3');
    st1.classList.toggle('stroke1');
    st2.classList.toggle('stroke2');
    st3.classList.toggle('stroke3');
    menu.classList.toggle('move');

   
}

function closeHamBut (){
    menu.style.display = "none";
}



var PpDiv = document.querySelector(".displayContent");

/* grabbing all portfolio pieces */

var pp1 = document.getElementById("imgP1");
var pp2 = document.getElementById("imgP2");

 

var ppImg = document.querySelector(".pImg");

/* close portfolio piece */ 
function openPp (img) {

var imgs = document.querySelector(".imgs");
var title = document.querySelector(".pTitle");
var info = document.querySelector(".pInfo");
var moreImg = document.querySelector(".moreImg");
    
PpDiv.style.visibility = "visible";
ppImg.src = img.src;
    
if (img.id== "imgP1") {
    title.innerText = "Dream World Poster";
    info.innerText = "This Illustration was done as an assisgment for my vector graphics course. The main purpose of this project was to an iconic world of my own. This artwork was created using Adobe Illustrator with tools such as the pentool, shapes and gradient. I also incorporate my low-poly style to personalize";
    moreImg.innerHTML = '<img src="imgs/posters/img2.jpg" class="mimg" alt="artwork">' ;
    moreImg.style.display = 'flex';
} else if (img.id=="imgP2") {
    title.innerText = "Open Your Mind";
    info.innerText = "One of my first artowork created with Adobe IllustLow Poly Style Print, This was an experiment in using the low-poly technique that I got inspired. From this onwards I continued to use the low-Poly design for most of my artwork. ";
    moreImg.style.display = 'none';
}else if (img.id=="imgP3") {
    title.innerText = "Typography Poster";
    info.innerText = "The purpose of this assisgnment was to become adept using the Type Tool, Character Panel, Paragraph Panel, Paragraph and Character Styles and using typefaces in Illustrator to create compelling designs. This assisgnment was restracted to The purpose of this exercise is to become adept using the Type Tool, Character Panel";
     moreImg.innerHTML = '<img src="imgs/dark2.jpg" class="mimgs" alt="artwork"></img>';
    }
else if (img.id=="imgP4") {
        title.innerText = "The Higher Once: Collection of five";
        info.innerText = "This was from one of the artwork collections that I did that consists of 5 art pieces. This was my favorite out of the 5. I used the low-poly technique for this and abit of gradient and noise texture. ";
        }
else if (img.id=="imgP5") {
            title.innerText = "Typographical Posters";
            info.innerText = "This is another artwork that I did for my assisgnments.";
            }
else if (img.id=="imgP6") {
                title.innerText = "PrepMe: Web Application";
                info.innerText = "PrepMe is an food app that helps amature users to do basic food preparion. The application is contains illustrations with clean animations. The overal design of the application is kept minimal for the users.";
                }
}



/* close portfolio piece */
function closePp () {
PpDiv.style.visibility = "hidden";
   
}













