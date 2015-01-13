$(document).ready(function(){
  $(".card").click(function(){
    url = $(this).attr("data-url");
    window.location.href = url;
  });
});
