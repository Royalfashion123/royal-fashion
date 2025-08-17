// Simple swipe reel scroll
document.addEventListener("DOMContentLoaded", () => {
  const reels = document.querySelectorAll(".reel video");

  reels.forEach((video) => {
    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
});

// WhatsApp Buy button
function buyNow(product) {
  const phone = "9832818725"; // Your WhatsApp number
  const message = `Hello, I want to buy: ${product}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
