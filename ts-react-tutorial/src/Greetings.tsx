import { ReactNode } from "react";

type GreetingsProps = {
    name: string;
    mark: string;
    children?: ReactNode;
    onClick: (name: string) => void;
};

const Greetings = ({ name, mark, children, onClick }: GreetingsProps) => {
    const handleClick = () => onClick(name);

    return (
        <div>
            Hello, {name} {mark}
            {children}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    );
};

Greetings.defaultProps = {
    mark: "!",
};

export { Greetings };
