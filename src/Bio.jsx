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

    const [isError, setError] = useState(false);

    function handleInputChange(e) {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    }

    function handleBtnClick(key) {
        if (!form[key]) {
            setError(true);
            return;
        }
        setError(false);
        setPerson({
            ...person,
            [key]: form[key],
        });
    }

    return (
        <div>
            {isError ? <p>Input Error</p> : ""}
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
            />
            <button
                onClick={() => {
                    handleBtnClick("name");
                }}
            >
                Задать имя
            </button>

            <input
                type="text"
                name="surname"
                value={form.surname}
                onChange={handleInputChange}
            />
            <button
                onClick={() => {
                    handleBtnClick("surname");
                }}
            >
                Задать surname
            </button>

            <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleInputChange}
            />
            <button
                onClick={() => {
                    handleBtnClick("age");
                }}
            >
                Set age
            </button>

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
