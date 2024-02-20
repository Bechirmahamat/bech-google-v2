"use client";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestion from "./Suggestion";

const Body = () => {
    return (
        <main className="grid grid-cols-1 md:px-3 md:max-w-6xl md:mx-auto  md:grid-cols-3">
            <section className="col-span-2">
                <Stories />
                <Posts />
            </section>
            <section className="ml-4  hidden md:inline-grid md:col-span-1">
                {/* mini profile */}
                <div className="fixed h-5/6 w-[380px] flex flex-col justify-between">
                    <article className=" mt-8 rounded-md h-[100px] px-3 bg-white flex items-center">
                        <MiniProfile />
                    </article>
                    {/* sugession  */}
                    <div
                        className="my-3 ml-1 text-gray-500 flex
                    justify-between mr-6"
                    >
                        <h3 className="">Suggested for you</h3>
                        <button className="hover:underline">see All</button>
                    </div>
                    <article className="flex-1 rounded-md px-3  overflow-hidden overflow-y-auto scroll-smooth bg-white">
                        <Suggestion />
                    </article>
                </div>
            </section>
        </main>
    );
};

export default Body;
