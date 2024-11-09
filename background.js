chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getRecommendations") {
    const userId = request.userId;
    const youtubeApi = new YouTubeApi();
    youtubeApi.getRecommendations(userId)
      .then((recommendations) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, {
            action: "displayRecommendations",
            recommendations,
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
});