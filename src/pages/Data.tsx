export default function Data() {

    return (

        <>
            <header className="max-w-screen-xl mx-auto mt-40 mb-16 sm:p-16 px-8 py-12 bg-[#222] rounded-3xl text-left shadow-md shadow-[#111]">
                <div className="flex items-center mb-8">
                    <h1 className="text-4xl font-bold text-indigo-300 sm:text-6xl">
                        Data Overview
                    </h1>
                </div>
                <p className="w-full text-white text-md sm:text-lg sm:w-3/4">
                    A collection of {" "}
                    <span className="bg-[#333] px-1 py-0.3 rounded-lg">data maps</span> {" "} of {" "}
                    <span className="bg-[#333] px-1 py-0.3 rounded-lg">IT companies</span> {" "}
                    conducting business operations, providing services, or offering consultancy in Croatia.
                </p>
            </header>

            <div className="max-w-screen-xl mx-auto mt-16 mb-16 sm:p-16 px-8 py-12 bg-[#222] rounded-3xl text-left shadow-md shadow-[#111]">
                <h2 className="text-white sm:text-3xl text-xl">Companies per city in IT Croatia</h2>
            </div>
            <div className="text-center mx-auto mt-32">
                <h1>test</h1>
                <iframe title="IT companies per city in Croatia" aria-label="Map" id="datawrapper-chart-RvbE4" src="https://datawrapper.dwcdn.net/RvbE4/5/" scrolling="no" style={{ padding: "8px", marginLeft: "auto", marginRight: "auto", borderRadius: "16px" }} frameBorder="0" width="600" height="732" data-external="1"></iframe>
            </div>
        </>
    )
}