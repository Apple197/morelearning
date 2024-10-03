const showcasingVidoes = {
  projectName: "IjBQEzKM5to",
  projectName1: "Cny7nNng89M",
  projectName2: "Cny7nNng89M",
  projectName3: "Cny7nNng89M",
  projectName4: "Cny7nNng89M",
  projectName5: "Cny7nNng89M",
  projectName6: "Cny7nNng89M",
  projectName7: "Cny7nNng89M",
  projectName8: "Cny7nNng89M",
};

function openPopup(videoUrl) {
  document.getElementById("video-popup").style.display = "flex";
  // Set the YouTube video URL
  const iframe = document.getElementById("youtube-iframe");
  iframe.src = videoUrl;
}

function closePopup() {
  document.getElementById("video-popup").style.display = "none";
  // Stop the video by clearing the iframe src
  const iframe = document.getElementById("youtube-iframe");
  iframe.src = "";
}
