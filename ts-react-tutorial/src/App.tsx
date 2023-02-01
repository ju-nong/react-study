import React from "react";
import { Counter } from "./Counter";
import { MyForm } from "./MyForm";
import { ReducerSample } from "./ReducerSample";
import { SampleProvier } from "./SampleContext";

function App() {
    // const onSubmit = (form: { name: string; description: string }) => {
    //     console.log(form);
    // };

    // return <MyForm onSubmit={onSubmit} />;

    // return <Counter />;

    return (
        <SampleProvier>
            <ReducerSample />
        </SampleProvier>
    );
}

export default App;
