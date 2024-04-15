import placesToWork from "/assets/icons/places-to-work.svg";

export default function Header() {
    return (
        <header className="max-w-screen-xl mx-auto mt-40 mb-16 sm:p-16 px-8 py-12 bg-[#222] rounded-3xl text-left shadow-md shadow-[#111]">
            <div className="flex items-center mb-8">
                <img src={placesToWork} className="mr-3 sm:w-12 w-9" alt="Podcast icon" />
                <h1 className="text-4xl font-bold text-indigo-300 sm:text-6xl">
                    Places to Work
                </h1>
            </div>
            <p className="w-full text-white text-md sm:text-lg sm:w-3/4">
                A collection of <span className="bg-[#333] px-1 py-0.3 rounded-lg">places to work</span> {" "} in Croatia. Explore, visit and work in the best coffee shops, bars, and co-working places in Croatia.
            </p>
        </header>
    )
}