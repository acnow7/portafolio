$('body').css("background-color", "");
// $('.main1').css("backgrond-image", url(background1.jpg))
$("p").css("font-size", "16px")
// $("#parrafo").css("font-size", "40px")
$(".lefticons").css({"background-color": "black",
                     "opacity": .5,
                     "border-radius": "15%",
                    "margin": "10%"})

                    function myFunction() {
                        var x = document.getElementById("myTopnav");
                        if (x.className === "topnav") {
                          x.className += " responsive";
                        } else {
                          x.className = "topnav";
                        }
                      }
$('topnav')