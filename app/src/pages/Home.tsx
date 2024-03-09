import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section className="max-w-screen-xl mx-auto mt-40 text-white" >
                <div className="px-4 py-4 mt-40 mb-24 animation glow delay-1" >
                    <h1 className="mb-16 font-bold text-center text-indigo-300 text-7xl">
                        IT Croatia
                    </h1>
                    <p className="w-full mx-auto text-xl text-center sm:w-4/5 sm:text-2xl">
                        Explore a collection of IT companies, conferences, education, certificates, communities, podcasts, and internships in Croatia
                    </p>
                </div>
                <section className="px-8 py-8 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-16 md:space-y-0" >
                    <Link to="/companies">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-2">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                            </div>
                            <h1 className="mb-4 text-2xl font-bold">Companies</h1>
                            <p className="text-gray-300">
                                View companies conducting business operations, providing services, or offering consultancy in Croatia.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                            </div>
                        </div>
                    </Link>
                    <Link to="/conferences">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-3">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                            </div>
                            <h1 className="mb-2 text-2xl font-bold">Conferences</h1>
                            <p className="text-gray-300">
                                Attend conferences and presentations with industry knowledge professionals and enthusiasts.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                            </div>
                        </div>
                    </Link>
                    <Link to="/education">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-4">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                            </div>
                            <h1 className="mb-2 text-2xl font-bold">Education</h1>
                            <p className="text-gray-300">
                                Enroll into colleges, courses, lectures, and classes to learn more about IT and software development.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                            </div>
                        </div>
                    </Link>
                    <Link to="/certificates">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-5">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                            </div>
                            <h1 className="mb-2 text-2xl font-bold">Certificates</h1>
                            <p className="text-gray-300">
                                Search for the certifications to master and demonstrate your professional knowledge and skills.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                            </div>
                        </div>
                    </Link>
                    <Link to="/communities">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-5">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                            </div>
                            <h1 className="mb-2 text-2xl font-bold">Communities</h1>
                            <p className="text-gray-300">
                                Find communities and groups to connect and network with other IT professionals and enthusiasts.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                            </div>
                        </div>
                    </Link>
                    <Link to="/certificates">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-6">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                            </div>
                            <h1 className="mb-2 text-2xl font-bold">Podcasts</h1>
                            <p className="text-gray-300">
                                Listen to podcasts and interviews about IT related topics with industry professionals and enthusiasts.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                            </div>
                        </div>
                    </Link>
                    <Link to="/certificates">
                        <div className="bg-[#222] sm:mb-0 mb-8 px-6 py-6 rounded-xl hover:ring-1 hover:ring-indigo-300 animation glow delay-7">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#111]">
                            </div>
                            <h1 className="mb-2 text-2xl font-bold">Internships</h1>
                            <p className="text-gray-300">
                                Start your career and enhance your professional knowledge by applying to internship programs.
                            </p>
                            <div className="flex flex-row-reverse px-1 py-1">
                            </div>
                        </div>
                    </Link>
                </section>
                <div className="px-4 py-4 mt-24 mb-24 text-center text-indigo-300 animation glow delay-8" >
                    <h2 className="mb-4 text-5xl font-bold">By popular demand</h2>
                    <h3 className="text-2xl italic font-normal">You asked. We answered.</h3>
                </div>
            </section>
        </>
    )
}