onmessage = function (event) {
    console.log("worker", event);
    this.postMessage("어서오고");
};
