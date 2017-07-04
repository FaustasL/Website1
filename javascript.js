//searchBar
function active(){
  var searchBar = document.getElementById('searchBar');

  if(searchBar.value == 'Search...'){
    searchBar.value = ''
    searchBar.placeholder= 'Search...'
  }
}
function inactive(){
  var searchBar = document.getElementById('searchBar');

  if(searchBar.value == ''){
    searchBar.value = 'Search...'
    searchBar.placeholder= ''
  }
}

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
