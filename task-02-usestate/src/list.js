import React, { useState, useEffect } from "react";
import {data} from "./data";
import { HiOutlineX } from "react-icons/hi";

const ShoppingList = () => {

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
                <div key={id} className="list">
                    <h2>{name}</h2>
                    <button className="btn remove icon" onClick={()=>removeItem(id)}><HiOutlineX /></button>
                </div>
            )
        })}
        <button className="btn remove" onClick={() => setPeople([])}>Clear all</button>
        </>
    )
}


export default ShoppingList;