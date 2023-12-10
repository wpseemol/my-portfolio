import { VscSearch } from 'react-icons/vsc';
import windowsIcon from '../../assets/icons/windowsHomeIcon.svg';
import windowsIconDark from '../../assets/icons/windowsHomeDark.svg';
import windowsIconLight from '../../assets/icons/windowsHomeLight.svg';
import placeholderImage from '../../assets/images/placeholderImage.png';
import { useState } from 'react';

const NavBar = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleSearchBox = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <header>
            <nav
                className="fixed bottom-0 left-0 w-screen bg-[#CDD3D6] dark:bg-[#282C2D] 
            text-black dark:text-white">
                <div className="flex items-center">
                    <div className="p-3  w-fit group">
                        <figure className="w-[1.30rem] relative">
                            <img
                                src={windowsIcon}
                                alt="Windows Icon"
                                className="text-black opacity-0 group-hover:opacity-100 duration-200 absolute z-[1] group-hover:z-[3] top-0 left-0"
                            />
                            <img
                                src={windowsIconDark}
                                alt="Windows Icon"
                                className="text-black hidden dark:block group-hover:opacity-0 duration-200"
                            />
                            <img
                                src={windowsIconLight}
                                alt="Windows Icon"
                                className="text-black block dark:hidden group-hover:opacity-0 duration-200"
                            />
                        </figure>
                    </div>
                    <div className="w-fit h-fit relative">
                        <input
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={handleSearchBox}
                            type="text"
                            name="searchBox"
                            id="searchBox"
                            placeholder="Type here to search"
                            className={`${
                                isFocus
                                    ? 'bg-white text-black'
                                    : 'dark:bg-[#3F3F3F] bg-white'
                            } h-[2.65rem] w-[18rem] dark:border border-[#808080] outline-none focus:border-spacing-1 pl-10`}
                        />

                        {/* search icon */}
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">
                            <VscSearch
                                className={`${
                                    isFocus
                                        ? 'text-black'
                                        : 'dark:text-white text-black'
                                }`}
                            />
                        </div>

                        {/* placeholder image */}
                        <div
                            className={`${
                                searchText.length > 0 ? 'hidden' : 'block'
                            } absolute right-0 top-1/2 -translate-y-1/2`}>
                            <figure>
                                <img
                                    src={placeholderImage}
                                    alt="placeholder image"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
