import { useState, useEffect } from "react";
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
import placesToWork from "/assets/icons/places-to-work.svg";
import chevronRight from "/assets/icons/chevron-right.svg";
import home from "/assets/icons/home.svg";

export default function Sidebar() {
    const { sidebarOpen, toggleSidebar, activePath } = useSidebar();
    const [lastUpdated, setLastUpdated] = useState("");

    const activeClass = (path: string) => {
        return activePath === path ? 'bg-[#333]' : "";
    };

    useEffect(() => {
        fetch("/data/changelog.json")
            .then(response => response.json())
            .then(data => {
                setLastUpdated(data.updated);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-[#111] shadow">
                <div className="px-5 py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button className="inline-flex items-center p-2 text-sm cursor-pointer"
                                type="button"
                                onClick={() => {
                                    toggleSidebar();
                                }}
                                data-drawer-target="sidebar"
                                aria-controls="sidebar"
                            >
                                <img src={menu} alt="Sidebar menu icon" className="w-7 h-7" />
                            </button>
                            <Link to="/">
                                <img src={home} alt="Sidebar menu icon" className="w-7 h-7 ml-3" />
                            </Link>
                        </div>
                        <div className="flex items-center text-right text-white text-md">
                            <div>
                                <p className="text-white text-md">Last updated:</p>
                                <a href="https://github.com/stefanicjuraj/it-croatia/blob/main/CHANGELOG.md" className="hover:underline" target="_blank" rel="noopener noreferrer">
                                    {lastUpdated}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside
                id="sidebar"
                className={`transition-transform duration-300 ease-in-out left-0 top-0 fixed top-0 left-0 z-40 w-72 h-screen pt-24 sm:pt-32
                ${sidebarOpen ? "md:translate-x-0" : "md:-translate-x-full"} bg-[#111] shadow
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="h-full px-3 pb-4 overflow-y-auto bg-[#111]">
                    <ul className="sm:text-lg text-md font-normal text-white space-y-2">
                        <li>
                            <Link to="/companies" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/companies")}`}>
                                <img src={company} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-2 whitespace-nowrap">Companies</h1>
                                <span className="inline-flex items-center justify-center">
                                    <img src={chevronRight} alt="Arrow right icon" className="w-5 h-5" />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/conferences" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/conferences")}`}>
                                <img src={conference} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-2 whitespace-nowrap">Conferences</h1>
                                <span className="inline-flex items-center justify-center">
                                    <img src={chevronRight} alt="Arrow right icon" className="w-5 h-5" />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/education" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/education")}`}>
                                <img src={education} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-3 whitespace-nowrap">Education</h1>
                                <span className="inline-flex items-center justify-center">
                                    <img src={chevronRight} alt="Arrow right icon" className="w-5 h-5" />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/certificates" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/certificates")}`}>
                                <img src={certificate} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-3 whitespace-nowrap">Certificates</h1>
                                <span className="inline-flex items-center justify-center">
                                    <img src={chevronRight} alt="Arrow right icon" className="w-5 h-5" />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/communities" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/communities")}`}>
                                <img src={community} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-3 whitespace-nowrap">Communities</h1>
                                <span className="inline-flex items-center justify-center">
                                    <img src={chevronRight} alt="Arrow right icon" className="w-5 h-5" />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/places-to-work" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/places-to-work")}`}>
                                <img src={placesToWork} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-3 whitespace-nowrap">Places to Work</h1>
                                <span className="inline-flex items-center justify-center">
                                    <img src={chevronRight} alt="Arrow right icon" className="w-5 h-5" />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/podcasts" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/podcasts")}`}>
                                <img src={podcast} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-3 whitespace-nowrap">Podcasts</h1>
                                <span className="inline-flex items-center justify-center">
                                    <img src={chevronRight} alt="Arrow right icon" className="w-5 h-5" />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/internships" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/internships")}`}>
                                <img src={internship} alt="Home icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-3 whitespace-nowrap">Internships</h1>
                                <span className="inline-flex items-center justify-center">
                                    <img src={chevronRight} alt="Arrow right icon" className="w-5 h-5" />
                                </span>
                            </Link>
                        </li>
                        <hr className="border-[#333]" />
                        <li>
                            <Link to="/contribute" className={`flex items-center p-3 rounded-xl group hover:bg-[#333] ${activeClass("/contribute")}`}>
                                <img src={contribute} alt="Contributing icon" className="w-6 h-6" />
                                <h1 className="flex-1 ms-3 whitespace-nowrap">Contribute</h1>
                                <span className="inline-flex items-center justify-center">
                                    <img src={chevronRight} alt="Arrow right icon" className="w-5 h-5" />
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside >
        </>
    )

}