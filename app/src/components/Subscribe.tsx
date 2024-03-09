import arrow from "/assets/icons/arrow-right.svg";

export default function Subscribe() {
    const accessKey = import.meta.env.VITE_ACCESS_KEY || '';

    return (
        <form method="POST" action="https://api.web3forms.com/submit">
            <input type="hidden" name="access_key" value={accessKey} />
            <input type="hidden" name="redirect" value=""></input>
            <input type="hidden" name="from_name" value=""></input>
            <input type="hidden" name="subject" value="New Subscription"></input>
            <div className="relative z-0 mx-auto mt-32 mb-4 w-80 group">
                <input className="bg-[#333] border border-indigo-300 text-white text-md rounded-lg focus:ring-1 focus:outline-none focus:ring-indigo-300 block w-80 p-3"
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    maxLength={50}
                    required />
            </div>
            <button type="submit" className="flex px-5 py-3 mx-auto font-normal text-center text-white bg-indigo-500 rounded-lg text-md hover:bg-indigo-500 focus:ring-1 focus:outline-none focus:ring-indigo-300">
                Subscribe to receive updates
                <img src={arrow} className="w-6 h-6 ms-2" alt="Arrow icon" />
            </button>
        </form>
    )

}
