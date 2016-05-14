var colors = ["#34314c", "#34314c", "#ff7473", "#ffc952", "#47b8e0"]
var i = 0
$(function(){
        $("#typed").typed({
            strings: ["fira talks.", "fira handles.", "fira manages.", "fira learns.", "fira changes.", "fira changes"],
            typeSpeed: 25,
            callback: function() {
              $("#subtitle").fadeIn("slow");
              $("#hero > .fa-arrow-down").fadeIn("slow")
            },
            onStringTyped: function() {
              $('#title').css('color', colors[i])
              i++
            }
        });
    });
