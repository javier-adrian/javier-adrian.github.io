$(document).ready(() => {
    $("#content-carousel .carousel-control-prev").click(() => {
      $("#img-carousel .carousel-control-prev").trigger('click');
    });
    $("#content-carousel .carousel-control-next").click(() => {
      $("#img-carousel .carousel-control-next").trigger('click');
    });
  

    $("#content1").click(() => {
      $("#img1").trigger('click');
    });

    $("#content2").click(() => {
      $("#img2").trigger('click');
    });

    $("#content3").click(() => {
      $("#img3").trigger('click');
    });
  });