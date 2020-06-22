$(document).ready(function () {
  $(".Picture").hide();

        $("#Portal1").hover(function() {
          $("#work4").fadeTo("slow", 0.6);
          $("#Picture1").fadeTo("slow", 1);
        }, function() {
          $("#work4").fadeTo("slow", 1);
          $("#Picture1").fadeTo("slow", 0);
        });

        $("#Portal2").hover(function() {
          $("#work3").fadeTo("slow", 0.6);
          $("#Picture2").fadeTo("slow", 1);
        }, function() {
          $("#work3").fadeTo("slow", 1);
          $("#Picture2").fadeTo("slow", 0);
        });

        $("#Portal3").hover(function() {
          $("#work2").fadeTo("slow", 0.6);
          $("#Picture3").fadeTo("slow", 1);
        }, function() {
          $("#work2").fadeTo("slow", 1);
          $("#Picture3").fadeTo("slow", 0);
        });

        $("#Portal4").hover(function() {
          $("#work1").fadeTo("slow", 0.6);
          $("#Picture4").fadeTo("slow", 1);
        }, function() {
          $("#work1").fadeTo("slow", 1);
          $("#Picture4").fadeTo("slow", 0);
        });

        $("#Portal5").hover(function() {
          $("#work5").fadeTo("slow", 0.6);
          $("#Picture5").fadeTo("slow", 1);
        }, function() {
          $("#work5").fadeTo("slow", 1);
          $("#Picture5").fadeTo("slow", 0);
        });

        $("#Portal6").hover(function() {
          $("#work6").fadeTo("slow", 0.6);
          $("#Picture6").fadeTo("slow", 1);
        }, function() {
          $("#work6").fadeTo("slow", 1);
          $("#Picture6").fadeTo("slow", 0);
        });

        $("#Portal7").hover(function() {
          $("#work7").fadeTo("slow", 0.6);
          $("#Picture7").fadeTo("slow", 1);
        }, function() {
          $("#work7").fadeTo("slow", 1);
          $("#Picture7").fadeTo("slow", 0);
        });

        $("#Portal8").hover(function() {
          $("#work8").fadeTo("slow", 0.6);
          $("#Picture8").fadeTo("slow", 1);
        }, function() {
          $("#work8").fadeTo("slow", 1);
          $("#Picture8").fadeTo("slow", 0);
        });


    $(".DesClick").click(function () {
        $("#Design").toggle();
        $("#OurDesign").toggle();
    })

    $(".DevClick").click(function () {
        $("#Dev").toggle();
        $("#OurDev").toggle();
    })
    $(".ProdClick").click(function () {
        $("#Mgt").toggle();
        $("#OurMgt").toggle();
    })



    $("#contacts").submit(function (event) {
        event.preventDefault();
        var blanks = ["name", "mail", "message"];
        var input = [];
        blanks.forEach(function (blank) {
            input.push($("#" + blank).val());
        });
        alert("Thank You " + input[0] + " for contacting us. We have received your Email");
        $("#contact")[0].reset();
    });

});
