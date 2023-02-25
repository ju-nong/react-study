onmessage = function (e) {
    // const start = this.performance.now();
    const { dataRef } = e.data;
    const colorSet = new Set();
    for (let i = 0; i < dataRef.length; i += 4) {
        const nextRGBA = `rgba(${dataRef[i]}, ${dataRef[i + 1]}, ${
            dataRef[i + 2]
        }, ${dataRef[i + 3]})`.replace(/\n/g, "");
        colorSet.add(nextRGBA);
    }
    // const end = this.performance.now();
    this.postMessage({ colorSet });
};
