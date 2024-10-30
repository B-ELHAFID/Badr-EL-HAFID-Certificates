// Function to open the lightbox with the selected certificate image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = "images/" + imageSrc;  // Set the lightbox image source
    lightbox.style.display = "flex";  // Show the lightbox
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";  // Hide the lightbox
}