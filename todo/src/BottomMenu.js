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

function BottomMenu({ count, filtering }) {
    const menus = ["all", "active", "completed"];
    return (
        <div className="bottom-menu">
            <span>{count} items left</span>
            <span>
                {menus.map((menu, index) => (
                    <BottomButton
                        name={menu}
                        index={index}
                        key={index}
                        filtering={filtering}
                    />
                ))}
            </span>
            <button>Clear completed</button>
        </div>
    );
}

const MemoryBottomMenu = React.memo(BottomMenu);

export { MemoryBottomMenu };
