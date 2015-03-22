$(function() {

  // vars
  var $alert = $('#alert');
  var $input = $('input:text');
  var list = localStorage.getItem('list');

  $('ul').html(list);

  // add items to list
  $('form').on('submit', function(e) {
    e.preventDefault();
    var $inputVal = $input.val();
    var $listLength = $('li').length;
    if ($listLength < 15) {
      if ($inputVal && $inputVal.length <= 70) {
        $('ul').prepend('<li><p></p></li>');
        $('p:eq(0)').text($inputVal);
        $input.val('');
        var $listCont = $('ul').html();
        localStorage.setItem('list', $listCont);
        $alert.text('Saved to list! Click it to remove');
      } else {
        $alert.text("You didn't enter anything");
      }
    } else {
      $alert.text("Maximum of 15 items allowed");
    }
    $input.focus();
  });

  // del items from list
  $('ul').on('click', 'li', function() {
    $(this).fadeOut(600, function() {
    	$(this).remove();
    	var $listCont = $('ul').html();
    	localStorage.setItem('list', $listCont);
    	});
    $alert.text("Removed!");
    $input.focus();
  });

  // length warning
  $('input').on('input', function() {
    var $inputVal = $input.val();
    $alert.text($inputVal.length + "/70 characters used");
  });


});
