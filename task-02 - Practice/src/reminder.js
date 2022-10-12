import React, { useState } from "react";
import {data} from "./data";

const Reminder = () => {
    const [people, setPeople] = React.useState(data);

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id)
        setPeople(newPeople);
    }

    return (
        <>

        {people.map((person)=>{
            const { id, name } = person;
            return (
                <div key={id} className="reminder">
                    <h2>{name}</h2>
                    <button className="btn" onClick={()=>removeItem(id)}>remove</button>
                </div>
            )
        })}
        <button className="btn" onClick={() => setPeople([])}>Clear all</button>
        </>
    )
}


export default Reminder;