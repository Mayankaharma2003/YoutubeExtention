function displayVideoRecommendations(recommendations) {
  const videoContainer = document.getElementById("video-container");
  recommendations.forEach((recommendation) => {
    const videoThumbnail = document.createElement("img");
    videoThumbnail.src = recommendation.snippet.thumbnails.default.url;
    videoThumbnail.alt = recommendation.snippet.title;
    videoContainer.appendChild(videoThumbnail);

    const videoTitle = document.createElement("h2");
    videoTitle.textContent = recommendation.snippet.title;
    videoContainer.appendChild(videoTitle);

    const videoLink = document.createElement("a");
    videoLink.href = `https://www.youtube.com/watch?v=${recommendation.id.videoId}`;
    videoLink.textContent = "Watch Video";
    videoContainer.appendChild(videoLink);
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "displayRecommendations") {
    const recommendations = request.recommendations;
    displayVideoRecommendations(recommendations);
  }
});