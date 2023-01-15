import React from "react";

function BottomButton({ name, index, filtering }) {
    return (
        <label>
            <p> {name}</p>
            <input
                type="radio"
                value={name}
                name="state"
                defaultChecked={index === 0}
                onChange={filtering}
            />
        </label>
    );
}

function BottomMenu({ count, filtering, clearComplate }) {
    const menus = ["all", "active", "completed"];
    return (
        <footer>
            <span>{count} items left</span>
            <span className="menu">
                {menus.map((menu, index) => (
                    <BottomButton
                        name={menu}
                        index={index}
                        key={index}
                        filtering={filtering}
                    />
                ))}
            </span>
            <button onClick={clearComplate}>Clear completed</button>
        </footer>
    );
}

const MemoryBottomMenu = React.memo(BottomMenu);

export { MemoryBottomMenu };
