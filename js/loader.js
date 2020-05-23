$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $('.materialbox').materialbox();
 
 $('.slider').slider({full_width: true});


 //$('section').fadeOut(2000).fadeIn(4000);

 //$('#desImg').fadeOut(4000).fadeIn(4000);
 $('#desImg').fadeToggle(3000).fadeToggle(3000);
 $('#fserv').fadeToggle(5000).fadeToggle(3000);

  // $("#galtxt").animate({
  //   left: '250px',
  //   opacity: '0.5',
  //   height: '150px',
  //   width: '150px'
  // });



 //$("[id*='section']").fadeOut(2000).fadeIn(4000);
 
 $('.myreviews').carousel({
     numVisible:7,
     shift:57,
      padding:55 
 });
 
 });
 
 function toggleModal()
 {
   var instance = M.Modal.getInstance($('#modal3'));
   instance.open();
 }
 