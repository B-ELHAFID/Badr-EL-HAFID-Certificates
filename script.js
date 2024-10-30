const certificateTitles = ["Statistics using R studio", "SQL-MySQL", "GIS training","Conference Participation","Applied Data Science Lab","Project Management","Quality Management system","Logestics & Supply chain","Lean Six Sigma"];
let currentIndex = 0;

function changeCertificate(direction) {
    currentIndex = (currentIndex + direction + certificateTitles.length) % certificateTitles.length;
    document.getElementById("currentCertificate").src = `images/certificate${currentIndex + 1}.jpg`;
    document.getElementById("certificate-title").textContent = certificateTitles[currentIndex];
}
