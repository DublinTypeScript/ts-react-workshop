import * as React from "react";
import * as ReactDOM from "react-dom";

import { CounterPage } from "./components/counter_page";

ReactDOM.render(
    <CounterPage compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
