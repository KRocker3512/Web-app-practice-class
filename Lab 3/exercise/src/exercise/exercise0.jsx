import * as React from "react";
import * as ReactDOM from "react-dom";

function react() {
    const root =
        ReactDOM.createRoot(document.getElementById("root"));

    root.render(
        <p>Hello, <strong>JSX</strong></p>
    );
}

export default react;