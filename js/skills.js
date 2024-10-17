document.addEventListener("DOMContentLoaded", function () {
    function setupCarousel(
        containerSelector,
        prevBtnSelector,
        nextBtnSelector
    ) {
        const container = document.querySelector(containerSelector);
        const items = container.querySelectorAll(".carousel-item");
        let itemWidth = items[0].offsetWidth + 10;
        let visibleItems = 1;
        let totalItems = items.length;
        let moveAmount = itemWidth * visibleItems;
        let autoSlideInterval;

        function moveNext() {
            container.style.transition = "transform 0.5s ease";
            container.style.transform = `translateX(-${moveAmount}px)`;

            container.addEventListener(
                "transitionend",
                function () {
                    for (let i = 0; i < visibleItems; i++) {
                        container.append(container.firstElementChild);
                    }
                    container.style.transition = "none";
                    container.style.transform = "translateX(0)";
                },
                { once: true }
            );
        }

        function movePrev() {
            for (let i = 0; i < visibleItems; i++) {
                container.prepend(container.lastElementChild);
            }
            container.style.transition = "none";
            container.style.transform = `translateX(-${moveAmount}px)`;

            setTimeout(() => {
                container.style.transition = "transform 0.5s ease";
                container.style.transform = "translateX(0)";
            }, 10);
        }

        // Auto slide function
        function autoSlide() {
            autoSlideInterval = setInterval(moveNext, 3000);
        }

        // Start auto sliding
        autoSlide();

        // Pause the auto slide on hover
        container.addEventListener("mouseenter", () => {
            clearInterval(autoSlideInterval);
        });

        // Resume the auto slide when hover ends
        container.addEventListener("mouseleave", () => {
            autoSlide();
        });

        // Event listeners for next/prev buttons
        document.querySelector(nextBtnSelector).addEventListener("click", () => {
            clearInterval(autoSlideInterval);
            moveNext();
            autoSlide();
        });

        document.querySelector(prevBtnSelector).addEventListener("click", () => {
            clearInterval(autoSlideInterval);
            movePrev();
            autoSlide();
        });
    }

    // Initialize the carousels
    setupCarousel('#cert-carousel-container', '#cert-prev-btn', '#cert-next-btn');
    setupCarousel('#proj-carousel-container', '#proj-prev-btn', '#proj-next-btn');
});
