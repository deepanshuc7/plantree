const buttonTop = document.getElementById("button-top");
window.onscroll = function() {scrollFunction()};

  function scrollFunction() { 
    if (document.body.scrollTop > 100  || document.documentElement.scrollTop > 100) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
 }


        function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE     and Opera
}


