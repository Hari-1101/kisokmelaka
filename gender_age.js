// gender_age.js

// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";

    const cameraFeed = document.getElementById("cameraFeed");
    cameraFeed.appendChild(video);

    // Access the webcam
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((error) => {
            console.error("Error accessing the webcam:", error);
            cameraFeed.innerHTML = "<p style='color:red;'>Unable to access camera</p>";
        });
});
