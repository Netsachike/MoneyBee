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
          var accordionContent = $(this).siblings('.content');
          var accordionIcon = $(this).find('.icon');
      
          // Toggle the checked state of the radio button
          radioButton.prop('checked', !radioButton.prop('checked'));
      
          // Toggle the content visibility and apply animation
          accordionContent.slideToggle(200);
      
          // Toggle the rotate class on the icon
          accordionIcon.toggleClass('rotate');
      
          // Close other open accordions
          $('#accordion li .content').not(accordionContent).slideUp(200);
          $('#accordion li .icon').not(accordionIcon).removeClass('rotate');
        });
      });
      