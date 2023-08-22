import React, { useState } from "react";
import ChildA from "./childA";
import ChildB from "./childB";

export default function Parent(item) {
    const [data, setData] = useState();

    const change = () => {
        setData(newdata => !newdata)
    }

    return (
        <div className="App">
            <h1> Parent and Child Component<br/>Task-5<br/>{data ? <ChildA /> : <ChildB />}</h1>
            <button type="submit" onClick={change}>{data ? "childB" : "childA"}</button>
        </div>
    )
}



























