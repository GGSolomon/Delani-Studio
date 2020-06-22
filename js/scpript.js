$(document).ready(function () {
     $(".Picture").hide();



        $("#FirstPort").hover(function() {
          $("#Task4").fadeTo("slow", 0.6);
          $("#Picture1").fadeTo("slow", 1);
        }, function() {
          $("#Task4").fadeTo("slow", 1);
          $("#Picture1").fadeTo("slow", 0);
        });

        $("#SecondPort").hover(function() {
          $("#Task3").fadeTo("slow", 0.6);
          $("#Picture2").fadeTo("slow", 1);
        }, function() {
          $("#Task3").fadeTo("slow", 1);
          $("#Picture2").fadeTo("slow", 0);
        });

        $("#ThirdPort").hover(function() {
          $("#Task2").fadeTo("slow", 0.6);
          $("#Picture3").fadeTo("slow", 1);
        }, function() {
          $("#Task2").fadeTo("slow", 1);
          $("#Picture3").fadeTo("slow", 0);
        });

        $("#ForthPort").hover(function() {
          $("#Task1").fadeTo("slow", 0.6);
          $("#Picture4").fadeTo("slow", 1);
        }, function() {
          $("#Task1").fadeTo("slow", 1);
          $("#Picture4").fadeTo("slow", 0);
        });
        $("#FifthPort").hover(function() {
          $("#Task5").fadeTo("slow", 0.6);
          $("#Picture5").fadeTo("slow", 1);
        }, function() {
          $("#Task5").fadeTo("slow", 1);
          $("#Picture5").fadeTo("slow", 0);
        });
        $("#SixthPort").hover(function() {
          $("#Task6").fadeTo("slow", 0.6);
          $("#Picture6").fadeTo("slow", 1);
        }, function() {
          $("#Task6").fadeTo("slow", 1);
          $("#Picture6").fadeTo("slow", 0);
        });
        $("#SeventhPort").hover(function() {
          $("#Task7").fadeTo("slow", 0.6);
          $("#Picture7").fadeTo("slow", 1);
        }, function() {
          $("#Task7").fadeTo("slow", 1);
          $("#Picture7").fadeTo("slow", 0);
        });
        $("#EighthPort").hover(function() {
          $("#Task8").fadeTo("slow", 0.6);
          $("#Picture8").fadeTo("slow", 1);
        }, function() {
          $("#Task8").fadeTo("slow", 1);
          $("#Picture8").fadeTo("slow", 0);
        });



    $(".click1").click(function () {
        $("#design").toggle();
        $("#pdesign").toggle();
    })

    $(".click2").click(function () {
        $("#development").toggle();
        $("#pdevelopment").toggle();
    })
    $(".click3").click(function () {
        $("#management").toggle();
        $("#pmanagement").toggle();
    })



    $("#contacts").submit(function (event) {
        event.preventDefault();
        var nill = ["name", "mail", "message"];
        var text = [];
        nill.forEach(function (blank) {
            text.push($("#" + blank).val());
        });
        alert("Thank You " + text[0] + " for contacting us. We have received your Email");
        $("#contact")[0].reset();
    });

});
