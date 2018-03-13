'use strict';

var onmessage = (e) => {
  let receivedData = JSON.parse(e.data);
  if (receivedData.operation === 'start') {
    var self = this;
    self[receivedData.cbName] = eval(receivedData.cb);
    let processedData = self[receivedData.cbName](receivedData.arg);
    done(processedData);
  }
};

var done = (data) => {
  postMessage(data);
}