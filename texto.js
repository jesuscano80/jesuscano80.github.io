$(document).ready(function() {

  

    //first text
    const text1 = ['Hola, soy Jesús!'];
    const lettersText = text1[0];
    const numberLetters = lettersText.length;
    
    //second text
    const text2 = [' Soy full-stack developer, ¿te ayudo?'];
    const lettersText2 = text2[0];
    const numberLetters2 = lettersText2.length;
      
    //conversion into an array
    const text1Array = [];
    const text2Array = [];
    
    const addLettersToArray = function(arr, number, text){
      for(let i = 0; i < number; i++) {      
        arr.push(text[i]);      
      }    
    }; 
    
    //typing letters
    const autotyping = function(arr){   
      for(let i = 0; i < arr.length; i++) {
        setTimeout( function() {        
          $('.text').append(arr[i]);
         }, i*150);          
      }     
    }
    
    //removing letters 
    const removeLettersFromArray = function(arr){
      for(let i = 0; i < arr.length; i++) {
        setTimeout(function() {
          arr.pop();        
          $('.text').empty();
          $('.text').append(arr);
        }, i*150);
      }  
    };   
    
    //wykonanie
    const start = function(){
      addLettersToArray(text1Array, numberLetters, lettersText);
      addLettersToArray(text2Array, numberLetters2, lettersText2);
      autotyping(text1Array);
      setTimeout(function(){
        removeLettersFromArray(text1Array);
      }, numberLetters*100+1000)
      setTimeout(function(){
        autotyping(text2Array);
      }, numberLetters2*150+1000);
    } 
    
    start(); 

    
  
  });
// ACTIVA TOOLTIPS
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // $("button").hover(function(){
  //   $(this).css("background-color", "white").css("color", "#43A6CC" );
  //   }, function(){
  //   $(this).css("background-color", "#43A6CC").css("color", "white");
  // });

$("#hola").click(function(){
  $(this).toggleClass("animate__animated animate__bounce");
})  

$("input").focus(function(){
  $(this).toggleClass("animate__animated animate__bounce");
})

$("i").hover(function(){
  $(this).toggleClass("opa");
})

window.sr = ScrollReveal();
sr.reveal('#micara', {
  duration: 5000,
  origin: 'bottom',
  distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('.fa-html5', {
  duration: 3000,
  origin: 'left',
  distance: '100px'
});

window.sr = ScrollReveal();
sr.reveal('.fa-css3-alt', {
  delay:300,
  duration: 3000,
  origin: 'bottom',
  distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('.fa-js', {
  delay:600,
  duration: 3000,
  origin: "bottom",
  distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('.fa-js', {
  delay:900,
  duration: 3000,
  origin: "bottom",
  distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('.fa-git-alt', {
  delay:1200,
  duration: 3000,
  origin: "right",
  distance: '100px'
});

window.sr = ScrollReveal();
sr.reveal('.fa-angular', {
  delay:1500,
  duration: 3000,
  origin: "right",
  distance: '-100px'
});

window.sr = ScrollReveal();
sr.reveal('.fa-bootstrap', {
  delay:1800,
  duration: 3000,
  origin: "bottom",
  distance: '100px'
});

window.sr = ScrollReveal();
sr.reveal('.fa-node-js', {
  delay:2100,
  duration: 3000,
  origin: "bottom",
  distance: '100px'
});

window.sr = ScrollReveal();
sr.reveal('.ts', {
  delay:2100,
  duration: 3000,
  origin: "right",
  distance: '100px'
});