import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import {data} from "./data";

const Amounts = () => {
    const [value,setValue] = useState(0);

    useEffect(() => {
    },);

    return (
        <>
        <div className="days">
            <h2> Going to the shops in <span>{value}</span> days </h2>
            <button className="btn extend" onClick={(CollectDays) => setValue(value + 1)}>+ Add more days</button>
        </div>
        </>
    )
}

export default Amounts;