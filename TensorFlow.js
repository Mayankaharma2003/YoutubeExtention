const tf = require("@tensorflow/tfjs");

class TensorFlow {
  constructor() {
    this.model = tf.sequential();
    this.model.add(tf.layers.dense({ units: 10, activation: "relu", inputShape: [10] }));
    this.model.add(tf.layers.dense({ units: 10, activation: "softmax" }));
    this.model.compile({
      optimizer: tf.optimizers.adam(),
      loss: tf.losses.categoricalCrossentropy,
      metrics: ["accuracy"]
    });
  }

  loadModel() {
    return this.model;
  }

  predict(keywords) {
    const inputs = [];
    keywords.forEach((keyword) => {
      inputs.push(keyword);
    });
    const outputs = this.model.predict(inputs);
    return outputs;
  }
}

module.exports = TensorFlow;