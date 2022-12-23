
function slidesPlagine(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')
    
    for (const slide of slides) {
        slide.addEventListener( 'click' , () => {
            claerActiveClasses ()
            slide.classList.add('active')
        })
    }
    function claerActiveClasses(){
        slides.forEach((slide) => {
            slide.classList.remove('active')
            
        })
    }
}
slidesPlagine()