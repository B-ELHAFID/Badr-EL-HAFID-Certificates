function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    lightbox.style.display = "flex";
    lightboxImage.src = "images/" + imageSrc;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}