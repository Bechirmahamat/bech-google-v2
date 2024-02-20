import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { AiOutlineMessage } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const Post = ({ post }) => {
    const { id, username, image, userImg, caution } = post;
    return (
        <div className="bg-white my-7 p-5 rounded-md ">
            {/* head of the post  */}
            <div className="header flex justify-between place-items-center">
                <div className="flex space-x-4 place-items-center">
                    <img
                        src={userImg}
                        alt=""
                        className="h-12 w-12 object-cover p-1 border rounded-full"
                    />
                    <h4 className="font-bold">{username}</h4>
                </div>
                <BsThreeDots className="cursor-pointer text-lg" />
            </div>
            {/* post main image */}
            <div className="mt-3">
                <img
                    className="w-full object-cover max-h-96"
                    src={image}
                    alt=""
                />
            </div>
            <div className="px-2">
                {/* buttons container */}
                <div className="btn-container flex justify-between text-xl my-3">
                    <div className=" flex space-x-2 ">
                        <GoHeart className="scale-hover " />
                        <AiOutlineMessage className="scale-hover " />
                    </div>
                    <BsBookmark className="scale-hover " />
                </div>
                {/* cautions */}
                <div className=" space-x-3">
                    <span className="font-bold">{username}</span>
                    <span>{caution}</span>
                </div>

                {/* Add comment section */}
                <form className="flex items-center my-2">
                    <HiOutlineEmojiHappy className="text-2xl" />
                    <input
                        type="text"
                        placeholder="Enter your comment..."
                        className="flex-1 border-none focus:border-none focus:ring-0"
                    />
                    <button className="text-blue-500 font-bold">Post</button>
                </form>
            </div>
        </div>
    );
};

export default Post;
