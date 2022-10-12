import React, { useState } from "react";
import { BirthdayData } from "./birthday-data";
import BirthdayList from "./birthdaylist";

function Birthdays() {

    const [people,setPeople] = useState(BirthdayData);
    console.log(people);

    return (
        <main>
            <section className="container">
                <h2>{people.length} Birthdays Today</h2>
                <BirthdayList people={people}/>
                <button className="btn" onClick={() => setPeople([])}>Clear</button>
            </section>
        </main>
    )
}

export default Birthdays;