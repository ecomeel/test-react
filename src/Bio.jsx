import React from "react";
import { useState } from "react";

export default function Bio() {
    const [person, setPerson] = useState({
        name: "Sasha",
        surname: "Pulin",
        age: "23",
        sex: "male",
        interests: ["modeling", "driving"],
    });

    const [form, setForm] = useState({
        name: "",
        surname: "",
        age: 0,
    });

    const [isError, setError] = useState(false)

    function handleNameInputChange(e) {
        setForm({
            ...form,
            name: e.target.value,
        });
    }

    function handleSetNameBtnClick() {
        if (!form.name) {
            setError(true);
            return
        }
        setError(false)
        setPerson({
            ...person,
            name: form.name,
        });
    }

    function handleSurnameInputChange(e) {
        setForm({
            ...form,
            surname: e.target.value,
        });
    }

    function handleSetSurnameBtnClick() {
        if (!form.name) {
            setError(true);
            return
        }
        setError(false)

        setPerson({
            ...person,
            surname: form.surname,
        });
    }

    function handleAgeInputChange(e) {
        setForm({
            ...form,
            age: e.target.value,
        });
    }

    function handleSetAgeBtnClick() {
        if (!form.name) {
            setError(true);
            return
        }
        setError(false)

        setPerson({
            ...person,
            age: parseInt(form.age),
        });
    }

    return (
        <div>
            {isError ? (<p>Input Error</p>) : ''}
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleNameInputChange}
            />
            <button onClick={handleSetNameBtnClick}>Задать имя</button>

            <input
                type="text"
                name="surname"
                value={form.surname}
                onChange={handleSurnameInputChange}
            />
            <button onClick={handleSetSurnameBtnClick}>Задать surname</button>

            <input
                type="number"
                name="age"

                value={form.age}
                onChange={handleAgeInputChange}
            />
            <button onClick={handleSetAgeBtnClick}>Set age</button>

            <p>Name: {person.name}</p>
            <p>Surname: {person.surname}</p>
            <p>Age: {person.age}</p>
            <p>Sex: {person.male}</p>
            <p>Interests</p>
            <div>
                {person.interests.map((interest) => (
                    <p key={interest}>{interest}</p>
                ))}
            </div>
        </div>
    );
}
