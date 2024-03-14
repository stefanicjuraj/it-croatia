export default function Header() {
    return (
        <header className="max-w-screen-xl mx-auto mt-40 mb-16 sm:p-16 p-8 bg-[#222] rounded-3xl text-left shadow-md shadow-[#111]">
            <h1 className="text-5xl font-bold text-indigo-400 sm:text-6xl">
                Conferences
            </h1>
            <div className="flex my-4">
                <p className="inline-flex items-center text-white">
                    <span className="flex items-center">
                        <span className="flex flex-shrink-0 w-2 h-2 mr-2 bg-indigo-400 rounded-full animate-pulse"></span>
                    </span>
                    In development
                </p>
            </div>
            <p className="w-full text-md sm:text-lg text-white sm:w-3/4">
                A collection of IT <span className="bg-[#333] px-1 py-0.3 rounded-lg">conferences</span> in Croatia. Attend conferences and presentations with industry knowledge professionals and enthusiasts.
            </p>
        </header>
    )
}