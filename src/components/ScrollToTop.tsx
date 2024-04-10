// Hooks
import { useShowScrollToTop } from '../hooks/useScrollToTop';
// Icons
import arrow from '/assets/icons/arrow-up.svg';

export const ScrollToTopComponent: React.FC = () => {
    const isShown = useShowScrollToTop();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isShown) {
        return null;
    }

    return (
        <button className="w-13 h-13 mr-3 mb-3 bg-[#222] hover:bg-[#333] border border-indigo-500 rounded-lg flex justify-center items-center fixed bottom-0 right-0 z-10"
            aria-label="Back to top"
            onClick={scrollToTop}
        >
            <img src={arrow} alt="Back to top arrow icon" className="w-5 h-5" />
        </button>
    );
};
