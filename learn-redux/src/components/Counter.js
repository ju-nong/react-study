function Counter({ number, diff, onPlus, onMinus, onSetDiff }) {
    const onChange = (event) => {
        onSetDiff(parseInt(event.target.value));
    };

    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange} />
                <button onClick={onPlus}>+</button>
                <button onClick={onMinus}>-</button>
            </div>
        </div>
    );
}

export { Counter };
