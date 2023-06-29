    document.addEventListener('DOMContentLoaded', () => {
        const slides = document.querySelector('.slides');
        const radioInputs = document.querySelectorAll('.radio');

        slides.addEventListener('scroll', () => {
            const scrollPos = slides.scrollLeft;
            const slideWidth = slides.offsetWidth;
            const activeIndex = Math.round(scrollPos / slideWidth);
            radioInputs[activeIndex].checked = true;
        });

        radioInputs.forEach((input) => {
            input.addEventListener('change', () => {
                const slideIndex = Array.from(radioInputs).indexOf(input);
                slides.scroll({ left: slideIndex * slides.offsetWidth, behavior: 'smooth' });
            });
        });
    });

    //rotate icon

// let rotate = document.querySelectorAll("li")

// for (let i = 0; i < rotate.length; i++) {
//     if (rotate[i] === )
    
// }
