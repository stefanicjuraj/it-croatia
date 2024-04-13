import { Link } from "react-router-dom";
// Components
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
// Icons
import company from "/assets/icons/company.svg";
import conference from "/assets/icons/conference.svg";
import internship from "/assets/icons/internship.svg";
import education from "/assets/icons/education.svg";
import certificate from "/assets/icons/certificate.svg";
import podcast from "/assets/icons/podcast.svg";
import arrow from "/assets/icons/arrow.svg";
import community from "/assets/icons/community.svg";
// Images
import image from "/assets/images/cro-it.png";
import redditImage from "/assets/images/reddit-image.png";

export default function Home() {
    return (
        <>
            <section className="mx-auto mt-40 text-white max-w-screen-xl" >
                <div className="px-4 py-4 mt-40 mb-24 text-center animation glow delay-1">
                    <h1 className="mb-8 font-bold text-center text-indigo-300 text-7xl">
                        IT Croatia
                    </h1>
                    <p className="mx-auto mb-8 text-sm text-center inline-flex bg-[#222] px-5 py-2 rounded-full">
                        <span className="flex items-center mx-auto">
                            <span className="flex w-2 h-2 mr-2 bg-indigo-300 rounded-full animate-pulse"></span>
                        </span>
                        In development
                    </p>
                    <p className="w-full mx-auto text-xl text-center sm:w-4/5 sm:text-2xl">
                        Explore a collection of IT companies, conferences, education, certificates, communities, podcasts, and internships in Croatia
                    </p>
                </div>
                <section className="px-8 py-8 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-16 md:space-y-0" >
                    <Link to="/companies">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-2">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                                <img src={company} alt="Company icon" className="w-8 h-8" />
                            </div>
                            <h1 className="mb-4 text-2xl font-bold">Companies</h1>
                            <p className="text-gray-300">
                                View companies conducting business operations, providing services, or offering consultancy in Croatia.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                                <img src={arrow} className="w-8 h-8" alt="arrow" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/conferences">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-3">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                                <img src={conference} alt="Company icon" className="w-8 h-8" />
                            </div>
                            <h1 className="mb-2 text-2xl font-bold">Conferences</h1>
                            <p className="text-gray-300">
                                Attend conferences and presentations with industry knowledge professionals and enthusiasts.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                                <img src={arrow} className="w-8 h-8" alt="arrow" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/education">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-4">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                                <img src={education} alt="Company icon" className="w-8 h-8" />
                            </div>
                            <h1 className="mb-2 text-2xl font-bold">Education</h1>
                            <p className="text-gray-300">
                                Enroll into colleges, courses, lectures, and classes to learn more about IT and software development.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                                <img src={arrow} className="w-8 h-8" alt="arrow" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/certificates">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-5">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                                <img src={certificate} alt="Company icon" className="w-8 h-8" />
                            </div>
                            <h1 className="mb-2 text-2xl font-bold">Certificates</h1>
                            <p className="text-gray-300">
                                Search for the certifications to master and demonstrate your professional knowledge and skills.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                                <img src={arrow} className="w-8 h-8" alt="arrow" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/communities">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-5">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                                <img src={community} alt="Company icon" className="w-8 h-8" />
                            </div>
                            <h1 className="mb-2 text-2xl font-bold">Communities</h1>
                            <p className="text-gray-300">
                                Find communities and groups to connect and network with other IT professionals and enthusiasts.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                                <img src={arrow} className="w-8 h-8" alt="arrow" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/podcasts">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-6">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                                <img src={podcast} alt="Company icon" className="w-8 h-8" />
                            </div>
                            <h1 className="mb-2 text-2xl font-bold">Podcasts</h1>
                            <p className="text-gray-300">
                                Listen to podcasts and interviews about IT related topics with industry professionals and enthusiasts.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                                <img src={arrow} className="w-8 h-8" alt="arrow" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/internships">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-7">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                                <img src={internship} alt="Company icon" className="w-8 h-8" />
                            </div>
                            <h1 className="mb-2 text-2xl font-bold">Internships</h1>
                            <p className="text-gray-300">
                                Start your career and enhance your professional knowledge by applying to internship programs.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                                <img src={arrow} className="w-8 h-8" alt="arrow" />
                            </div>
                        </div>
                    </Link>
                </section>
                <div className="px-4 py-4 mt-24 mb-24 text-center text-indigo-300 animation glow delay-8" >
                    <h2 className="mb-4 text-5xl font-bold">By popular demand</h2>
                    <h3 className="text-2xl italic font-normal">You asked. We answered.</h3>
                    <img src={image} className="w-full mx-auto mt-16 mb-32 sm:w-2/3"></img>
                    <h2 className="mb-4 text-5xl font-bold">The launch</h2>
                    <h3 className="text-2xl italic font-normal">View the launch post and join the discussion!</h3>
                    <a href="https://www.reddit.com/r/CroIT/comments/1bfba43/kolekcija_it_kompanija_konferencija_edukacija/" target="_blank" rel="noopener noreferrer">
                        <img src={redditImage} className="w-full mx-auto mt-16 mb-32 sm:w-1/3 rounded-xl hover:border-2 hover:border-indigo-500"></img>
                    </a>
                    <h2 className="mb-4 text-5xl font-bold">Monthly updates</h2>
                    <h3 className="max-w-screen-sm mx-auto text-xl italic font-normal">Receive monthly updates of the additions of newly established entities and removals of inactive or defunct entities from the collection.</h3>
                    <Subscribe />
                </div>
            </section>

            <Footer />
        </>
    )
}