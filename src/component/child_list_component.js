import React from "react";

export const Childcomponent = ({ item }) => {
    return (
        <>
            <ul>
                {item.num.map((e) => (
                    <li>{e}</li>
                ))}
            </ul>

            <ol>
                {item.item.map((e) => (
                    <li>{e}</li>
                ))}
            </ol>

            <ul>
                {item.letter.map((e) => (
                    <li>{e}</li>
                ))}
            </ul>
        </>

    )
}