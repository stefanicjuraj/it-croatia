export default function Badge() {
    return (
        <div className="mx-auto text-center sm:px-4 px-4 mb-0 animation glow delay-1">
            <a
                href="https://skillsets.vercel.app/"
                className="inline-flex justify-between items-center py-2 px-2 pr-4 mb-7 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-20"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="flex w-2 h-2 ml-2 bg-indigo-500 rounded-full animate-pulse"></span>
                <span className="text-sm rounded-lg text-black pl-2 pr-0 py-1.5 mr-3 font-bold">
                    New
                </span>{" "}
                <span className="text-sm rounded-lg text-indigo-500 pl-0 py-1.5 mr-3 font-bold">
                    SkillSets
                </span>{" "}
                <span className="text-xs">
                    Discover most wanted skills by recruiters
                </span>
                <svg
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </a>
        </div>
    );
}
