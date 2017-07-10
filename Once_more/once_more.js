//smoothScroll
$(document).ready(function(){
  $('#about_scroll, #btn, #categories_scroll').click(function(e){

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
