document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    let itemWidth = items[0].offsetWidth + 10; // Width + margin
    let visibleItems = 5; // Number of visible items at a time
    let totalItems = items.length; // Total number of items (7)
    let moveAmount = itemWidth * visibleItems; // Amount to move for 5 items
    let autoSlideInterval;
  
    // Function to move to the next item
    function moveNext() {
      container.style.transition = 'transform 0.5s ease';
      container.style.transform = `translateX(-${moveAmount}px)`;
  
      container.addEventListener('transitionend', function () {
        for (let i = 0; i < visibleItems; i++) {
          container.append(container.firstElementChild); // Move first elements to the end
        }
        container.style.transition = 'none'; // Disable transition for seamless jump
        container.style.transform = 'translateX(0)'; // Reset to start
      }, { once: true });
    }
  
    // Function to move to the previous item
    function movePrev() {
      for (let i = 0; i < visibleItems; i++) {
        container.prepend(container.lastElementChild); // Move last elements to the beginning
      }
      container.style.transition = 'none'; // Disable transition for seamless jump
      container.style.transform = `translateX(-${moveAmount}px)`; // Move to the left first
  
      setTimeout(() => {
        container.style.transition = 'transform 0.5s ease'; // Enable smooth transition
        container.style.transform = 'translateX(0)'; // Reset position
      }, 10); // Small delay to ensure reset before animation restarts
    }
  
    // Auto slide function
    function autoSlide() {
      autoSlideInterval = setInterval(moveNext, 3000); // Move next every 3 seconds
    }
  
    // Start auto sliding
    autoSlide();
  
    // Add event listeners for next and previous buttons
    document.querySelector('.next-btn').addEventListener('click', () => {
      clearInterval(autoSlideInterval); // Stop auto-slide when button clicked
      moveNext();
      autoSlide(); // Restart auto-slide
    });
  
    document.querySelector('.prev-btn').addEventListener('click', () => {
      clearInterval(autoSlideInterval); // Stop auto-slide when button clicked
      movePrev();
      autoSlide(); // Restart auto-slide
    });
  });
  