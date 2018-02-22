import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { MyButton } from "./components/Button"
import { PanelSmallFluidExample } from "./components/Panel"

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript" framework="React" />
        <MyButton />
        <PanelSmallFluidExample />
        Hello
    </div>,
    document.getElementById("example")
);