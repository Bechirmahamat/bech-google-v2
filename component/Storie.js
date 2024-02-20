import React from "react";

const Storie = ({ user }) => {
    const { img, username, id } = user;

    return (
        <div>
            <img
                className="h-14 p-[1.5px] border-red-500 border-2 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
                src={img}
                alt=""
            />
            <p className="text-xs w-14 truncate">{username}</p>
        </div>
    );
};

export default Storie;
