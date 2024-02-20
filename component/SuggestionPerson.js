import React from "react";

const SuggestionPerson = ({ Suggestion }) => {
    const { id, username, job } = Suggestion;
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 ">
                <img
                    className="h-12  rounded-full"
                    src={
                        "https://i.pravatar.cc/150?img=" +
                        Math.ceil(Math.random() * 70)
                    }
                    alt="username"
                />
                <article className="text-sm text-gray-800">
                    <h3 className="font-bold">{username}</h3>
                    <p className="w-52 truncate text-gray-600">{job}</p>
                </article>
            </div>

            <button className="text-sm font-semibold text-blue-500">
                Follow
            </button>
        </div>
    );
};

export default SuggestionPerson;
