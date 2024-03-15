import { Link } from "react-router-dom";
import { useSidebar } from "../hooks/useSidebar";
// Icons
import menu from "/assets/icons/menu.svg";
import company from "/assets/icons/company.svg";
import conference from "/assets/icons/conference.svg";
import internship from "/assets/icons/internship.svg";
import education from "/assets/icons/education.svg";
import certificate from "/assets/icons/certificate.svg";
import podcast from "/assets/icons/podcast.svg";
import community from "/assets/icons/community.svg";
import contribute from "/assets/icons/contribute.svg";

export default function Sidebar() {
    const { sidebarOpen, toggleSidebar, activePath } = useSidebar();

    const activeClass = (path: string) => {
        return activePath === path ? 'bg-[#333]' : "";
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-[#111] shadow">
                <div className="px-5 py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button className="inline-flex items-center p-2 text-sm cursor-pointer rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                type="button"
                                onClick={toggleSidebar}
                                data-drawer-target="sidebar"
                                aria-controls="sidebar"
                            >
                                <img src={menu} alt="Sidebar menu icon" className="w-7 h-7" />
                            </button>
                        </div>
                        <div className="flex items-center">
                            <div>
                                <p className="text-white text-md">Last updated:</p>
                                <p className="text-white text-md">January 01</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside
                id="sidebar"
                className={`transition-transform duration-300 ease-in-out left-0 top-0 fixed top-0 left-0 z-40 w-72 h-screen pt-40
                ${sidebarOpen ? "md:translate-x-0" : "md:-translate-x-full"} bg-[#111] shadow
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="h-full px-3 pb-4 overflow-y-auto bg-[#111]">
                    <ul className="space-y-2 text-lg font-normal text-white">
                        <li>
                            <Link to="/" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/")}`}>
                                <h1 className="ms-3">Home</h1>
                            </Link>
                        </li>
                        <li>
                            <Link to="/companies" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/companies")}`}>
                                <img src={company} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-2 whitespace-nowrap">Companies</h1>
                            </Link>
                        </li>
                        <li>
                            <Link to="/conferences" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/conferences")}`}>
                                <img src={conference} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-2 whitespace-nowrap">Conferences</h1>
                            </Link>
                        </li>
                        <li>
                            <Link to="/education" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/education")}`}>
                                <img src={education} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-3 whitespace-nowrap">Education</h1>
                            </Link>
                        </li>
                        <li>
                            <Link to="/certificates" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/certificates")}`}>
                                <img src={certificate} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-3 whitespace-nowrap">Certificates</h1>
                            </Link>
                        </li>
                        <li>
                            <Link to="/communities" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/communities")}`}>
                                <img src={community} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-3 whitespace-nowrap">Communities</h1>
                            </Link>
                        </li>
                        <li>
                            <Link to="/podcasts" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/podcasts")}`}>
                                <img src={podcast} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-3 whitespace-nowrap">Podcasts</h1>
                            </Link>
                        </li>
                        <li>
                            <Link to="/internships" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/internships")}`}>
                                <img src={internship} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-3 whitespace-nowrap">Internships</h1>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contribute" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/contribute")}`}>
                                <img src={contribute} alt="Contributing icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-3 whitespace-nowrap">Contribute</h1>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside >
        </>
    )

}