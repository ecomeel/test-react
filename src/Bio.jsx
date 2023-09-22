import React from "react";
import { useState } from "react";


export default function Bio() {
    const [person, setState] = useState({
        name: 'Sasha',
        surname: 'Pulin',
        age: '23',
        sex: 'male',
        interests: ['modeling', 'driving']
    })

    return (
        <div>
            <p>Name: {person.name}</p>
            <p>Surname: {person.surname}</p>
            <p>Age: {person.age}</p>
            <p>Sex: {person.male}</p>
            <p>Interests</p>
            <div>{person.interests.map(interest => (
                <p key={interest}>{interest}</p>
            ))}</div>
        </div>
    )
}