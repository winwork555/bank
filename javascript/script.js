let bannerIndex = 0;
const banners = document.querySelectorAll('.banner');
const totalBanners = banners.length;
let bannerInterval; // Variable to hold the interval

// Function to handle banner animation and auto-scroll
function moveBanner() {
    // Remove active class from the current banner
    banners[bannerIndex].classList.remove('active');

    // Increment the index and loop back to 0 if we reach the end
    bannerIndex = (bannerIndex + 1) % totalBanners;

    // Add active class to the next banner to trigger the animation
    banners[bannerIndex].classList.add('active');
}

// Initially show the first banner
banners[bannerIndex].classList.add('active');

// Start auto-moving banners every 3 seconds
function startBannerInterval() {
    bannerInterval = setInterval(moveBanner, 3000);
}

// Stop the auto-scroll when a banner is clicked
banners.forEach(banner => {
    banner.addEventListener('click', () => {
        clearInterval(bannerInterval); // Stop the auto-scrolling
    });
});

// Restart the auto-scroll after a delay (if needed)
function restartAutoScroll() {
    setTimeout(() => {
        startBannerInterval();
    }, 5000); // Wait for 5 seconds before restarting
}

// Start the initial interval
startBannerInterval();
