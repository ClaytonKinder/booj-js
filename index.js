jQuery(document).ready(function () {

  // Solution to problem #1
  jQuery('#content div li:last-of-type').css('color', 'red');

  // Solution to problem #2
  // I wasn't sure how you wanted me to indicate that I had only selected the list elements containing "car", "boat", and "bike" so I chose to simply log it to the console
  console.log(jQuery('#content2 div > ul > li > ul > li'));

  // Solution to problem #3
  var answer = jQuery('#problem3-answer');
  var select = jQuery('select');
  answer.html((select.val()));
  select.change(function() {
    answer.html((select.val()));
  });

  // Solution to problem #4
  var dims = jQuery('#setDims');
  var height = dims[0].clientHeight;
  var width = dims[0].clientWidth;
  dims.html('This div has a height of ' + height + 'px and a width of ' + width + 'px.');

  // Solution to problem #5
  var clickEventLink = jQuery('#clickEventLink');
  clickEventLink.on('click', function() {
    clickEventLink.toggleClass('not-clicked clicked');
  });

  // Solution to problem #6
  jQuery.ajax({
    url: "ajax_return.html",
    dataType: 'json',
    success: function(result){
    jQuery('<ul id="problem6-answers"></ul>').appendTo('#jsonResponse');
    jQuery.each(result, function(idx, val) {
      jQuery('<li>' + idx + ' : ' + val + '</li>').appendTo('#problem6-answers');
    });
  }});

});
