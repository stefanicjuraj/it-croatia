import searchicon from '/assets/icons/search.svg';

export const Search = ({ search, searchInput, placeholder }: { search: string, searchInput: (event: React.ChangeEvent<HTMLInputElement>) => void, placeholder: string }) => {

    return (
        <form className="flex items-center relative w-96 mr-4">
            <div className="relative w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <img src={searchicon} className="w-5 h-5" alt="Search icon" />
                </div>
                <input className="block w-96 p-4 pl-10 text-white bg-[#222] border-[#333] rounded-xl focus:border-indigo-400"
                    type="text"
                    value={search}
                    onChange={searchInput}
                    placeholder={placeholder}
                    autoComplete="off"
                />
            </div>
        </form>
    );

};
