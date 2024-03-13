import { useState, useEffect } from "react"
const url = 'https://api.github.com/users';

export default function List() {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
          {users.map((user) => {
            const { login, id, avatar_url, html_url } = user;
             return (
                <>
                     <li key={id}>
                         <img src={avatar_url} alt={login} />
                         <div className="info">
                             <h4>{login}</h4>
                             <a href={html_url}>profile</a>
                         </div>
                     </li> 
                </>
             );
            })}  
        </>
    );
}