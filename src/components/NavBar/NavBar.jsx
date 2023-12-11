import { VscSearch } from 'react-icons/vsc';
import { LiaSmsSolid } from 'react-icons/lia';
import { PiSpeakerHigh } from 'react-icons/pi';
import { FaChevronUp } from 'react-icons/fa6';
import { HiOutlineSpeakerXMark } from 'react-icons/hi2';

import windowsIcon from '../../assets/icons/windowsHomeIcon.svg';
import windowsIconDark from '../../assets/icons/windowsHomeDark.svg';
import windowsIconLight from '../../assets/icons/windowsHomeLight.svg';
import placeholderImage from '../../assets/images/placeholderImage.png';
import EthernetIconLight from '../../assets/icons/EthernetIconLight.png';
import EthernetIconDark from '../../assets/icons/EthernetIconDirk.png';
import { useState } from 'react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import SideBar from '../SideBar/SideBar';
import TimeShow from '../TimeShow/TimeShow';
import MainWindowPopup from '../MainWindowPopup/MainWindowPopup';

const NavBar = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [isSoundOff, setIsSoundOff] = useState(false);
    const [showRunningApp, setShowRunningApp] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);
    const [isClickWindowBtn, setIsClickWindowBtn] = useState(false);

    const handleSearchBox = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <header>
            <nav
                className="fixed bottom-0 left-0 z-50 w-screen h-[2.59rem] bg-[#CDD3D6] dark:bg-[#282C2D] 
            text-black dark:text-white">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className=" ">
                            <div
                                className=" p-3 w-fit group"
                                onClick={() =>
                                    setIsClickWindowBtn(!isClickWindowBtn)
                                }>
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
                                {isClickWindowBtn && (
                                    <div className="fixed top-0 left-0 w-screen h-screen"></div>
                                )}
                            </div>

                            <MainWindowPopup
                                isClickWindowBtn={isClickWindowBtn}
                            />
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
                                            : searchText.length > 0
                                            ? 'dark:text-white text-black'
                                            : ''
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

                    <div className="flex items-center">
                        {/* running app section */}
                        <div className=" relative">
                            <div
                                className="py-3 px-1 hover:bg-white/10 duration-200 hover:cursor-pointer"
                                onClick={() =>
                                    setShowRunningApp(!showRunningApp)
                                }>
                                <FaChevronUp />
                                <div
                                    className={`${
                                        showRunningApp ? 'block' : 'hidden'
                                    } fixed top-0 left-0 w-screen h-screen`}></div>
                            </div>

                            <div
                                className={`${
                                    showRunningApp ? 'block' : 'hidden'
                                } absolute bottom-[2.6rem] left-0 w-32 min-h-[2rem] bg-[#cdd3d6cc] dark:bg-[#282c2dd2] flex items-center flex-wrap hover:cursor-pointer`}>
                                <div className="hover:bg-white/20 duration-200 w-10 h-10 overflow-hidden flex items-center justify-center">
                                    <DarkModeToggle />
                                </div>
                            </div>
                        </div>
                        <div className="py-3 px-1 mx-1 hover:bg-white/10 duration-200">
                            <figure className="">
                                <img
                                    src={EthernetIconDark}
                                    alt="EthernetIconDark"
                                    className="hidden dark:block"
                                />
                                <img
                                    src={EthernetIconLight}
                                    alt="EthernetIconDark"
                                    className="block dark:hidden"
                                />
                            </figure>
                        </div>

                        <div
                            onClick={() => setIsSoundOff(!isSoundOff)}
                            className="py-3 px-1 mx-1 text-xl hover:bg-white/10 duration-200 hover:cursor-pointer">
                            {isSoundOff ? (
                                <HiOutlineSpeakerXMark />
                            ) : (
                                <PiSpeakerHigh />
                            )}
                        </div>
                        <TimeShow />
                        <div className="">
                            <div
                                className="text-xl p-3 mr-3 hover:bg-white/10 duration-200 hover:cursor-pointer"
                                onClick={() => setShowSideBar(!showSideBar)}>
                                <LiaSmsSolid className="" />

                                <div
                                    className={`${
                                        showSideBar ? 'block' : 'hidden'
                                    } fixed top-0 left-0 w-screen h-screen`}></div>
                            </div>

                            {/* side bar */}
                            <SideBar showSideBar={showSideBar} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
