const myLogger = (store) => (next) => (action) => {
    console.log(store.getState());
    const result = next(action);
    console.log(store.getState());

    return result;
};
export { myLogger };
