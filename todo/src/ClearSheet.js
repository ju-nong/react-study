import React, { useState } from "react";

function ClearItem({ item }) {
    return <li>{item.content}</li>;
}

function Empty() {
    return <li className="nothing">Nothing...</li>;
}

function ClearSheet({ items }) {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible((visible) => !visible);
    };

    return (
        <div className={`bottom-sheet ${visible ? "show" : ""}`}>
            <div>
                <input type="checkbox" id="bottom-toggle" onChange={toggle} />
                <label htmlFor="bottom-toggle">Clear List</label>
            </div>

            <ul>
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <ClearItem item={item} key={index} />
                    ))
                ) : (
                    <Empty />
                )}
            </ul>
        </div>
    );
}

const MemoryClearSheet = React.memo(ClearSheet);

export { MemoryClearSheet };
