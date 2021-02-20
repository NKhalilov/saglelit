
function myFunction(x) {
    x.classList.toggle("change");
    console.log('Clicked');
    document.getElementById("dropdown-cont").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.container')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }