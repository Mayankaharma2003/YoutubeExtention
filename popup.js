document.addEventListener("DOMContentLoaded", () => {
  const getRecommendationsButton = document.getElementById("get-recommendations");
  getRecommendationsButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "getRecommendations" });
  });

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "displayRecommendations") {
      const recommendations = request.recommendations;
      const recommendationsDiv = document.getElementById("recommendations");
      recommendationsDiv.innerHTML = "";
      recommendations.forEach((recommendation) => {
        const videoTitle = document.createElement("h2");
        videoTitle.textContent = recommendation.snippet.title;
        recommendationsDiv.appendChild(videoTitle);
        const videoThumbnail = document.createElement("img");
        videoThumbnail.src = recommendation.snippet.thumbnails.default.url;
        recommendationsDiv.appendChild(videoThumbnail);
      });
    }
  });
});