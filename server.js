const YouTubeApi = require('./YouTubeApi.js');
const Natural = require('./Natural.js');
const TensorFlow = require('./tensorFlow.js');
const express = require("express");
const app = express();
const youtubeApi = new YouTubeApi();
const natural = new Natural();
const tensorflow = new TensorFlow();

app.get("/recommendations", (req, res) => {
  const userId = req.query.userId;
  youtubeApi.getRecommendations(userId)
    .then((recommendations) => {
      res.json(recommendations);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching recommendations");
    });
});

app.get("/video-metadata", (req, res) => {
  const videoId = req.query.videoId;
  youtubeApi.getVideoMetadata(videoId)
    .then((videoMetadata) => {
      res.json(videoMetadata);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching video metadata");
    });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});