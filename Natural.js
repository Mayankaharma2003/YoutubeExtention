const natural = require("natural");

class Natural {
  constructor() {
    this.tokenizer = new natural.WordTokenizer();
  }

  extractKeywords(text) {
    const tokens = this.tokenizer.tokenize(text);
    const keywords = [];
    tokens.forEach((token) => {
      if (token.length > 2) {
        keywords.push(token);
      }
    });
    return keywords;
  }
}

module.exports = Natural;