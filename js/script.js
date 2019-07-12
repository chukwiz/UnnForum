function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
  }
  $(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.navbar-menu').toggleClass('active')
    })
    if($('navbar-menu').is(':visible')){
        // $(window).click(function(){
            // $('.navbar-menu').hide()
            alert('yoyo')
        // })
        
        }
})



$('.menu-toggle').on('click',function(){
    event.preventDefault();
    $('#over').toggleClass('overlay')
    $('body').toggleClass('fixedPosition')
})