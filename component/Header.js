import React from "react";
import User from "./User";
import Image from "next/image";
import {
    MagnifyingGlassIcon,
    PlusCircleIcon,
    HomeIcon,
} from "@heroicons/react/24/outline";
const Header = () => {
    return (
        <header className=" shadow-md sticky top-0 bg-gray-50 z-30">
            <div className="flex justify-between items-center max-w-6xl mx-4 xl:mx-auto">
                <div className="h-24 w-24 relative hidden lg:inline-grid">
                    <Image
                        src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
                        layout="fill"
                        className="object-contain"
                        alt="Instagram logo"
                    />
                </div>
                <div className="h-24 w-10 relative  lg:hidden">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                        layout="fill"
                        className="object-contain"
                        alt="Instagram logo"
                    />
                </div>
                <div className="relative mt-1">
                    <div className="absolute top-3 left-3 ">
                        <MagnifyingGlassIcon className="h-5 text-gray-500 cursor-pointer hover:text-gray-700  " />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-11 rounded-md focus:ring-green-600 focus:border-green-600 bg-gray-50"
                        name=""
                        id=""
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <HomeIcon className="h-6 hidden md:inline-flex hover:scale-125 transition-transform duration-200 ease-out" />
                    <PlusCircleIcon className="h-6 hover:scale-125 transition-transform duration-200 ease-out" />
                    <div className="relative h-10 w-10 ">
                        <Image
                            layout="fill"
                            className="object-content cursor-pointer rounded-full "
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
