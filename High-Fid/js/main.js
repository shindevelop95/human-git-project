//Selectors
$(function(){
    AOS.init({
        easing:'ease',
        duration:1000
    });
  });

let header=document.querySelector('.header');
let hamburgerMenu=document.querySelector('.hamburger-menu');


window.addEventListener('scroll',function(){
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('actives', windowPosition)
})
hamburgerMenu.addEventListener('click',function()
{
    header.classList.toggle('menu-open');
})



$(document).ready(function(){

    //banner owl carousel

    $("#banner-area .owl-carousel").owlCarousel({
        dots:true,
        items:1
    });

    $("#top-sale .owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                 //If window greater than 600px, then display 3 items
                items:3
            },
            1000:{
                //If window greater than 1000px, then display 5 items
                items:5
            }
        }
    });

    $("#promotion .owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                 //If window greater than 600px, then display 3 items
                items:3
            },
            1000:{
                //If window greater than 1000px, then display 5 items
                items:5
            }
        }
    });


    var $grid = $(".grid").isotope({
        itemSelector:'.grid-item',
        layoutMode:'fitRows'
    });
    
    //filter items on button click
    $(".button-group").on("click","button",function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter:filterValue});
    });

    
});

$(document).ready(function(){
     //product qty section
     let $qty_up=$(".qty .qty-up");
     let $qty_down=$(".qty .qty-down");
     //let $input =$(".qty .qty_input");
 
     //click on qty up button
     $qty_up.click(function(e){
         let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
         if($input.val() >=1 && $input.val() <= 9){
             $input.val(function(i,oldval){
                 //first parameter: current index
                 //second parameter: current value
                 return ++oldval;
             });
         }
     });
 
      //click on qty up button
      $qty_down.click(function(e){
         let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
         if($input.val() >1 && $input.val() <= 10){
             $input.val(function(i,oldval){
                 return --oldval;
             });
         }
     });
})

