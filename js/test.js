document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    let itemWidth = items[0].offsetWidth + 10; 
    let visibleItems = 5;  
    let totalItems = items.length; 
    let moveAmount = itemWidth * visibleItems; 
    let autoSlideInterval;
  
   
    function moveNext() {
      container.style.transition = 'transform 0.5s ease';
      container.style.transform = `translateX(-${moveAmount}px)`;
  
      container.addEventListener('transitionend', function () {
        for (let i = 0; i < visibleItems; i++) {
          container.append(container.firstElementChild); 
        }
        container.style.transition = 'none'; 
        container.style.transform = 'translateX(0)'; 
      }, { once: true });
    }
  
   
    function movePrev() {
      for (let i = 0; i < visibleItems; i++) {
        container.prepend(container.lastElementChild); 
      }
      container.style.transition = 'none'; 
      container.style.transform = `translateX(-${moveAmount}px)`; 
  
      setTimeout(() => {
        container.style.transition = 'transform 0.5s ease'; 
        container.style.transform = 'translateX(0)'; 
      }, 10); 
    }
  
    // Auto slide function
    function autoSlide() {
      autoSlideInterval = setInterval(moveNext, 3000); 
    }
  
    // Start auto sliding
    autoSlide();
  
    
    document.querySelector('.next-btn').addEventListener('click', () => {
      clearInterval(autoSlideInterval);
      moveNext();
      autoSlide(); 
    });
  
    document.querySelector('.prev-btn').addEventListener('click', () => {
      clearInterval(autoSlideInterval); 
      movePrev();
      autoSlide(); 
    });
  });
  