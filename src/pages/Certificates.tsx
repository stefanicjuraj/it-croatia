import { useState } from 'react';
// Hooks
import { useCertificate } from '../hooks/useCertificate';
// Components
import Loading from '../components/Loading';
import Header from '../components/Certificate/Header';
import { Search } from '../components/Search';
import TableHead from '../components/Certificate/TableHead';
import { TableBody } from '../components/Certificate/TableBody';

export default function Certificates() {
    const { certificates, loading, error } = useCertificate();
    const [certificateSearch, setCertificateSearch] = useState("");

    const searchCertificate = certificates.filter((certificates) => {
        const certificateName = certificates.Certificate.toLowerCase();
        const search = certificateSearch.toLowerCase();
        return certificateName.includes(search);
    });


    if (error) {
        return <div>Error</div>;
    }

    return (
        <>
            <Header />
            {loading ? (
                <Loading />
            ) : (
                <>
                    <section className="relative px-4 mx-auto max-w-screen-xl sm:px-0 animation glow delay-1">
                        <div className="flex flex-wrap items-center mb-8 sm:flex-nowrap">
                            <div className="relative mr-4 text-white sm:w-96 w-80">
                                <Search
                                    onSearchChange={setCertificateSearch}
                                    placeholder="Search certificates"
                                />
                                <p className="absolute right-2 bottom-2 bg-[#333] rounded-full px-5 py-2">
                                    {searchCertificate.length} results
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="px-4 mx-auto mb-40">
                        <div className="mx-auto overflow-x-auto max-w-screen-xl rounded-t-xl rounded-b-xl">
                            <table className="w-full text-left text-white">
                                <TableHead />
                                <TableBody certificate={searchCertificate} />
                            </table>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}
