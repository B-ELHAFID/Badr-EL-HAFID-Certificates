// script.js
function openLightbox(imageSrc) {
    console.log("./images/" + imageSrc); // Log the image path
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightboxImage').src = "./images/" + imageSrc; // Set the image source
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

}