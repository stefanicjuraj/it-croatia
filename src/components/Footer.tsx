// Icons
import github from '/assets/icons/github.svg';
import linkedin from '/assets/icons/linkedin-light.svg';

export default function Footer() {
    return (
        <footer className="text-center mx-auto rounded-lg mb-24">
            <div className="inline-flex">
                <a href="https://github.com/stefanicjuraj/it-croatia" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub icon" className="w-8 h-8 mx-2" />
                </a>
                <a href="https://www.linkedin.com/in/jurajstefanic/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn icon" className="w-8 h-8 mx-2" />
                </a>
            </div>
        </footer>
    )
}