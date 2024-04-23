// Icons
import github from '/assets/icons/github.svg';
import linkedin from '/assets/icons/linkedin-light.svg';

export default function Footer() {
    return (
        <footer className="max-w-screen-xl text-center mx-auto rounded-lg my-16">
            <hr className="border-[#333] mb-16" />
            <div className="inline-flex">
                <a href="https://github.com/stefanicjuraj/it-croatia" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub icon" className="w-8 h-8 mx-2" />
                </a>
                <a href="https://www.linkedin.com/posts/jurajstefanic_from-the-croit-community-on-reddit-activity-7174729313961795584-hFgt?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn icon" className="w-8 h-8 mx-2" />
                </a>
            </div>
        </footer>
    )
}