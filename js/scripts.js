$(document).ready(function() {
  $('#blank').submit(function(event) {
    event.preventDefault();
    var personInput = $("input#person").val();
    $('.person').text(personInput.toUpperCase());

    $('#story').show();

  });
});
