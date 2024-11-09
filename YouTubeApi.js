const axios = require("axios");

class YouTubeApi {
  constructor() {
    this.apiKey = process.env.AIzaSyAovlhPhj7SU479QXisxB6tI4gjdNcOu4A;
    this.apiUrl = "https://www.googleapis.com/youtube/v3/";
  }

  async getRecommendations(part, chart, regionCode, maxResults) {
    const url = `${this.apiUrl}videos?part=${part}&chart=${chart}&regionCode=${regionCode}&maxResults=${maxResults}&key=${this.apiKey}`;
    try {
      const response = await axios.get(url);
      return response.data.items;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getVideoMetadata(part, id) {
    const url = `${this.apiUrl}videos?part=${part}&id=${id}&key=${this.apiKey}`;
    try {
      const response = await axios.get(url);
      return response.data.items[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async search(part, q, maxResults) {
    const url = `${this.apiUrl}search?part=${part}&q=${q}&maxResults=${maxResults}&key=${this.apiKey}`;
    try {
      const response = await axios.get(url);
      return response.data.items;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getComments(part, videoId) {
    const url = `${this.apiUrl}commentThreads?part=${part}&videoId=${videoId}&key=${this.apiKey}`;
    try {
      const response = await axios.get(url);
      return response.data.items;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getChannelInfo(part, channelId) {
    const url = `${this.apiUrl}channels?part=${part}&id=${channelId}&key=${this.apiKey}`;
    try {
      const response = await axios.get(url);
      return response.data.items[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = YouTubeApi;