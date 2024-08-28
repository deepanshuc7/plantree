console.log(("hello"))

//// function for searchbar using jquerry

$(document).ready(function(){
  $("#searchIcon").click(function(){
    $(".search").toggle();
  });
});


////function to toggle hide reviews on product page using jquerry

$(document).ready(function(){
  $(".reviewButton").click(function(){
    $(".review").toggle();
  });
});

//// fucntion for alert pop up after submititng the contant form

function alertSubmit() {
  var name =  document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  alert("The form was submitted, name: " + name + " phone: " + phone + " email: " + email);
}




// function myFunction() {
//     var x = document.getElementById("searchBar");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-bar");
  const navbar = document.querySelector(".navbar");

  // Toggle the active class to show/hide the menu
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});
