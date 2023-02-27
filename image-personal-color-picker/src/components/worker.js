onmessage = function (e) {
    const { dataRef } = e.data;
    const colorSet = {};

    for (let i = 0; i < dataRef.length; i += 4) {
        const nextRGBA = `rgba(${dataRef[i]}, ${dataRef[i + 1]}, ${
            dataRef[i + 2]
        }, ${dataRef[i + 3]})`.replace(/\n/g, "");
        colorSet[nextRGBA] = (colorSet[nextRGBA] ?? 0) + 1;
    }

    const entries = Object.entries(colorSet);
    entries.sort((a, b) => b[1] - a[1]);

    this.postMessage({ colorSet: entries[0][0] });
};
