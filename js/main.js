window.onload = function()
{
var mybutton = document.getElementById("myButton");
window.onscroll = function() 
{
    scrollFunction()
};
    
function scrollFunction() 
{
        if (document.body.scrollTop > 270 || document.documentElement.scrollTop > 270) {
          mybutton.style.display = "block";
        } 
        else 
        {
          mybutton.style.display = "none";
        }
    }

    function topFunction()
      {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}
AOS.init({
    duration: 1200,
  })
}
