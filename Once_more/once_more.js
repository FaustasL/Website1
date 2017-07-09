//smoothScroll
$(document).ready(function(){
  $('#cmon').click(function(e){

    var linkHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    })

    e.preventDefault();
  })
})

//smoothScroll
$(document).ready(function(){
  $('#btn').click(function(e){

    var linkHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    })

    e.preventDefault();
  })
})

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
