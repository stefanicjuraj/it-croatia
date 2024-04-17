import { Link } from "react-router-dom";
// Icons
import fourofour from "/assets/icons/404.svg";

export default function Header() {
    return (
        <header className="max-w-screen-xl mx-auto mt-40 mb-16 sm:p-16 px-8 py-12 bg-[#222] rounded-3xl text-left shadow-md shadow-[#111]">
            <div className="flex items-center mb-8">
                <img src={fourofour} className="mr-3 sm:w-12 w-9" alt="Company icon" />
                <h1 className="text-4xl font-bold text-indigo-300 sm:text-6xl">
                    404 Not Found
                </h1>
            </div>
            <p className="w-full text-white text-md sm:text-lg sm:w-3/4">
                Oops! Looks like you got lost. Try another page: {" "}
                <span className="bg-[#333] px-1 py-0.3 rounded-lg underline">
                    <Link to="/companies">companies</Link>
                </span>,{" "}
                <span className="bg-[#333] px-1 py-0.3 rounded-lg underline">
                    <Link to="/companies">education</Link>
                </span>,{" "}
                <span className="bg-[#333] px-1 py-0.3 rounded-lg underline">
                    <Link to="/companies">certificates</Link>
                </span>,{" "}
                <span className="bg-[#333] px-1 py-0.3 rounded-lg underline">
                    <Link to="/companies">communities</Link>
                </span>,{" "}
                <span className="bg-[#333] px-1 py-0.3 rounded-lg underline">
                    <Link to="/companies">places to work</Link>
                </span>,{" "}
                <span className="bg-[#333] px-1 py-0.3 rounded-lg underline">
                    <Link to="/companies">podcasts</Link>
                </span>,{" "}
                <span className="bg-[#333] px-1 py-0.3 rounded-lg underline">
                    <Link to="/companies">internships</Link>
                </span>,{" "}
                <span className="bg-[#333] px-1 py-0.3 rounded-lg underline">
                    <Link to="/companies">blog</Link>
                </span>,{" "}
                <span className="bg-[#333] px-1 py-0.3 rounded-lg underline">
                    <Link to="/companies">contribute</Link>
                </span>,{" "}
                <span className="bg-[#333] px-1 py-0.3 rounded-lg underline">
                    <Link to="/companies">companies</Link>
                </span>{" "} or go to the {" "}
                <span className="bg-[#333] px-1 py-0.3 rounded-lg underline">
                    <Link to="/companies">home page</Link>
                </span>.
            </p>
        </header>
    )
}