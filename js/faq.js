$(document).ready(function() {
    $('#accordion li label').click(function() {
      var radioButton = $(this).prev('input[type="radio"]');
      var accordionIcon = $(this).find('.icon');
      var content = $(this).nextAll('.content').first();
  
      // Toggle the checked state of the radio button
      radioButton.prop('checked', !radioButton.prop('checked'));
  
      // Toggle the rotate class on the icon
      accordionIcon.toggleClass('rotate');
  
      // Toggle the content visibility and apply animation
      if (content.css('max-height') === '0px') {
        content.css('max-height', '400px');
      } else {
        content.css('max-height', '0px');
      }
  
      // Close other open accordions
      $('#accordion li .icon').not(accordionIcon).removeClass('rotate');
      $('#accordion li .content').not(content).css('max-height', '0px');
    });
  });