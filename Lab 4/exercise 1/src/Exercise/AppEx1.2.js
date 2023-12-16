import * as React from "react";
import { FadeLoader } from "react-spinners";
import MyPage1_2 from "../Component/MyPage1.2";

function App() {
    return (
        <React.Suspense fallback={<FadeLoader color={"lightblue"} size={150} />}>
            <MyPage1_2 />
        </React.Suspense>
    );
}
export default App;