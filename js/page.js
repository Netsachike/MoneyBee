    // document.addEventListener('DOMContentLoaded', () => {
    //     const slides = document.querySelector('.slides');
    //     const radioInputs = document.querySelectorAll('.radio');

    //     slides.addEventListener('scroll', () => {
    //         const scrollPos = slides.scrollLeft;
    //         const slideWidth = slides.offsetWidth;
    //         const activeIndex = Math.round(scrollPos / slideWidth);
    //         radioInputs[activeIndex].checked = true;
    //     });

    //     radioInputs.forEach((input) => {
    //         input.addEventListener('change', () => {
    //             const slideIndex = Array.from(radioInputs).indexOf(input);
    //             slides.scroll({ left: slideIndex * slides.offsetWidth, behavior: 'smooth' });
    //         });
    //     });
    // });

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
    
    
    