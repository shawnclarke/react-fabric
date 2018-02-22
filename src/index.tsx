import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { MyButton } from "./components/Button"

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript" framework="React" />
        <MyButton />
        Hello
    </div>,
    document.getElementById("example")
);