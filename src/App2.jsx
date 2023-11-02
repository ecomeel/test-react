import React, { useState, useEffect } from "react";

export default function App2() {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    console.log("component rendered");

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        fetch("https://jsonplaceholder.typicode.com/userss")
            .then((response) => {
                if (!response.ok) {
                    console.log('response error');
                    throw new Error('error in response')
                }

                return response.json();
            })
            .then((data) => {
                console.log(data);
                setUsers(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
                setIsError(true);
            });
    }, []);

    return (
        <div>
            {isError && "request error!"}
            {isLoading && 'loading'}
            {users && JSON.stringify(users)}
        </div>
    );
}
