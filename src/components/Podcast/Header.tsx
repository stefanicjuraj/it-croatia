import podcast from "/assets/icons/podcast.svg";

export default function Header() {
    return (
        <header className="max-w-screen-xl mx-auto mt-40 mb-16 sm:p-16 px-8 py-12 bg-[#222] rounded-3xl text-left shadow-md shadow-[#111]">
            <div className="flex items-center mb-8">
                <img src={podcast} className="sm:w-12 w-9 mr-3" alt="Podcast icon" />
                <h1 className="text-4xl font-bold text-indigo-300 sm:text-6xl">
                    Podcasts
                </h1>
            </div>
            <p className="w-full text-md sm:text-lg text-white sm:w-3/4">
                A collection of IT <span className="bg-[#333] px-1 py-0.3 rounded-lg">podcasts</span> {" "} in Croatia. Listen to podcasts and interviews about IT related topics with industry professionals and enthusiasts.
            </p>
        </header>
    )
}