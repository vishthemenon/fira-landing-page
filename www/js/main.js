var colors = ["#34314c", "#ff7473", "#ffc952", "#47b8e0", "#47b8e0"]
var i = 0
$(function(){
  $("#typed").typed({
    strings: ["fira talks.", "fira handles.", "fira manages.", "fira learns.", "fira changes.", "fira changes"],
    typeSpeed: 25,
    callback: function() {
      $(".hero-show").fadeIn("slow");
      $("#logo").fadeIn("slow");
      $("#hero > .fa-arrow-down").fadeIn("slow")
    },
    onStringTyped: function() {
      $('#title').css('color', colors[i])
      i++
    }
  });
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var zHeight = $('body').height();
  if(wScroll > 1700){
    $(".bird").css("transform", "none")
    $("#smallbird").css("transform", "scale(0.6)")
    $("#smallbird").css("opacity", "0.7")

  }
})


function handleClick() {
  alert("Thank you. We will contact you as soon as possible.")
  return false;
}
