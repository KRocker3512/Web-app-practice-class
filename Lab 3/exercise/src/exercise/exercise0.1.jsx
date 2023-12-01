import * as React from "react";
import * as ReactDOM from "react-dom";

function react() {
    const root =
        ReactDOM.createRoot(document.getElementById("root"));

    root.render(
        <div>
            <button />
            <code />
            <input />
            <label />
            <p />
            <pre />
            <select />
            <table />
            <ul />
        </div>
    );
}

export default react;