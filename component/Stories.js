"use client";
import { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import Storie from "./Storie";
const Stories = () => {
    const [users, setUsers] = useState(false);

    useEffect(() => {
        const storyUser = minifaker.array(20, (i) => ({
            username: minifaker.username({ locale: "en" }),
            img: "https://i.pravatar.cc/150?img=" + i,
            id: i,
        }));
        setUsers([...storyUser]);
        console.log(users);
    }, []);
    console.log(users);
    if (!users) {
        return <p>loading</p>;
    }
    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-md scrollbar-none">
            {users.map((user) => {
                return <Storie key={user.id} user={user} />;
            })}
        </div>
    );
};

export default Stories;
