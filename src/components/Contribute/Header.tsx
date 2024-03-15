import contribute from "/assets/icons/contribute.svg";

export default function Header() {
    return (
        <header className="max-w-screen-xl mx-auto mt-40 mb-16 sm:p-16 px-8 py-12 bg-[#222] rounded-3xl text-left shadow-md shadow-[#111]">
            <div className="flex items-center mb-8">
                <img src={contribute} className="sm:w-12 w-9 mr-3" alt="Community icon" />
                <h1 className="text-4xl font-bold text-indigo-300 sm:text-6xl">
                    Contribute
                </h1>
            </div>
            <p className="w-full text-md sm:text-lg text-white sm:w-3/4">
                Thank you for your interest in contributing! We value your input and encourage you to share your expertise by suggesting new additions, updates, and providing valuable feedback.
            </p>
        </header>
    )
}
