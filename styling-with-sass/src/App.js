import logo from "./logo.svg";
import "./App.scss";
import { Button } from "./components/Button";

function App() {
    const colors = ["blue", "gray", "pink"];
    const sizes = ["large", "medium", "small"];

    return (
        <div className="App">
            {colors.map((color, idx) => (
                <div className="buttons" key={idx}>
                    {sizes.map((size, index) => (
                        <Button size={size} color={color} key={index}>
                            BUTTON
                        </Button>
                    ))}
                </div>
            ))}
            <div className="buttons">
                {[0, 1, 2].map((index, idx) => (
                    <Button
                        size={sizes[index]}
                        key={idx}
                        color={colors[index]}
                        outline
                    >
                        BUTTON
                    </Button>
                ))}
            </div>

            <div className="buttons">
                {[0, 1, 2].map((index, idx) => (
                    <Button
                        size={sizes[index]}
                        key={idx}
                        color={colors[index]}
                        fullWidth
                        onClick={() => console.log("hih")}
                    >
                        BUTTON
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default App;
