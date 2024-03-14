import education from "/assets/icons/education.svg";

export default function Header() {
    return (
        <header className="max-w-screen-xl mx-auto mt-40 mb-16 sm:p-16 px-8 py-12 bg-[#222] rounded-3xl text-left shadow-md shadow-[#111]">
            <div className="flex items-center">
                <img src={education} className="sm:w-12 w-9 mr-3" alt="Education icon" />
                <h1 className="text-4xl font-bold text-indigo-300 sm:text-6xl">
                    Education
                </h1>
            </div>
            <div className="flex my-4">
                <p className="inline-flex items-center text-white">
                    <span className="flex items-center">
                        <span className="flex flex-shrink-0 w-2 h-2 mr-2 bg-indigo-400 rounded-full animate-pulse"></span>
                    </span>
                    In development
                </p>
            </div>
            <p className="w-full text-md sm:text-lg text-white sm:w-3/4">
                A collection of IT <span className="bg-[#333] px-1 py-0.3 rounded-lg">education</span> provided in Croatia. Enroll into colleges, courses, lectures, and classes to learn more about IT and software development.
            </p>
        </header>
    )
}