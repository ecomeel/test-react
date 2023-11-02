import 
    React,
    {
        useState,
        useEffect
    } from "react";

export default function App2() {

    const [users, setUsers] = useState([]);
    
    console.log('component rendered')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // setUsers(data)
        })
    });

    return (
        <div>
            {JSON.stringify(users)}
        </div>
    )
}