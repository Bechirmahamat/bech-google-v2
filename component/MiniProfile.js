import React from "react";

const MiniProfile = () => {
    return (
        <div className="flex-1  flex items-center  justify-between">
            <img
                className="h-16 rounded-full w-16 object-cover"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                alt=""
            />
            {/* information */}
            <div className=" flex-1 ml-2">
                <p className="font-bold ">bechir_mahamad</p>
                <h4 className="text-sm ">Welcome to instagram !</h4>
            </div>
            <button className="text-sm font-semibold text-blue-400">
                logout
            </button>
        </div>
    );
};

export default MiniProfile;
