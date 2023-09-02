import { useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import { getAllUsers } from "../services/blogService";
import '../scss/AllUsers.scss'

export const DisplayUsers = () => {
    const [displayUsers, setDisplayUsers] = useState<IUser[]>([]);

    useEffect(() => {
      const getUsers = async () => {
        const data = await getAllUsers();
        setDisplayUsers(data);
        console.log(data);
      };
      getUsers();
    }, []);
  
    return (<>
    <h1>Alla användare</h1>
    <div className="user--container">
    {displayUsers.map((users) => (
    <div className="user">
        <h3>{users.username}</h3>
        <p>Riktigt namn: {users.dogName}</p>
        <p>Ålder: {users.age}</p>
        <p>Ras: {users.breed}</p>
    </div>))}
    </div>
    </>)
}