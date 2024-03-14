export default function Loading() {
    return (
        <>
            <section className="max-w-screen-xl px-4 mx-auto sm:px-0">
                <form className="flex items-center mb-8 animation glow delay-1">
                    <div className="relative">
                        <div className="h-14 w-96 bg-[#333] rounded-xl"></div>
                    </div>
                </form>
            </section>
            <section className="max-w-screen-xl px-0 mx-auto mb-40 xl:max-w-screen-2xl">
                <div className="relative max-w-screen-xl mx-auto overflow-x-auto rounded-t-xl rounded-b-xl">
                    <table className="w-full">
                        <thead className="bg-[#222] border-b border-[#222]">
                            <tr>
                                <th scope="col" className="py-8 px-7">
                                    <div className="h-6 w-24 bg-[#555] rounded-full"></div>
                                </th>
                                <th scope="col" className="py-8 px-7">
                                    <div className="h-6 w-24 bg-[#555] rounded-full"></div>
                                </th>
                                <th scope="col" className="py-8 px-7">
                                    <div className="h-6 w-24 bg-[#555] rounded-full"></div>
                                </th>
                                <th scope="col" className="py-8 px-7">
                                    <div className="h-6 w-24 bg-[#555] rounded-full"></div>
                                </th>
                                <th scope="col" className="py-8 px-7">
                                    <div className="h-6 w-24 bg-[#555] rounded-full"></div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-[#222] border-t border-[#555]">
                                <td className="px-7 py-7 whitespace-nowrap">
                                    <div className="h-6 w-24 bg-[#555] rounded-full"></div>
                                    <br />
                                    <div className="h-4 w-56 bg-[#555] rounded-full"></div>
                                </td>
                                <td className="text-xs px-7 py-7">
                                    <div className="h-6 w-24 mr-1 bg-[#555] rounded-full inline-flex"></div>
                                    <div className="h-6 w-24 mr-1 bg-[#555] rounded-full inline-flex"></div>
                                    <div className="h-6 w-16 bg-[#555] rounded-full inline-flex"></div>
                                </td>
                                <td className="px-14 py-7">
                                    <div className="h-10 w-10 bg-[#555] rounded-xl inline-flex"></div>
                                </td>
                                <td className="px-8 py-7 text-md">
                                    <div className="h-6 w-12 mr-1 bg-[#555] rounded-full inline-flex"></div>
                                </td>
                                <td className="px-7 py-7 text-md">
                                    <div className="h-6 w-16 mr-1 bg-[#555] rounded-full inline-flex"></div>
                                </td>
                            </tr>
                            <tr className="bg-[#222] border-t border-[#555]">
                                <td className="px-7 py-7 whitespace-nowrap">
                                    <div className="h-6 w-24 bg-[#555] rounded-full"></div>
                                    <br />
                                    <div className="h-4 w-56 bg-[#555] rounded-full"></div>
                                </td>
                                <td className="text-xs px-7 py-7">
                                    <div className="h-6 w-24 mr-1 bg-[#555] rounded-full inline-flex"></div>
                                    <div className="h-6 w-24 mr-1 bg-[#555] rounded-full inline-flex"></div>
                                    <div className="h-6 w-16 bg-[#555] rounded-full inline-flex"></div>
                                </td>
                                <td className="px-14 py-7">
                                    <div className="h-10 w-10 bg-[#555] rounded-xl inline-flex"></div>
                                </td>
                                <td className="px-8 py-7 text-md">
                                    <div className="h-6 w-12 mr-1 bg-[#555] rounded-full inline-flex"></div>
                                </td>
                                <td className="px-7 py-7 text-md">
                                    <div className="h-6 w-16 mr-1 bg-[#555] rounded-full inline-flex"></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
