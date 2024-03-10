export default function Header() {
    return (
        <>
            <header className="max-w-screen-xl mx-auto mt-40 mb-16 sm:p-16 p-8 bg-[#222] rounded-3xl text-left shadow-md shadow-[#111">
                <h1 className="text-5xl font-bold text-indigo-400 sm:text-6xl">
                    Contribute
                </h1>
                <div className="flex my-4">
                    <p className="inline-flex items-center text-white">
                        <span className="flex items-center">
                            <span className="flex flex-shrink-0 w-2 h-2 mr-2 bg-indigo-400 rounded-full animate-pulse"></span>
                        </span>
                        Contributions are open
                    </p>
                </div>
                <p className="w-full text-md sm:text-lg text-white sm:w-3/4">
                    Thank you for your interest in contributing! We value your input and encourage you to share your expertise by suggesting new additions, updates, and providing valuable feedback.
                </p>
            </header>
        </>
    )
}
