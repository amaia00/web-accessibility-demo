import {Link, Outlet} from "react-router-dom";

const NavigationBar = () => {
    const className = 'hover:text-gray-500 hover:underline';
    return (
        <div className="bg-gray-100 min-h-screen px-4 py-4 md:pb-16">
            <header className=" lg:max-w-screen-lg mx-auto md:mt-8">
                <nav className="flex space-x-8 md:space-x-24 font-serif">
                    <Link to="/" className={className}>
                        <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                            <path d="M16 256L256 64l96 72v-32h48v72l96 80h-48v192H328V288h-96v160H64V256z">
                            </path>
                        </svg>
                    </Link>
                    <Link to="/salem" className={className}>Salem</Link>
                </nav>
            </header>

            <Outlet/>
        </div>
    );
};

export default NavigationBar;
