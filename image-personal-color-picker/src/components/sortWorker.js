onmessage = function (e) {
    const data = e.data;
    data.sort((a, b) => b[1] - a[1]);
    this.postMessage(data[0]);
};
