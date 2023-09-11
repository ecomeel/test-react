import React from "react";
import './Counter.css'

export default function Counter({ value, isDanger }) {
    const classnames = isDanger ? 'counter_danger' : 'counter'

    return <p className={classnames}>
            {value}
        </p>
}