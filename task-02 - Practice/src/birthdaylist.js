import React from "react";

const BirthdayList = ({people}) => {
    return (
        <>
            {people.map((person) => {
                const {id,name,age,img} = person;
                return (
                    <article className="birthday" key={id}>
                        <img src={img} alt={name}/>
                        <div>
                            <h2>{name}</h2>
                            <p>{age} years</p>
                        </div>
                    </article>
                )
            })}
        </>
    );
};

export default BirthdayList;