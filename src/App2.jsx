import 
    React,
    {
        useState,
        useEffect
    } from "react";

export default function App2() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    console.log('component rendered')

    useEffect(() => {
        setIsLoading(true)

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setUsers(data)
            setIsLoading(false)
        })
    }, []);

    // const [count, setCount] = useState(0);

    // console.log('components rendered')

    // useEffect(() => {
    //     console.log('useEffect call')
    //     localStorage.setItem('count', count)
    // }, [count]);
    return (
        <div>
            {isLoading ? 'loading' : JSON.stringify(users)}
        </div>
        // <div>
        //     {count}
        //     <div>
        //         <button onClick={() => setCount(count + 1)}>
        //             Counter ++
        //         </button>
        //     </div>
        // </div>
    )
}