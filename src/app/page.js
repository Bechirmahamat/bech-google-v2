import Image from "next/image";
import Header from "../../component/Header";
import Body from "../../component/Body";

export default function Home() {
    return (
        <main className="bg-gray-100">
            <Header />
            <Body />
        </main>
    );
}
