import React from "react";

function BottomButton({ name, index, filtering }) {
    return (
        <>
            <input
                type="radio"
                value={name}
                name="state"
                defaultChecked={index === 0}
                onChange={filtering}
                id={name}
            />
            <label for={name}>
                <p> {name}</p>
            </label>
        </>
    );
}

function BottomMenu({ count, filtering, clearComplate }) {
    const menus = ["all", "active", "completed"];
    return (
        <footer>
            <span>{count} items left</span>
            <div className="menu">
                {menus.map((menu, index) => (
                    <BottomButton
                        name={menu}
                        index={index}
                        key={index}
                        filtering={filtering}
                    />
                ))}
            </div>
            <button onClick={clearComplate}>Clear completed</button>
        </footer>
    );
}

const MemoryBottomMenu = React.memo(BottomMenu);

export { MemoryBottomMenu };
