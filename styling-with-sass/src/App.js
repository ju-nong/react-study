import logo from "./logo.svg";
import "./App.scss";
import { Button } from "./components/Button";

function App() {
    const colors = ["blue", "gray", "pink"];
    const sizes = ["large", "medium", "small"];

    return (
        <div className="App">
            {colors.map((color) => (
                <div className="buttons">
                    {sizes.map((size) => (
                        <Button size={size} color={color}>
                            BUTTON
                        </Button>
                    ))}
                </div>
            ))}
            <div className="buttons">
                {[0, 1, 2].map((index) => (
                    <Button size={sizes[index]} color={colors[index]} outline>
                        BUTTON
                    </Button>
                ))}
            </div>

            <div className="buttons">
                {[0, 1, 2].map((index) => (
                    <Button size={sizes[index]} color={colors[index]} fullWidth>
                        BUTTON
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default App;
